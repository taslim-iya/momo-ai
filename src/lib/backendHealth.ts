// Pings /api/health to find out whether the serverless layer is wired up
// and whether the Companies House key is in place. Used by the customer
// pages to render a status pill so a 'why am I seeing mock data?' question
// has an immediate answer.

export type BackendHealthStatus =
  | "checking"
  | "live"           // function reachable AND CH key present
  | "function-only"  // function reachable but no CH key configured
  | "not-deployed";  // host doesn't run serverless functions (SPA fallback / 404 etc.)

export interface BackendHealthReport {
  status: BackendHealthStatus;
  detail?: string;
  checkedAt?: string;
}

const HEALTH_PATH = "/api/health";

export async function fetchBackendHealth(): Promise<BackendHealthReport> {
  try {
    const resp = await fetch(HEALTH_PATH, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (!resp.ok) {
      return { status: "not-deployed", detail: `health endpoint returned HTTP ${resp.status}` };
    }
    // If the SPA's catch-all served index.html (200 OK but HTML body), JSON
    // parsing will throw and we report not-deployed. That's the most common
    // failure mode for hosts that don't run /api/* as functions.
    const data = (await resp.json()) as { hasKey?: boolean; status?: string; runtime?: string };
    if (data.status !== "ok") {
      return { status: "not-deployed", detail: "health endpoint returned non-ok payload" };
    }
    if (!data.hasKey) {
      return {
        status: "function-only",
        detail: "Function deployed, but COMPANIES_HOUSE_API_KEY is not set.",
        checkedAt: new Date().toISOString(),
      };
    }
    return { status: "live", checkedAt: new Date().toISOString() };
  } catch (err) {
    return {
      status: "not-deployed",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}
