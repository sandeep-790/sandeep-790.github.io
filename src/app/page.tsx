"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, Settings, Zap, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

// ─── Data ────────────────────────────────────────────────────────────────────

const productDomains = [
  {
    title: "Restaurant Operations",
    color: "#00d4aa",
    icon: "🍽️",
    capabilities: [
      "Restaurant POS Systems",
      "KOT & Kitchen Management",
      "Table & Floor Management",
      "Multi-Terminal Workflows",
      "Offline-First Operations",
    ],
  },
  {
    title: "Commerce & Ordering",
    color: "#818cf8",
    icon: "🛒",
    capabilities: [
      "Catalog Management Systems",
      "Online Ordering Ecosystems",
      "Aggregator Integrations",
      "QR Menu & Dine-In",
      "Multi-Channel Sync",
    ],
  },
  {
    title: "Platform & Integration",
    color: "#00d4aa",
    icon: "⚙️",
    capabilities: [
      "Backend Platform Architecture",
      "Integration Platform & APIs",
      "Multi-Brand Operations",
      "Android Application Fleet",
      "Event-Driven Systems",
    ],
  },
  {
    title: "Merchant Solutions",
    color: "#818cf8",
    icon: "💼",
    capabilities: [
      "Finance Enablement Products",
      "Settlement & Reconciliation",
      "GST & Tax Compliance",
      "Payment Infrastructure",
      "Merchant Analytics",
    ],
  },
];

const heroMetrics = [
  { value: "60,000+", label: "Restaurant outlets", sub: "Petpooja platform" },
  { value: "12+",     label: "Product lines owned", sub: "Full end-to-end ownership" },
  { value: "47s→18s", label: "POS checkout time", sub: "Data model redesign" },
  { value: "3d→4hr",  label: "Menu propagation", sub: "Automated multi-channel sync" },
  { value: "40+",     label: "Integrations live", sub: "9-day partner onboarding" },
  { value: "99.7%",   label: "Platform uptime", sub: "Up from 98.1%" },
];

const featuredCaseStudies = [
  {
    id: "catalog-management",
    num: "01",
    title: "Catalog Management Platform",
    problem: "A 200-outlet chain was spending 3 days manually propagating a single price change across aggregators, POS terminals, and the website — with inconsistencies at every step.",
    insight: "The problem wasn't coordination — it was architecture. A shared catalog with an automated propagation engine made consistency a system property, not a manual discipline.",
    outcome: "Menu propagation: 3 days → 4 hours. 15,000+ outlets on unified catalog. Manual ops effort −78%.",
    tags: ["Catalog Architecture", "Multi-channel Sync", "Data Infrastructure"],
  },
  {
    id: "integrations-platform",
    num: "02",
    title: "Restaurant Integrations Platform",
    problem: "Every new aggregator integration was a 6-week custom engineering project. The integration team was permanently backlogged and had no leverage as the partner ecosystem grew.",
    insight: "Treating integrations as a product — canonical events, adapter pattern, production-fidelity sandbox — made each new partner a configuration exercise, not a project.",
    outcome: "Onboarding: 6 weeks → 9 days. 40+ integrations. 99.4% order acceptance rate.",
    tags: ["API Platform", "Partner Ecosystem", "Operational Automation"],
  },
  {
    id: "restaurant-pos",
    num: "03",
    title: "Restaurant POS Platform",
    problem: "Billing, kitchen, table management, and payment were four disconnected systems. Staff re-keyed at every boundary. Errors accumulated. Checkout averaged 47 seconds.",
    insight: "One order data model shared across all modules eliminates the re-keying steps that were both the time overhead and the source of errors.",
    outcome: "Checkout: 47s → 18s. Billing errors −34%. 4,200+ outlets. 99.3% uptime.",
    tags: ["POS", "Restaurant Ops", "Offline-First"],
  },
];

const philosophy = [
  {
    num: "01",
    title: "Systems fail at the seams, not the centre.",
    body: "The POS worked. The kitchen system worked. Orders still got lost — because no one designed the handoff. I start every product with the integration boundary: what data crosses it, in what shape, and what happens when it doesn't arrive.",
    icon: <Layers size={16} />,
  },
  {
    num: "02",
    title: "Operators don't have time to learn software.",
    body: "I spent two weeks in restaurants before writing the POS spec. During a lunch rush, a cashier will not read an error message — she'll press Cancel and start over. The product has to be right on the first tap, every time.",
    icon: <Settings size={16} />,
  },
  {
    num: "03",
    title: "A catalog updated once should be everywhere in minutes.",
    body: "Before I built the catalog system, a 200-outlet chain took 3 days to push a price change — manually, aggregator by aggregator. I made that propagation automatic and guaranteed. Not as a feature. As a platform invariant.",
    icon: <Zap size={16} />,
  },
  {
    num: "04",
    title: "Internal APIs have users too.",
    body: "I treat platform foundations like public products — versioned, documented, with explicit contracts. The 40% build-time reduction didn't come from working faster. It came from building predictable surfaces that other teams could rely on without asking.",
    icon: <TrendingUp size={16} />,
  },
];

const techExpertise = [
  {
    area: "Data Architecture",
    description: "Hierarchical data models, inheritance patterns, multi-tenant schema design. I've designed catalog schemas that serve 15,000 outlets simultaneously from a single canonical store.",
    items: ["Hierarchical data models", "Schema versioning", "Multi-tenant design", "Event sourcing"],
  },
  {
    area: "Event-Driven Systems",
    description: "Producer/consumer patterns, event schema design, delivery guarantees, idempotency. I've written the specs for the event backbone that decoupled six platform services.",
    items: ["Canonical event models", "Webhook delivery guarantees", "Idempotency contracts", "Consumer group design"],
  },
  {
    area: "API & Integration Design",
    description: "REST and gRPC API contracts, versioning strategy, sandbox environments, adapter patterns. I've designed the integration platform that onboards external partners in days.",
    items: ["API versioning strategy", "Adapter pattern", "Partner sandboxes", "Rate limit design"],
  },
  {
    area: "Mobile & Android",
    description: "Offline-first architecture, SQLite-backed local stores, OTA fleet management, role-specific UX for constrained hardware. 8,500+ devices in production.",
    items: ["Offline-first patterns", "OTA update channels", "Fleet monitoring", "Low-RAM design"],
  },
  {
    area: "Platform Scalability",
    description: "Domain service decomposition, circuit breakers, cascading failure prevention. I defined the service boundaries that took platform uptime from 98.1% to 99.7%.",
    items: ["Domain decomposition", "Circuit breakers", "Service contracts", "Deployment independence"],
  },
  {
    area: "Commerce Infrastructure",
    description: "Multi-channel order routing, aggregator sync, payment flow design, reconciliation engines. Payment reliability, settlement transparency, and automated reconciliation at scale.",
    items: ["Order routing logic", "UPI & EDC integration", "Settlement engines", "Reconciliation design"],
  },
];

const careerMilestones = [
  {
    year: "2020",
    period: "Early career",
    title: "Product Manager — Merchant Solutions",
    company: "Petpooja",
    description: "Joined to own merchant-facing tools and the integration platform. First products: GST compliance system, finance enablement layer, EDC and payment infrastructure.",
    highlights: ["GST standardization — 67% compliance error reduction", "Integration platform — 6 wks → 9 days onboarding", "Finance enablement — 41% settlement ticket reduction"],
  },
  {
    year: "2021",
    period: "Expanding scope",
    title: "Product Manager — Android & Finance",
    company: "Petpooja",
    description: "Took ownership of the Android restaurant application fleet — billing terminals, KDS, captain apps. Built the OTA update channel and fleet monitoring infrastructure for 8,500+ devices.",
    highlights: ["Android fleet: 99.1% crash-free rate across 8,500+ devices", "OTA update channel: 95% coverage in 48 hrs", "Proactive fleet alerting: issue detection cut from hours to minutes"],
  },
  {
    year: "2022",
    period: "Promotion",
    title: "Senior Product Manager — Restaurant Technology",
    company: "Petpooja",
    description: "Promoted to lead the full restaurant technology stack. Took on POS, catalog, online ordering, dine-in, multi-brand operations, and the backend platform architecture.",
    highlights: ["POS ecosystem: 47s → 18s checkout across 4,200 outlets", "Catalog platform: 3 days → 4 hrs propagation", "Multi-brand: 3 days → 4 hrs outlet activation"],
  },
  {
    year: "2023–24",
    period: "Present",
    title: "Senior Product Manager — Full Stack",
    company: "Petpooja",
    description: "Defined backend platform service decomposition. Launched QR menu and dine-in platform. Online ordering ecosystem with zero-touch aggregator acceptance. 60,000+ outlets across all products.",
    highlights: ["Platform uptime 99.7% (from 98.1%), cascading failures −82%", "QR dine-in: 19% table turn improvement", "Online ordering: 99.4% auto-acceptance"],
  },
];

// ─── Shared style tokens ──────────────────────────────────────────────────────
const cardBg  = "rgba(255,255,255,0.025)";
const cardBg2 = "rgba(255,255,255,0.018)";

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#020817]">

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid — slightly more visible */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Left column ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-2.5 mb-7"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse flex-shrink-0" />
                <span className="text-[#00d4aa] text-[11px] font-semibold uppercase tracking-[0.14em]">
                  Group PM · Head of Product · Senior PM
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.07 }}
                className="text-5xl sm:text-6xl lg:text-[64px] xl:text-7xl font-bold text-white leading-[1.0] tracking-[-0.03em] mb-6"
              >
                Product leadership<br />
                <span className="gradient-text">at platform scale.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="text-slate-300 text-lg leading-[1.8] mb-8 max-w-xl"
              >
                Six years at Petpooja — India&apos;s largest restaurant tech platform — building the technology ecosystem serving 60,000+ outlets. I own products end-to-end: strategy, system architecture, cross-functional execution, and the metrics that confirm whether you were right.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-[#00d4aa]/70 text-sm mb-8"
              >
                Now looking for my next role as a Group Product Manager or Head of Product.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4aa] text-[#020817] text-sm font-semibold hover:bg-[#00c49e] transition-colors duration-200">
                  Read case studies <ArrowRight size={15} />
                </Link>
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-200">
                  About me
                </Link>
              </motion.div>
            </div>

            {/* ── Right column — metrics card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl border border-white/[0.09] overflow-hidden" style={{ background: cardBg }}>
                {/* Card header */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]" />
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.13em]">Platform Impact</p>
                </div>
                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-px bg-white/[0.05]">
                  {heroMetrics.map((m) => (
                    <div key={m.label} className="px-5 py-5" style={{ background: cardBg2 }}>
                      <div className="text-[22px] font-bold text-white metric-value mb-1">{m.value}</div>
                      <div className="text-slate-400 text-xs leading-snug">{m.label}</div>
                      <div className="text-slate-600 text-[11px] mt-0.5">{m.sub}</div>
                    </div>
                  ))}
                </div>
                {/* Card footer */}
                <div className="px-5 py-3.5 border-t border-white/[0.06]">
                  <p className="text-slate-600 text-[11px]">Restaurant Technology · Commerce Platforms · Platform Architecture</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. ABOUT ─────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">About</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-[1.2] tracking-[-0.02em]">
                I build the layer that makes complex systems feel simple to operators.
              </h2>
              <p className="text-slate-300 leading-[1.8] mb-5">
                Most restaurant technology is built as a collection of disconnected tools. A menu update in the POS doesn&apos;t reach the aggregator. A price change at brand HQ takes days to reach outlet 47. I build the connections — the data models, the propagation engines, the platform contracts — that make those things automatic.
              </p>
              <p className="text-slate-400 leading-[1.8] mb-5">
                My operating model: understand the operational workflow deeply before writing a spec, design for the integration boundary before the feature surface, and measure against metrics that reflect the actual business outcome — not proxy indicators.
              </p>
              <p className="text-slate-400 leading-[1.8]">
                I&apos;ve been wrong in ways that mattered. I built a permission model that was technically elegant but operationally useless — outlet managers couldn&apos;t mark items out of stock without brand-level approval. Three operators rejected the beta before I fixed it. Being wrong faster is a skill I&apos;ve deliberately developed.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.12} direction="right">
              <div className="space-y-2.5">
                {[
                  { label: "Current Role", value: "Senior Product Manager, Petpooja" },
                  { label: "Company", value: "India's largest restaurant tech platform · 60,000+ outlets" },
                  { label: "Scope", value: "POS · Catalog · Ordering · Multi-brand · Platform Architecture" },
                  { label: "Location", value: "India · Open to remote and relocation" },
                  { label: "Target Role", value: "Group PM · Head of Product · Senior PM" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-xl border border-white/[0.07]" style={{ background: cardBg }}>
                    <span className="text-slate-500 text-xs w-24 flex-shrink-0 pt-0.5 leading-relaxed">{label}</span>
                    <span className="text-slate-300 text-sm leading-relaxed">{value}</span>
                  </div>
                ))}
                <div className="pt-3">
                  <Link href="/about"
                    className="inline-flex items-center gap-1.5 text-[#00d4aa] text-sm font-medium hover:gap-2.5 transition-all duration-200">
                    Full background <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. PRODUCT DOMAINS ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Product Domains</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.02em] max-w-lg">Four domain clusters. Full ownership across each.</h2>
              <Link href="/projects" className="text-slate-500 text-sm hover:text-[#00d4aa] transition-colors flex items-center gap-1.5 flex-shrink-0">
                All products <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {productDomains.map((domain, i) => (
              <AnimatedSection key={domain.title} delay={i * 0.07}>
                <div className="p-6 rounded-xl border border-white/[0.08] h-full card-hover" style={{ background: cardBg }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xl">{domain.icon}</span>
                    <h3 className="text-white font-medium text-sm leading-tight">{domain.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {domain.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed">
                        <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: domain.color }} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED CASE STUDIES ─────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Featured Case Studies</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.02em] max-w-xl">The problem, the decision, the outcome.</h2>
              <Link href="/case-studies" className="text-slate-500 text-sm hover:text-[#00d4aa] transition-colors flex items-center gap-1.5 flex-shrink-0">
                All 9 case studies <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {featuredCaseStudies.map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.08}>
                <div className="rounded-xl border border-white/[0.08] card-hover overflow-hidden" style={{ background: cardBg }}>
                  <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
                    {/* Problem */}
                    <div className="p-7">
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="text-[11px] text-slate-600 font-mono tracking-wider">{cs.num}</span>
                        <h3 className="text-white font-semibold text-base leading-tight">{cs.title}</h3>
                      </div>
                      <p className="text-[10px] text-[#00d4aa] font-semibold uppercase tracking-[0.12em] mb-3">The Problem</p>
                      <p className="text-slate-400 text-sm leading-[1.75]">{cs.problem}</p>
                    </div>
                    {/* Insight */}
                    <div className="p-7">
                      <p className="text-[10px] text-[#818cf8] font-semibold uppercase tracking-[0.12em] mb-3">The Insight</p>
                      <p className="text-slate-400 text-sm leading-[1.75]">{cs.insight}</p>
                    </div>
                    {/* Outcome */}
                    <div className="p-7">
                      <p className="text-[10px] text-[#00d4aa] font-semibold uppercase tracking-[0.12em] mb-3">The Outcome</p>
                      <p className="text-slate-200 text-sm leading-[1.75] font-medium mb-5">{cs.outcome}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {cs.tags.map((t) => (
                          <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] border border-white/[0.08] text-slate-500" style={{ background: "rgba(255,255,255,0.02)" }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <Link href="/case-studies" className="inline-flex items-center gap-1 text-[#00d4aa] text-sm font-medium hover:gap-2 transition-all duration-200">
                        Full case study <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT PHILOSOPHY ────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Product Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.02em] mb-3">Four things I believe, with evidence.</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-lg">Not principles from a framework. Things that came from building operational software at scale and watching what breaks.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-3">
            {philosophy.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 0.08}>
                <div className="p-7 rounded-xl border border-white/[0.08] card-hover h-full" style={{ background: cardBg }}>
                  <div className="flex items-start gap-4 mb-5">
                    <span className="text-5xl font-bold leading-none select-none" style={{ color: "rgba(255,255,255,0.055)" }}>{p.num}</span>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ background: "rgba(0,212,170,0.1)", color: "#00d4aa" }}>
                      {p.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-[15px] leading-snug">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-[1.75]">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TECHNOLOGY & PLATFORM EXPERTISE ───────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Technology & Platform Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.02em] mb-3">Technical depth, applied as a PM.</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-lg">
              I don&apos;t write production code. I do write system design specs, challenge architecture decisions, define API contracts, and hold engineering teams accountable to platform quality.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {techExpertise.map((area, i) => (
              <AnimatedSection key={area.area} delay={i * 0.06}>
                <div className="p-6 rounded-xl border border-white/[0.08] card-hover h-full" style={{ background: cardBg }}>
                  <h3 className="text-white font-medium mb-2.5 text-sm">{area.area}</h3>
                  <p className="text-slate-400 text-sm leading-[1.7] mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.items.map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full text-[11px] border border-white/[0.07] text-slate-500" style={{ background: "rgba(0,212,170,0.03)" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CAREER JOURNEY ────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Career Journey</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.02em] mb-4">Six years of compounding scope.</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-2xl">Petpooja scaled from a regional tool to India&apos;s largest restaurant tech platform during my tenure — the product complexity compounded with every year. I&apos;ve operated as de facto Head of Product for the restaurant technology division.</p>
          </AnimatedSection>

          <div className="space-y-3">
            {careerMilestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.09}>
                <div className="grid sm:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                  {/* Year column */}
                  <div className="hidden sm:flex flex-col items-center pt-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#00d4aa]/15 flex-shrink-0" style={{ background: "rgba(0,212,170,0.04)" }}>
                      <span className="text-[#00d4aa] text-[10px] font-bold leading-tight text-center">{m.year}</span>
                    </div>
                    {i < careerMilestones.length - 1 && (
                      <div className="w-px flex-1 mt-3 mb-0" style={{ background: "rgba(255,255,255,0.05)" }} />
                    )}
                  </div>
                  {/* Content card */}
                  <div className="p-6 rounded-xl border border-white/[0.08] pb-8" style={{ background: cardBg }}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[10px] font-semibold text-[#00d4aa]/60 uppercase tracking-[0.12em] block mb-1">{m.period}</span>
                        <h3 className="text-white font-semibold text-base leading-snug">{m.title}</h3>
                        <p className="text-slate-500 text-xs mt-0.5">{m.company}</p>
                      </div>
                      <span className="sm:hidden text-[#00d4aa] text-xs font-semibold border border-[#00d4aa]/20 px-2.5 py-1 rounded-lg" style={{ background: "rgba(0,212,170,0.05)" }}>{m.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-[1.75] mb-4">{m.description}</p>
                    <ul className="space-y-1.5">
                      {m.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-slate-500 text-xs leading-relaxed">
                          <CheckCircle2 size={11} className="text-[#00d4aa]/40 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-6 sm:ml-[104px]">
              <Link href="/resume" className="inline-flex items-center gap-1.5 text-[#00d4aa] text-sm font-medium hover:gap-2.5 transition-all duration-200">
                View full resume <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. CONTACT ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden border border-[#00d4aa]/[0.12]"
              style={{ background: "linear-gradient(135deg, rgba(0,212,170,0.04) 0%, rgba(129,140,248,0.025) 50%, rgba(255,255,255,0.01) 100%)" }}>
              {/* Top edge highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.35), transparent)" }} />
              <div className="p-10 md:p-16">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Contact</p>
                  <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] mb-5">
                    Actively looking for my next role.
                  </h2>
                  <p className="text-slate-300 leading-[1.8] mb-3">
                    Targeting Group PM, Head of Product, and Senior PM roles at technology companies building complex operational software, commerce platforms, or SaaS at scale.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10">
                    I respond to all recruiter and hiring manager outreach within 24 hours. Open to remote and relocation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4aa] text-[#020817] text-sm font-semibold hover:bg-[#00c49e] transition-colors duration-200">
                      Get in touch <ArrowRight size={15} />
                    </Link>
                    <a href="mailto:sandeep.kurapati@petpooja.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-200">
                      sandeep.kurapati@petpooja.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
