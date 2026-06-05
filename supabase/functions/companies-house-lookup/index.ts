import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CH_BASE = "https://api.company-information.service.gov.uk";
const NUMBER_RE = /^[A-Za-z0-9]{8}$/;

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

async function ch<T>(apiKey: string, path: string): Promise<T | null> {
  const auth = `Basic ${btoa(`${apiKey}:`)}`;
  const r = await fetch(`${CH_BASE}${path}`, {
    headers: { Authorization: auth, Accept: "application/json" },
  });
  if (r.status === 404) return null;
  if (!r.ok) return null;
  return (await r.json()) as T;
}

function ageYears(iso?: string): number | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  return Math.max(0, Math.floor((Date.now() - t) / (365.25 * 86400000)));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const apiKey = Deno.env.get("COMPANIES_HOUSE_API_KEY");
  if (!apiKey) return json(500, { error: "COMPANIES_HOUSE_API_KEY not configured" });

  const url = new URL(req.url);
  const raw = (url.searchParams.get("q") ?? "").trim();
  if (!raw) return json(400, { error: "Missing q" });

  let number: string | null = null;
  if (NUMBER_RE.test(raw)) {
    number = raw.toUpperCase();
  } else {
    const search = await ch<{ items?: Array<{ company_number?: string; score?: number }> }>(
      apiKey,
      `/search/companies?q=${encodeURIComponent(raw)}&items_per_page=5`,
    );
    const items = (search?.items ?? []).slice().sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    number = items[0]?.company_number ?? null;
    if (!number) return json(404, { error: "No company matched" });
  }

  const profile = await ch<{
    company_number?: string;
    company_name?: string;
    sic_codes?: string[];
    registered_office_address?: {
      address_line_1?: string;
      address_line_2?: string;
      locality?: string;
      postal_code?: string;
      country?: string;
    };
    date_of_creation?: string;
    company_status?: string;
    type?: string;
  }>(apiKey, `/company/${number}`);
  if (!profile) return json(404, { error: "Company not found" });

  const filings = await ch<{ items?: Array<{ date?: string }> }>(
    apiKey,
    `/company/${number}/filing-history?category=accounts&items_per_page=5`,
  );

  const addr = profile.registered_office_address ?? {};
  return json(200, {
    company_number: profile.company_number ?? null,
    company_name: profile.company_name ?? null,
    sic_codes: profile.sic_codes ?? [],
    postcode: addr.postal_code ?? null,
    address_line_1: addr.address_line_1 ?? null,
    address_line_2: addr.address_line_2 ?? null,
    locality: addr.locality ?? null,
    country: addr.country ?? null,
    incorporation_date: profile.date_of_creation ?? null,
    company_age_years: ageYears(profile.date_of_creation),
    status: profile.company_status ?? null,
    company_type: profile.type ?? null,
    last_accounts_date: filings?.items?.[0]?.date ?? null,
  });
});
