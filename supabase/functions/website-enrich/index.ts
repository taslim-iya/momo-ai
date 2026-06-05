import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}

function normalizeUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    return u.toString();
  } catch {
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function metaContent(html: string, name: string): string | null {
  const re = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']+)["']`,
    "i",
  );
  return html.match(re)?.[1] ?? null;
}

function titleOf(html: string): string | null {
  return html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() ?? null;
}

function anyMatch(text: string, patterns: RegExp[]): string[] {
  const hits: string[] = [];
  for (const p of patterns) {
    const m = text.match(p);
    if (m) hits.push(m[0]);
  }
  return hits;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const url = new URL(req.url);
  const target = normalizeUrl(url.searchParams.get("url") ?? "");
  if (!target) return json(400, { error: "Missing or invalid url" });

  let html = "";
  let finalUrl = target;
  try {
    const r = await fetch(target, {
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; MomoInsureBot/1.0; +https://momoinsureai.lovable.app)",
        Accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(8000),
    });
    finalUrl = r.url;
    if (!r.ok) return json(200, { url: target, reachable: false, status: r.status });
    html = (await r.text()).slice(0, 400_000);
  } catch (e) {
    return json(200, { url: target, reachable: false, error: String(e) });
  }

  const title = titleOf(html);
  const description =
    metaContent(html, "description") ?? metaContent(html, "og:description");
  const ogSiteName = metaContent(html, "og:site_name");
  const text = (stripHtml(html) + " " + (description ?? "")).toLowerCase();

  const usesAI =
    anyMatch(text, [
      /\bai[- ]powered\b/, /\bartificial intelligence\b/, /\bmachine learning\b/,
      /\bllm\b/, /\bgenerative ai\b/, /\bgpt\b/, /\bneural network/,
    ]).length > 0;

  const handlesSensitiveData =
    anyMatch(text, [
      /\bgdpr\b/, /\bpersonal data\b/, /\bsensitive data\b/, /\bpii\b/,
      /\bhipaa\b/, /\bpatient\b/, /\bmedical record/, /\bpayment(s)? (data|details)\b/,
      /\bcredit card\b/, /\bkyc\b/, /\baml\b/, /\bphi\b/,
    ]).length > 0;

  const sellsToUS =
    anyMatch(text, [
      /\bunited states\b/, /\bu\.s\. customers\b/, /\bnorth america\b/,
      /\b(usd|\$us)\b/, /\bnew york\b/, /\bsan francisco\b/,
      /\b(headquartered|based) in (the )?us\b/,
    ]).length > 0;

  // Industry hints (mirrors analyzer industries)
  const industryHint =
    /\b(saas|software[- ]as[- ]a[- ]service|platform|api)\b/.test(text) ? "SaaS" :
    /\bfintech|payments|lending|neobank\b/.test(text) ? "Fintech" :
    /\b(ai company|ai lab|ai studio)\b/.test(text) ? "AI company" :
    /\b(law firm|consult(ing|ancy)|agency|accountant)\b/.test(text) ? "Professional services" :
    /\b(property management|landlord|letting|estate)\b/.test(text) ? "Property management" :
    /\b(restaurant|hotel|cafe|bar|pub|hospitality)\b/.test(text) ? "Hospitality" :
    /\b(retail|store|shop|e[- ]commerce|ecommerce)\b/.test(text) ? "Retail" :
    /\b(manufactur|factory|production line)\b/.test(text) ? "Manufacturing" :
    /\b(construction|builder|contractor)\b/.test(text) ? "Construction" :
    /\b(logistics|freight|courier|haulage|fleet)\b/.test(text) ? "Logistics" :
    /\b(care home|nursing|domiciliary)\b/.test(text) ? "Care services" :
    /\b(clinic|hospital|healthcare|gp practice)\b/.test(text) ? "Healthcare" :
    null;

  const employeeHint =
    /\b(500\+|over 500|1,?000\+ employees)\b/.test(text) ? "500+" :
    /\b(200|300|400) employees\b/.test(text) ? "201-500" :
    /\b(50|75|100|150) employees\b/.test(text) ? "51-200" :
    /\b(10|20|30|40) employees\b/.test(text) ? "11-50" :
    /\b(small team|startup|founders?)\b/.test(text) ? "1-10" :
    null;

  return json(200, {
    url: finalUrl,
    reachable: true,
    title,
    siteName: ogSiteName,
    description: description?.slice(0, 320) ?? null,
    signals: { usesAI, handlesSensitiveData, sellsToUS },
    industryHint,
    employeeHint,
  });
});
