import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Zap, Scale, Check, Bitcoin, Wallet, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTARow, SectionHeader } from "@/components/atlas/Bits";
import { HeroDashboard } from "@/components/atlas/HeroDashboard";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import logoAnimation from "@/assets/logo-animation.mp4";

const CREAM = "#FFFDF8";

// Two intersected linear-gradient masks feather all four edges of the video to
// transparent, melting it into the cream background without clipping the logo.
const featherMask =
  "linear-gradient(to right, transparent 0%, #000 24%, #000 76%, transparent 100%), " +
  "linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)";

export default function Home() {
  return (
    <>
      {/* HERO — cream canvas, copy left, logo animation right */}
      <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
        {/* Two very faint, heavily blurred accent light pools drifting slowly. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -top-40 -left-32 h-[60%] w-[55%] rounded-full bg-accent/[0.05] blur-[150px] animate-drift-a motion-reduce:animate-none" />
          <div className="absolute -bottom-40 right-0 h-[55%] w-[50%] rounded-full bg-accent/[0.04] blur-[160px] animate-drift-b motion-reduce:animate-none" />
        </div>

        <div className="container-atlas relative pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="grid items-center gap-12 lg:gap-8 lg:grid-cols-[1.35fr_1fr]">
            {/* Copy — left on desktop, second on mobile, layered above the video */}
            <div className="relative z-10 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
              {/* Badge */}
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card px-4 py-1.5 shadow-[0_2px_10px_hsl(var(--accent)/0.08)] transition-transform duration-300 hover:scale-[1.03]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-[11px] font-medium tracking-tight text-ink/80">
                    Business insurance, finally simple
                  </span>
                </div>
              </Reveal>

              {/* Headline — reveals line by line */}
              <h1 className="mt-8 font-display text-6xl leading-[0.95] tracking-[-0.035em] text-ink md:text-7xl lg:text-[104px]">
                <Reveal as="span" delay={80} className="block lg:whitespace-nowrap">
                  Cover that
                </Reveal>
                <Reveal as="span" delay={160} className="block lg:whitespace-nowrap">
                  <span className="relative inline-block text-accent tracking-[-0.045em] [text-shadow:0_10px_30px_hsl(var(--accent)/0.18)]">
                    actually fits.
                    <svg
                      className="absolute -bottom-2 left-0 h-3 w-full text-accent/40"
                      viewBox="0 0 300 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path d="M1 10C50 3 150 3 299 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </Reveal>
              </h1>

              {/* Subhead */}
              <Reveal delay={260}>
                <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl whitespace-pre-wrap">
                  Momo finds the right business insurance for your company in minutes.{"\n\n"}
                  <span className="font-medium text-ink">Clearer cover, fairer prices, no jargon.</span>
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={360}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group relative h-14 overflow-hidden rounded-2xl bg-ink px-8 font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_20px_40px_hsl(var(--ink)/0.2)]">
                    <Link to="/insurance-analysis">
                      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-paper/20 to-transparent group-hover:animate-shimmer-sweep" />
                      <span className="relative flex items-center gap-2">
                        Get my analysis
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 rounded-2xl border-border bg-card px-8 font-semibold shadow-sm transition-colors duration-300 hover:bg-secondary/60">
                    <Link to="/contact">Book a Call</Link>
                  </Button>
                </div>
              </Reveal>

              {/* Trust row */}
              <Reveal delay={460}>
                <div className="mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-accent/20 pt-8 opacity-75 transition-opacity duration-300 hover:opacity-100 lg:justify-start">
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
              </Reveal>
            </div>

            {/* Logo animation — first on mobile, right (bleeding off-edge) on desktop */}
            <div className="order-1 w-full animate-fade-in-slow motion-reduce:animate-none lg:order-2 lg:-my-32 lg:-mr-48 lg:ml-12 lg:max-w-7xl xl:-mr-80">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-auto w-full origin-center object-contain lg:scale-[1.8]"
                style={{
                  backgroundColor: CREAM,
                  WebkitMaskImage: featherMask,
                  maskImage: featherMask,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                <source src={logoAnimation} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAND */}
      <section className="section pt-16 md:pt-20">
        <div className="container-atlas">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card p-10 shadow-card sm:grid-cols-3 md:p-12">
              <Metric value={60} suffix="s" label="Average time to a full analysis" />
              <Metric value={3} label="Steps to get covered" />
              <Metric value={100} suffix="%" label="FCA-aware process" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="Why Momo"
              title={<>Insurance that <span className="text-accent">works for you.</span></>}
              description="Built for modern businesses who want clarity, speed and cover that genuinely matches their risk."
            />
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { icon: Zap, title: "Minutes, not weeks", body: "Tell us about your business once. Get a clear picture of what cover you need and what it should cost - fast." },
              { icon: Shield, title: "Cover that fits", body: "No generic packages. We match your actual exposures to the right policies, and flag the gaps most brokers miss." },
              { icon: Scale, title: "Fair, transparent pricing", body: "See what you're paying for and why. We negotiate with insurers so you don't pay for cover you don't need." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <ValueCard icon={v.icon} title={v.title} body={v.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — numbered steps on a connecting line */}
      <section className="section pt-0">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title={<>Three steps to <span className="text-accent">the right cover.</span></>}
              description="No forms to wrestle with, no jargon to decode. Here's the whole journey."
            />
          </Reveal>
          <div className="relative mt-16">
            {/* Connecting line behind the step markers */}
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {HOW_IT_WORKS.map((s, i) => (
                <Reveal key={s.title} delay={i * 160}>
                  <Step number={i + 1} title={s.title} body={s.body} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="section pt-0">
        <div className="container-atlas">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow text-muted-foreground">
                <span className="h-px w-6 bg-muted-foreground/40" />
                Live picture
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight text-balance text-ink md:text-5xl">
                One view of your <span className="text-accent">whole insurance stack.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Cover, quotes, renewals and gaps in a single place. No more scattered PDFs or chasing brokers for updates.
              </p>
            </Reveal>
            <Reveal delay={160} className="lg:col-span-7">
              <HeroDashboard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
              <div className="grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="eyebrow text-muted-foreground">
                    <span className="h-px w-6 bg-muted-foreground/40" />
                    Pay your way
                  </div>
                  <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-5xl">
                    Card, bank transfer or <span className="text-accent">crypto.</span>
                  </h2>
                  <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                    Settle your premium in pounds, dollars or euros, or pay in Bitcoin, Ethereum or USDC. Same cover, your choice of rails.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:col-span-5">
                  <PayTile icon={CreditCard} label="Card" sub="Visa, Mastercard, Amex" />
                  <PayTile icon={Wallet} label="Bank" sub="ACH, SEPA, Faster Payments" />
                  <PayTile icon={Bitcoin} label="Crypto" sub="BTC, ETH, USDC" accent />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 60-SECOND ANALYSIS */}
      <section className="section pt-0">
        <div className="container-atlas">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-paper p-10 md:p-16">
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <div className="eyebrow text-muted-foreground">
                    <span className="h-px w-6 bg-muted-foreground/40" />
                    60-second analysis
                  </div>
                  <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight text-balance text-ink md:text-5xl">
                    See your insurance picture before you talk to anyone.
                  </h2>
                  <p className="mt-5 max-w-xl text-lg text-muted-foreground">
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
                    <Button asChild variant="atlas" size="lg" className="group">
                      <Link to="/insurance-analysis">
                        Run free analysis
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-elev">
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
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
          </Reveal>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section bg-secondary/40">
        <div className="container-atlas">
          <Reveal>
            <SectionHeader
              eyebrow="Who we help"
              title={<>Built for <span className="text-accent">modern businesses.</span></>}
              description="From early-stage startups to established firms - if your business is moving fast, your insurance should too."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { tag: "SaaS & Tech", body: "Cyber, PI and IP cover for software companies." },
              { tag: "Fintech", body: "Regulated cover for payments, lending and crypto." },
              { tag: "AI Companies", body: "Specialist cover for AI products and model risk." },
              { tag: "Professional Services", body: "PI, management liability and cyber done right." },
            ].map((s, i) => (
              <Reveal key={s.tag} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-elev">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{s.tag}</div>
                  <p className="mt-4 leading-relaxed text-ink">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 pt-4">
        <div className="container-atlas">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-paper p-10 md:p-16">
              <div className="absolute inset-0 bg-grid-light opacity-30" />
              <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <h2 className="max-w-2xl font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-5xl">
                    Get the right cover. <span className="text-accent">In minutes.</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-muted-foreground">
                    Free analysis. No credit card. No sales call required.
                  </p>
                </div>
                <CTARow primaryLabel="Get my analysis" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const HOW_IT_WORKS = [
  { title: "Share your website", body: "Drop in your company URL. Momo reads your site to understand what your business actually does." },
  { title: "Get your analysis", body: "In around 60 seconds, see the cover you need, the gaps to close, and fair pricing benchmarks." },
  { title: "Review with a human", body: "An expert checks the detail, answers your questions, and tailors the recommendation to you." },
  { title: "Get covered", body: "Pay by card, bank transfer or crypto. Your policies are arranged and live, no chasing required." },
];

function Metric({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-5xl tracking-tight text-ink md:text-6xl">
        <CountUp to={value} />
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Step({ number, title, body }: { number: number; title: string; body: string }) {
  return (
    <div className="relative">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-card font-display text-xl text-accent shadow-card">
        {number}
      </div>
      <h3 className="mt-6 font-display text-xl tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-elev">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Sample({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "font-mono font-semibold text-accent" : "font-mono font-medium text-ink"}>{value}</span>
    </div>
  );
}

function PayTile({ icon: Icon, label, sub, accent }: { icon: React.ComponentType<{ className?: string }>; label: string; sub: string; accent?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${accent ? "border-accent/50 bg-accent/5" : "border-border bg-background"}`}>
      <Icon className={`h-5 w-5 ${accent ? "text-accent" : "text-ink"}`} />
      <div className="font-display text-sm font-semibold text-ink">{label}</div>
      <div className="font-mono text-[11px] leading-tight text-muted-foreground">{sub}</div>
    </div>
  );
}
