/**
 * Diagnostic endpoint.
 *
 * The React app pings this on the customer-facing pages so we can tell
 * whether the serverless layer is even reachable on whatever host the
 * site is deployed to. Three failure modes it disambiguates:
 *
 *   1. Host doesn't run serverless functions at all (Lovable static
 *      preview, GitHub Pages, etc.). The catch-all SPA route serves
 *      index.html on /api/health; the response status is 200 but the
 *      body isn't JSON, so the React side's fetch().json() throws and
 *      we report "not-deployed".
 *   2. Host runs the function but COMPANIES_HOUSE_API_KEY isn't set.
 *      The endpoint returns {hasKey: false} so the UI tells the user
 *      to add the env var.
 *   3. Everything wired up. {hasKey: true} — UI shows green.
 *
 * Add COMPANIES_HOUSE_API_KEY in your hosting platform's environment
 * variables. Don't put it in the repo.
 */

export const config = { runtime: "edge" };

export default async function handler(_req: Request): Promise<Response> {
  const hasKey = !!process.env.COMPANIES_HOUSE_API_KEY;
  return new Response(
    JSON.stringify({
      status: "ok",
      runtime: "edge",
      hasKey,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    }
  );
}
