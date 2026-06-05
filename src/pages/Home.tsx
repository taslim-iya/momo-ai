import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Shield, Zap, Scale, Check, Bitcoin, Wallet, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTARow, SectionHeader } from "@/components/atlas/Bits";
import { HeroDashboard } from "@/components/atlas/HeroDashboard";

export default function Home() {
  return (
    <>
      {/* HERO — Layered Precision */}
      <section className="relative overflow-hidden bg-paper">
        {/* Ambient orange glows */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 -left-24 h-[55%] w-[55%] rounded-full bg-accent/15 blur-[140px] animate-pulse" />
          <div className="absolute -bottom-32 -right-24 h-[45%] w-[45%] rounded-full bg-accent/10 blur-[120px]" />
        </div>
        {/* Masked grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, #000 60%, transparent 100%)",
          }}
        />

        <div className="container-atlas relative pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card px-4 py-1.5 shadow-[0_2px_10px_hsl(var(--accent)/0.08)] transition-transform hover:scale-[1.03]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-medium tracking-tight text-ink/80">
                Business insurance, finally simple
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 font-display font-bold text-6xl md:text-7xl lg:text-[112px] leading-[0.92] tracking-[-0.035em] text-ink animate-fade-in">
              Cover that
              <br />
              <span className="relative inline-block italic font-semibold text-accent tracking-[-0.045em] [text-shadow:0_10px_30px_hsl(var(--accent)/0.18)]">
                actually fits.
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-accent/40"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M1 10C50 3 150 3 299 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground">
              Momo finds the right business insurance for your company in minutes.
              <br className="hidden md:block" />
              <span className="font-medium text-ink"> Clearer cover, fairer prices, no jargon.</span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group relative h-14 px-8 rounded-2xl font-semibold overflow-hidden bg-ink text-paper hover:bg-ink hover:-translate-y-0.5 hover:shadow-[0_20px_40px_hsl(var(--ink)/0.2)] transition-all">
                <Link to="/analysis">
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-paper/20 to-transparent group-hover:animate-shimmer-sweep" />
                  <span className="relative flex items-center gap-2">
                    Get my analysis
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl font-semibold bg-card border-border hover:bg-secondary/60 shadow-sm">
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="mt-16 w-full max-w-3xl border-t border-accent/20 pt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-75 hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Free, no obligation
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-accent" /> FCA-aware
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-accent" /> Human-reviewed
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Bitcoin className="h-3.5 w-3.5" /> Pay in crypto or card
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section">
        <div className="container-atlas">
          <SectionHeader
            eyebrow="Why Momo"
            title={<>Insurance that <span className="text-accent italic">works for you.</span></>}
            description="Built for modern businesses who want clarity, speed and cover that genuinely matches their risk."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            <ValueCard
              icon={Zap}
              title="Minutes, not weeks"
              body="Tell us about your business once. Get a clear picture of what cover you need and what it should cost - fast."
            />
            <ValueCard
              icon={Shield}
              title="Cover that fits"
              body="No generic packages. We match your actual exposures to the right policies, and flag the gaps most brokers miss."
            />
            <ValueCard
              icon={Scale}
              title="Fair, transparent pricing"
              body="See what you're paying for and why. We negotiate with insurers so you don't pay for cover you don't need."
            />
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow text-muted-foreground">
                <span className="h-px w-6 bg-muted-foreground/40" />
                Live picture
              </div>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight text-balance">
                One view of your <span className="text-accent italic">whole insurance stack.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-md">
                Cover, quotes, renewals and gaps in a single place. No more scattered PDFs or chasing brokers for updates.
              </p>
            </div>
            <div className="lg:col-span-7">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow text-muted-foreground">
                  <span className="h-px w-6 bg-muted-foreground/40" />
                  Pay your way
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
                  Card, bank transfer or <span className="text-accent italic">crypto.</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Settle your premium in pounds, dollars or euros, or pay in Bitcoin, Ethereum or USDC. Same cover, your choice of rails.
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                <PayTile icon={CreditCard} label="Card" sub="Visa, Mastercard, Amex" />
                <PayTile icon={Wallet} label="Bank" sub="ACH, SEPA, Faster Payments" />
                <PayTile icon={Bitcoin} label="Crypto" sub="BTC, ETH, USDC" accent />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SIMPLE */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-gradient-paper p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="eyebrow text-muted-foreground">
                  <span className="h-px w-6 bg-muted-foreground/40" />
                  60-second analysis
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight text-balance">
                  See your insurance picture before you talk to anyone.
                </h2>
                <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                  Drop in your company website. We'll show you the cover you likely need,
                  the gaps to close, and what good pricing looks like.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Personalised risk overview",
                    "Recommended policies, ranked",
                    "Pricing benchmarks",
                    "What to ask your current broker",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm md:text-base">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-9">
                  <Button asChild variant="atlas" size="lg">
                    <Link to="/insurance-analysis">Run free analysis <ArrowUpRight className="h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-elev">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    your-company.com
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <Sample label="Industry" value="SaaS / Fintech" />
                    <Sample label="Risk profile" value="Moderate" />
                    <Sample label="Essential cover" value="Cyber, PI, EL" accent />
                    <Sample label="Estimated annual premium" value="£4,800 – £6,200" />
                    <Sample label="Gaps to close" value="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section bg-secondary/40">
        <div className="container-atlas">
          <SectionHeader
            eyebrow="Who we help"
            title={<>Built for <span className="text-accent italic">modern businesses.</span></>}
            description="From early-stage startups to established firms - if your business is moving fast, your insurance should too."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "SaaS & Tech", body: "Cyber, PI and IP cover for software companies." },
              { tag: "Fintech", body: "Regulated cover for payments, lending and crypto." },
              { tag: "AI Companies", body: "Specialist cover for AI products and model risk." },
              { tag: "Professional Services", body: "PI, management liability and cyber done right." },
            ].map((s) => (
              <div key={s.tag} className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/50 hover:shadow-elev transition-all">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">{s.tag}</div>
                <p className="mt-4 text-ink leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 pt-4">
        <div className="container-atlas">
          <div className="rounded-3xl border border-border bg-gradient-paper p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-light opacity-30" />
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight max-w-2xl">
                  Get the right cover. <span className="text-accent italic">In minutes.</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl">
                  Free analysis. No credit card. No sales call required.
                </p>
              </div>
              <CTARow primaryLabel="Get my analysis" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: React.ComponentType<{className?:string}>; title: string; body: string }) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elev hover:border-accent/40 hover:-translate-y-0.5 transition-all">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-ink tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Sample({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-accent font-semibold font-mono" : "text-ink font-medium font-mono"}>{value}</span>
    </div>
  );
}

function PayTile({ icon: Icon, label, sub, accent }: { icon: React.ComponentType<{className?:string}>; label: string; sub: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 flex flex-col gap-2 ${accent ? "border-accent/50 bg-accent/5" : "border-border bg-background"}`}>
      <Icon className={`h-5 w-5 ${accent ? "text-accent" : "text-ink"}`} />
      <div className="font-display font-semibold text-ink text-sm">{label}</div>
      <div className="text-[11px] text-muted-foreground font-mono leading-tight">{sub}</div>
    </div>
  );
}
