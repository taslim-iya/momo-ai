// Pings the Lovable Cloud edge function `companies-house-lookup` to verify
// the Companies House integration is wired up. Used by the customer pages
// to render a status pill.

export type BackendHealthStatus =
  | "checking"
  | "live"           // edge function reachable AND CH key present
  | "function-only"  // edge function reachable but no CH key configured
  | "not-deployed";  // edge function unreachable

export interface BackendHealthReport {
  status: BackendHealthStatus;
  detail?: string;
  checkedAt?: string;
}

export async function fetchBackendHealth(): Promise<BackendHealthReport> {
  try {
    const SUPABASE_URL = (import.meta as unknown as { env?: Record<string, string> })
      .env?.VITE_SUPABASE_URL;
    const ANON_KEY = (import.meta as unknown as { env?: Record<string, string> })
      .env?.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!SUPABASE_URL || !ANON_KEY) {
      return { status: "not-deployed", detail: "Lovable Cloud is not configured." };
    }
    // Probe with a known-good company number (Greggs PLC).
    const resp = await fetch(
      `${SUPABASE_URL}/functions/v1/companies-house-lookup?q=00502851`,
      {
        headers: {
          apikey: ANON_KEY,
          Authorization: `Bearer ${ANON_KEY}`,
          accept: "application/json",
        },
        cache: "no-store",
      },
    );
    if (resp.status === 500) {
      const body = await resp.json().catch(() => ({}));
      if (typeof body?.error === "string" && body.error.includes("COMPANIES_HOUSE_API_KEY")) {
        return {
          status: "function-only",
          detail: "Edge function deployed, but COMPANIES_HOUSE_API_KEY is not set.",
          checkedAt: new Date().toISOString(),
        };
      }
      return { status: "not-deployed", detail: `Edge function returned HTTP 500.` };
    }
    if (!resp.ok) {
      return { status: "not-deployed", detail: `Edge function returned HTTP ${resp.status}` };
    }
    const data = await resp.json();
    if (!data?.company_number) {
      return { status: "not-deployed", detail: "Unexpected response from edge function." };
    }
    return { status: "live", checkedAt: new Date().toISOString() };
  } catch (err) {
    return {
      status: "not-deployed",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}
