import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Zap, Scale, Check, Bitcoin, Wallet, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTARow, SectionHeader } from "@/components/atlas/Bits";
import { HeroDashboard } from "@/components/atlas/HeroDashboard";

export default function Home() {
  return (
    <>
      {/* HERO — editorial, restrained */}
      <section className="relative overflow-hidden bg-paper border-b border-border/60">
        <div className="container-atlas relative pt-20 md:pt-28 pb-16 md:pb-24">
          {/* Eyebrow row */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-ink/30" />
            <span>Momo — Business Insurance</span>
            <span className="hidden md:inline text-muted-foreground/60">/ 2026</span>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            {/* Headline */}
            <div className="lg:col-span-8">
              <h1 className="font-display font-medium text-[44px] md:text-6xl lg:text-[80px] leading-[0.98] tracking-[-0.03em] text-ink">
                Cover that actually
                <br />
                fits your business<span className="text-accent">.</span>
              </h1>
            </div>

            {/* Sub + CTAs */}
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground max-w-md">
                Momo analyses your company, benchmarks the market and arranges the
                right policies — clearer cover, fairer prices, no jargon.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="h-12 px-6 rounded-full font-medium bg-ink text-paper hover:bg-ink/90">
                  <Link to="/analysis" className="inline-flex items-center gap-2">
                    Get my analysis
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="h-12 px-5 rounded-full font-medium text-ink hover:bg-secondary/60">
                  <Link to="/contact">Book a call</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Meta strip */}
          <div className="mt-16 md:mt-24 border-t border-border pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <MetaItem k="01" label="Free analysis" sub="No card, no obligation" />
            <MetaItem k="02" label="FCA-aware" sub="UK regulated brokers" />
            <MetaItem k="03" label="Human reviewed" sub="Every quote, every time" />
            <MetaItem k="04" label="Card or crypto" sub="GBP · USD · EUR · BTC" />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section">
        <div className="container-atlas">
          <SectionHeader
            eyebrow="Why Momo"
            title={<>Insurance that works for you.</>}
            description="Built for modern businesses who want clarity, speed and cover that genuinely matches their risk."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            <ValueCard
              num="01"
              icon={Zap}
              title="Minutes, not weeks"
              body="Tell us about your business once. Get a clear picture of what cover you need and what it should cost — fast."
            />
            <ValueCard
              num="02"
              icon={Shield}
              title="Cover that fits"
              body="No generic packages. We match your actual exposures to the right policies, and flag the gaps most brokers miss."
            />
            <ValueCard
              num="03"
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
                One view of your whole insurance stack.
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
          <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow text-muted-foreground">
                  <span className="h-px w-6 bg-muted-foreground/40" />
                  Pay your way
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight">
                  Card, bank transfer or crypto.
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
          <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
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
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
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
                <div className="rounded-xl border border-border bg-background p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>your-company.com</span>
                    <span className="text-accent">Live</span>
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
      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-atlas">
          <SectionHeader
            eyebrow="Who we help"
            title={<>Built for modern businesses.</>}
            description="From early-stage startups to established firms — if your business is moving fast, your insurance should too."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tag: "SaaS & Tech", body: "Cyber, PI and IP cover for software companies." },
              { tag: "Fintech", body: "Regulated cover for payments, lending and crypto." },
              { tag: "AI Companies", body: "Specialist cover for AI products and model risk." },
              { tag: "Professional Services", body: "PI, management liability and cyber done right." },
            ].map((s) => (
              <div key={s.tag} className="group rounded-xl border border-border bg-card p-6 hover:border-ink/30 transition-colors">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent">{s.tag}</div>
                <p className="mt-4 text-ink leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="container-atlas">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.02] tracking-tight max-w-2xl">
                  Get the right cover. In minutes.
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

function MetaItem({ k, label, sub }: { k: string; label: string; sub: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-[11px] text-muted-foreground pt-0.5">{k}</span>
      <div>
        <div className="text-ink font-medium">{label}</div>
        <div className="text-muted-foreground text-[13px]">{sub}</div>
      </div>
    </div>
  );
}

function ValueCard({ num, icon: Icon, title, body }: { num: string; icon: React.ComponentType<{className?:string}>; title: string; body: string }) {
  return (
    <div className="relative bg-card p-8 md:p-10 hover:bg-background transition-colors">
      <div className="flex items-start justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink/5 text-ink">
          <Icon className="h-5 w-5" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">{num}</span>
      </div>
      <h3 className="mt-8 font-display text-xl md:text-2xl text-ink tracking-tight">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{body}</p>
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
    <div className={`rounded-xl border p-4 flex flex-col gap-2 ${accent ? "border-accent/40 bg-accent/5" : "border-border bg-background"}`}>
      <Icon className={`h-5 w-5 ${accent ? "text-accent" : "text-ink"}`} />
      <div className="font-display font-semibold text-ink text-sm">{label}</div>
      <div className="text-[11px] text-muted-foreground font-mono leading-tight">{sub}</div>
    </div>
  );
}
