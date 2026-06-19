import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Senior Product Manager | Restaurant Technology | Open to Group PM & Head of Product",
  description:
    "Resume of Sandeep Kurapati — Senior Product Manager with 8+ years in restaurant technology, POS solutions, commerce platforms, and merchant technology at Petpooja. Open to Group Product Manager, Head of Product, and Senior PM roles. Expertise in restaurant operations, catalog management, integrations platform, android applications, and backend systems. Remote and relocation considered.",
  keywords: [
    "senior product manager resume",
    "product manager restaurant technology",
    "group product manager",
    "head of product restaurant tech",
    "senior PM POS solutions",
    "commerce platform product manager resume",
    "merchant technology product manager",
    "restaurant operations product management",
    "catalog management product manager",
    "platform products resume",
    "android applications product manager",
    "backend systems product manager",
  ],
  alternates: { canonical: "/resume" },
  openGraph: {
    type: "profile",
    url: "https://sandeepkurapati.com/resume",
    title: "Resume — Sandeep Kurapati | Senior Product Manager | Restaurant Technology & POS",
    description:
      "Senior Product Manager resume — 8+ years building restaurant technology, POS solutions, catalog management, commerce platforms, and merchant technology at Petpooja. Open to Group PM and Head of Product roles.",
    firstName: "Sandeep",
    lastName: "Kurapati",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Sandeep Kurapati | Senior Product Manager | Restaurant Technology",
    description:
      "Senior Product Manager — 8+ years in restaurant technology, POS solutions, and commerce platforms. Open to Group PM and Head of Product roles.",
  },
};

const competencies = [
  "Restaurant POS Systems", "Catalog Management", "Online Ordering", "Dine-In Technology",
  "QR Menu Platforms", "Multi-brand Operations", "Integration Platforms",
  "Backend Platform Architecture", "Merchant Solutions", "Finance Enablement",
  "GST & Compliance", "Android Restaurant Applications", "Product Strategy",
  "Cross-functional Leadership", "0→1 Product Development", "API Product Design",
];

const experience = [
  {
    role: "Senior Product Manager — Restaurant Technology",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform · 1,00,000+ outlets",
    period: "April 2024 – Present",
    summary:
      "Full product ownership across the restaurant technology stack — POS, catalog, online ordering, dine-in, multi-brand operations, integration platform, and the backend service architecture that connects them. Operating as de facto Head of Product for the restaurant technology division.",
    bullets: [
      "Designed the unified order data model for the restaurant POS — billing, KOT routing, table management, menu, and payment on a single record. Checkout time fell from 47s to 18s across 4,200 outlets; billing errors dropped 34%.",
      "Built catalog infrastructure propagating menu changes to POS, aggregators, and QR menus in under 4 hours for 200-outlet chains (down from 3 days). Serves 15,000+ outlets as single source of truth.",
      "Owned integration platform connecting POS and catalog to 40+ third-party systems — onboarding from 6 weeks to 9 days with versioned APIs, webhooks, and sandbox environments.",
      "Defined backend platform service decomposition — six independently deployable domains, event-driven backbone, idempotent financial paths. Platform uptime 99.7% (from 98.1%); cascading failures −82%; new capability build time −40%.",
    ],
  },
  {
    role: "Product Manager",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform",
    period: "July 2020 – March 2024",
    summary:
      "Merchant-facing tooling, finance enablement, GST compliance, and Android restaurant application product line.",
    bullets: [
      "Built GST standardization product — HSN mapping engine, configurable tax rule system, GSTR reporting from POS transaction data. Compliance errors −67% across 10,000+ merchants.",
      "Built finance enablement layer: settlement engine, reconciliation, payout visibility. Settlement support tickets −41%; 89% of exceptions auto-reconciled.",
      "Owned Android restaurant application product line — billing terminals, KDS, captain order apps across 8,500+ active devices; 99.1% crash-free session rate.",
    ],
  },
  {
    role: "BDE → Operations Manager",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform",
    period: "February 2018 – June 2020",
    summary:
      "Progressed from sales to operations leadership before transitioning into product management, building strong commercial understanding and execution discipline.",
    bullets: [
      "Led operational execution, onboarding systems, and cross-team coordination before transitioning to Product.",
      "Monitored staff performance and developed improvement plans.",
    ],
  },
];

const skillGroups = [
  {
    label: "Restaurant & Operational Systems — Expert",
    items: ["Restaurant POS", "KOT & kitchen management", "Table management", "Dine-in technology", "Android restaurant apps", "Offline-first operations", "Multi-format support"],
  },
  {
    label: "Catalog & Commerce — Expert",
    items: ["Catalog management systems", "Menu & pricing rules", "Multi-channel sync", "Online ordering ecosystems", "Aggregator integrations", "QR menu platforms", "Variant & modifier systems"],
  },
  {
    label: "Platform & Architecture — Expert",
    items: ["Multi-brand operations platforms", "Backend platform architecture", "Integration platforms", "Multi-tenant SaaS", "API product design", "Event-driven systems", "Merchant solutions"],
  },
  {
    label: "Finance, Compliance & Payments — Practitioner",
    items: ["Finance enablement products", "GST standardization", "Settlement & reconciliation", "EDC integrations", "UPI & QR payments", "Banking services"],
  },
  {
    label: "Product Leadership — Expert",
    items: ["Product strategy", "0→1 development", "Roadmapping", "Go-to-market", "Stakeholder management", "Product analytics", "Cross-functional leadership"],
  },
];

const tools = ["Jira", "Figma", "Postman", "Mixpanel", "Amplitude", "Metabase", "Looker", "Confluence", "Notion"];

export default function Resume() {
  return (
    <div className="bg-[#020817] pt-24">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-4">Resume</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Sandeep Kurapati</h1>
                <p className="text-slate-400 text-lg">Senior Product Manager · Restaurant Technology & Commerce Platforms</p>
                <p className="text-slate-500 text-sm mt-1">Petpooja · India · 8+ years at Petpooja</p>
                <p className="text-[#00d4aa]/80 text-sm mt-2 font-medium">Open to: Group PM · Head of Product · Senior PM · Remote and relocation considered</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a href="mailto:sandy.show18@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00d4aa] text-[#020817] font-semibold text-sm hover:bg-[#00b891] transition-all">
                  <Mail size={15} /> Email me directly
                </a>
                <a href="https://www.linkedin.com/in/sandeep-kurapati-5b81b811a/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all">
                  <ExternalLink size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        {/* Summary */}
        <AnimatedSection>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Professional Summary</h2>
            <div className="max-w-3xl p-6 rounded-2xl border border-white/[0.08]" style={{ background: "rgba(10,15,30,0.6)" }}>
              <p className="text-slate-300 leading-relaxed">
                Eight years at Petpooja — progressing from BDE to Operations Manager to Senior Product Manager — building the restaurant technology stack that now serves 1,00,000+ outlets across India. I&apos;ve owned product at every layer: the POS and kitchen operations systems restaurants run on daily, the catalog infrastructure that keeps menus in sync across every channel, the online ordering and dine-in products guests interact with, the multi-brand operations platform franchise groups depend on, the integration platform wiring Petpooja to aggregators and hardware, and the backend service architecture underpinning it all.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                My edge is the ability to hold the full system in mind while making decisions at the product level. A catalog data model isn&apos;t just a schema — it determines how fast a chain can push a price change, whether an aggregator sees the right availability, and how a brand manager controls outlets across the country. I design for those downstream consequences, not just the immediate feature. I can write a system design document in the morning and a merchant-facing product spec in the afternoon.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                I also know what to say no to. I&apos;ve deprioritised technically complete features weeks before launch because pilot data falsified the assumption. I&apos;ve pushed back on business-driven scope expansion when reliability data showed the platform wasn&apos;t ready. The discipline that separates a senior PM from an experienced one is knowing which constraint is load-bearing — and being willing to defend that to stakeholders with data, not deference.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Impact */}
        <AnimatedSection delay={0.05}>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Selected Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "1,00,000+", label: "Restaurant outlets on platform", sub: "Petpooja, India" },
                { value: "47s → 18s", label: "POS checkout time", sub: "4,200 outlets, data model redesign" },
                { value: "3 days → 4 hrs", label: "Menu propagation time", sub: "200-outlet chains, automated sync" },
                { value: "98.1% → 99.7%", label: "Platform uptime", sub: "−82% cascading failures, 6-domain decomposition" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl border border-white/[0.08] text-center" style={{ background: "rgba(10,15,30,0.6)" }}>
                  <div className="text-xl font-bold text-[#00d4aa] metric-value mb-1">{item.value}</div>
                  <div className="text-slate-400 text-xs mb-1">{item.label}</div>
                  <div className="text-slate-500 text-[11px]">{item.sub}</div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Competencies */}
        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {competencies.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-xl text-sm border border-white/[0.08] text-slate-300" style={{ background: "rgba(0,212,170,0.05)" }}>
                  {c}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.15}>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-8">Experience</h2>
            <div className="space-y-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-white/[0.07]">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4aa] bg-[#020817]" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <span className="text-slate-500 text-sm flex-shrink-0 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-[#00d4aa] text-sm">{exp.company}</p>
                  <p className="text-slate-500 text-xs mb-3">{exp.companyDesc}</p>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">{exp.summary}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-500 text-sm">
                        <span className="w-1 h-1 rounded-full bg-[#00d4aa]/50 mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.2}>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-2">Skills</h2>
            <p className="text-slate-500 text-[11px] mb-8">Expert = own the decision, defend the trade-off, ship it. Practitioner = drive it with the right technical partner.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-slate-400 text-xs font-medium mb-3">{group.label}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="px-2.5 py-0.5 rounded-full text-xs border border-white/[0.08] text-slate-500">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-slate-400 text-xs font-medium mb-3">Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-xs border border-white/[0.08] text-slate-500">{t}</span>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* References */}
        <AnimatedSection delay={0.25}>
          <section>
            <h2 className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-5">References</h2>
            <div className="p-5 rounded-2xl border border-white/[0.08]" style={{ background: "rgba(10,15,30,0.4)" }}>
              <p className="text-slate-400 text-sm mb-4">I can provide references across three layers of collaboration:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Engineering Directors and Staff Engineers who worked directly with me on POS, catalog, platform architecture, and Android — for technical depth and cross-functional effectiveness",
                  "Product leadership and business stakeholders who observed roadmap strategy, prioritisation calls, and CPO-level presentations — for strategic judgment",
                  "Sales and operations leaders who partnered with me on go-to-market for POS, multi-brand, and integration platform — for commercial awareness and stakeholder management",
                ].map((ref) => (
                  <li key={ref} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[#00d4aa]/50 mt-2 flex-shrink-0" />
                    {ref}
                  </li>
                ))}
              </ul>
              <a href="mailto:sandy.show18@gmail.com" className="inline-flex items-center gap-1 text-[#00d4aa] text-sm hover:underline">
                Request references — typically available within one business day →
              </a>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="p-5 rounded-2xl border border-white/[0.06]" style={{ background: "rgba(10,15,30,0.3)" }}>
            <p className="text-slate-500 text-[11px]">
              All metrics reflect outcomes from Petpooja&apos;s restaurant technology products. No NDA-protected customer data is disclosed. References can verify specific figures on request.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
