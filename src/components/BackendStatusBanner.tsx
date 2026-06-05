import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Info } from "lucide-react";
import {
  fetchBackendHealth,
  type BackendHealthReport,
} from "@/lib/backendHealth";
import { cn } from "@/lib/utils";

/**
 * Diagnostic banner — shows why Companies House lookups might be mocked.
 * Hidden in the "live" case so it only takes up screen real estate when
 * there's something for the operator to fix.
 */
export function BackendStatusBanner({ className }: { className?: string }) {
  const [report, setReport] = useState<BackendHealthReport>({ status: "checking" });

  useEffect(() => {
    let cancelled = false;
    fetchBackendHealth().then((r) => {
      if (!cancelled) setReport(r);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (report.status === "live") return null;
  if (report.status === "checking") {
    return (
      <div className={cn("rounded-lg border border-border bg-card px-4 py-3 text-xs text-muted-foreground flex items-center gap-2", className)}>
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Checking backend status…
      </div>
    );
  }

  const tone =
    report.status === "function-only"
      ? "border-warning/40 bg-warning/5 text-ink"
      : "border-border bg-secondary/40 text-ink";
  const Icon = report.status === "function-only" ? Info : AlertTriangle;

  const title =
    report.status === "function-only"
      ? "Serverless function is running but COMPANIES_HOUSE_API_KEY is not set."
      : "Companies House lookups are running on mock data.";

  const explainer =
    report.status === "function-only"
      ? "Add the env var in your hosting platform (Vercel: Project Settings → Environment Variables) and redeploy."
      : "Your hosting platform doesn't appear to run the api/company/[id].ts edge function. Curated demo numbers (Greggs, Wetherspoon, Tesco, ...) still return real CH data — they're baked in. Any other 8-character number falls back to synthetic data.";

  return (
    <div className={cn("rounded-lg border px-4 py-3 text-xs flex items-start gap-3", tone, className)}>
      <Icon className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-ink">{title}</div>
        <div className="mt-0.5 text-muted-foreground leading-relaxed">{explainer}</div>
        {report.detail && (
          <div className="mt-1 font-mono text-[10px] text-muted-foreground truncate">
            <CheckCircle2 className="inline h-3 w-3 mr-1" /> {report.detail}
          </div>
        )}
      </div>
    </div>
  );
}
