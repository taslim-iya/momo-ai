import { supabase } from "@/integrations/supabase/client";

export interface WebsiteEnrichment {
  url: string;
  reachable: boolean;
  title?: string | null;
  siteName?: string | null;
  description?: string | null;
  signals?: { usesAI: boolean; handlesSensitiveData: boolean; sellsToUS: boolean };
  industryHint?: string | null;
  employeeHint?: string | null;
}

const URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

export async function enrichFromWebsite(rawUrl: string): Promise<WebsiteEnrichment | null> {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;
  if (!URL || !KEY) return null;
  try {
    const r = await fetch(
      `${URL}/functions/v1/website-enrich?url=${encodeURIComponent(trimmed)}`,
      { headers: { Authorization: `Bearer ${KEY}`, apikey: KEY } },
    );
    if (!r.ok) return null;
    return (await r.json()) as WebsiteEnrichment;
  } catch {
    return null;
  }
}

// touch import to avoid unused warning when client is needed elsewhere later
void supabase;
