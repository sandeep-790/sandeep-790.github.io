import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Senior Product Manager | Restaurant Technology & Merchant Platforms",
  description:
    "Sandeep Kurapati is a Senior Product Manager specializing in restaurant technology, POS solutions, merchant operations, and commerce platform architecture. 8+ years at Petpooja building POS systems, catalog management infrastructure, integrations platform, and the backend platform serving 1,00,000+ restaurant outlets across India.",
  keywords: [
    "senior product manager restaurant technology",
    "product manager merchant technology",
    "restaurant operations product manager",
    "commerce platform product manager",
    "POS solutions product manager",
    "restaurant technology India",
    "backend systems product manager",
    "platform products",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "https://sandeepkurapati.com/about",
    title: "About Sandeep Kurapati — Senior Product Manager | Restaurant Technology",
    description:
      "Senior Product Manager with 8+ years building restaurant technology, POS solutions, and commerce platforms at Petpooja — India's largest restaurant tech platform. Expertise in merchant technology, restaurant operations, integrations platform, and backend architecture.",
    firstName: "Sandeep",
    lastName: "Kurapati",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sandeep Kurapati — Senior Product Manager | Restaurant Technology",
    description:
      "Senior Product Manager with 8+ years building restaurant technology, POS solutions, and commerce platforms at Petpooja — India's largest restaurant tech platform.",
  },
};

const skills = [
  {
    title: "Restaurant & Operational Systems",
    icon: "🍽️",
    tier: "Expert",
    pills: [
      "Restaurant POS", "KOT & kitchen management", "Table management",
      "Dine-in technology", "Android restaurant applications",
      "Offline-first operations", "Multi-format restaurant workflows",
    ],
  },
  {
    title: "Catalog & Commerce",
    icon: "📋",
    tier: "Expert",
    pills: [
      "Catalog management systems", "Menu & pricing rules",
      "Variant & modifier hierarchies", "Multi-channel menu sync",
      "Online ordering ecosystems", "Aggregator integrations",
      "QR menu platforms",
    ],
  },
  {
    title: "Platform & Architecture",
    icon: "⚙️",
    tier: "Expert",
    pills: [
      "Multi-brand operations platforms", "Backend platform architecture",
      "Integration platforms", "Multi-tenant SaaS",
      "API product design", "Webhooks & event-driven systems",
      "Merchant solutions",
    ],
  },
  {
    title: "Finance, Compliance & Payments",
    icon: "💼",
    tier: "Practitioner",
    pills: [
      "Finance enablement products", "GST standardization",
      "Settlement & reconciliation", "EDC integrations",
      "QR payments", "Banking services", "Payment infrastructure",
    ],
  },
  {
    title: "Product Leadership",
    icon: "🎯",
    tier: "Expert",
    pills: [
      "Product strategy", "0→1 product development", "Roadmapping",
      "Go-to-market", "Stakeholder management", "Product analytics",
      "Cross-functional leadership",
    ],
  },
];

const tierColors: Record<string, string> = {
  Expert: "text-[#00d4aa] border-[#00d4aa]/30 bg-[#00d4aa]/5",
  Practitioner: "text-[#818cf8] border-[#818cf8]/30 bg-[#818cf8]/5",
};

const tools = ["Jira", "Figma", "Postman", "Mixpanel", "Amplitude", "Metabase", "Looker", "Confluence", "Notion"];

const experience = [
  {
    role: "Senior Product Manager — Restaurant Technology",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform · 1,00,000+ outlets",
    period: "April 2024 – Present",
    bullets: [
      "Own product strategy and execution across the full restaurant tech stack — POS, catalog, online ordering, dine-in, multi-brand operations, integration platform, and backend architecture. Operating as de facto Head of Product for the restaurant technology division.",
      "Designed the unified order data model that reduced checkout time from 47s to 18s across 4,200 restaurants — eliminating re-keying between kitchen and billing.",
      "Built catalog infrastructure that propagates menu changes across POS, aggregators, and QR menus in under 4 hours for 200-outlet chains (down from 3 days). Serves 15,000+ outlets.",
      "Defined backend platform service decomposition — six independently deployable domains. Platform uptime 99.7% (from 98.1%); cascading failures −82%; new capability build time −40%.",
    ],
  },
  {
    role: "Product Manager",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform",
    period: "July 2020 – March 2024",
    bullets: [
      "Built integration platform connecting POS and catalog to Swiggy, Zomato, and 40+ aggregators — onboarding from 6 weeks to 9 days.",
      "Built GST standardization product and finance enablement layer — compliance errors −67% across 10,000+ merchants; settlement support tickets −41%.",
      "Owned Android restaurant application product line across 8,500+ devices — 99.1% crash-free session rate.",
    ],
  },
  {
    role: "BDE → Operations Manager",
    company: "Petpooja",
    companyDesc: "India's largest restaurant tech platform",
    period: "February 2018 – June 2020",
    bullets: [
      "Progressed from sales to operations leadership before transitioning into product management, building strong commercial understanding and execution discipline.",
      "Led operational execution, onboarding systems, and cross-team coordination.",
      "Monitored staff performance and developed improvement plans.",
    ],
  },
];

export default function About() {
  return (
    <div className="bg-[#020817] pt-24">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-4">About Me</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Eight years building the operating system for restaurants at scale.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="text-slate-300 text-lg leading-[1.8] mb-5">
                  I&apos;m Sandeep — Senior PM at Petpooja, India&apos;s largest restaurant tech platform. Over 8 years I&apos;ve ended up owning the full stack: the POS that processes orders during the lunch rush, the catalog system keeping 15,000 outlets in sync across every aggregator, the integration platform wiring third-party systems together, and the backend architecture underpinning all of it.
                </p>
                <p className="text-slate-300 text-lg leading-[1.8] mb-5">
                  Most restaurant tech is built as disconnected tools. A menu update in the POS doesn&apos;t reach the aggregator. A price change at brand HQ takes three days to reach outlet 47. The problems aren&apos;t product problems — they&apos;re integration problems disguised as product problems. I build the connections, not just the surfaces.
                </p>
                <p className="text-slate-300 text-lg leading-[1.8] mb-5">
                  I&apos;ve built software for single-outlet independents and franchise operators managing 200 locations from one dashboard. Both need reliability above everything else. An owner during a Friday night rush doesn&apos;t want features — they want the system to stay on and not lose an order. That constraint shapes every design decision I make.
                </p>
                <p className="text-slate-300 text-lg leading-[1.8]">
                  I&apos;ve also been wrong in ways that mattered. A permission model I designed was technically elegant — roles, scopes, clean separation. Then three pilot operators rejected it because an outlet manager couldn&apos;t mark an item out of stock without brand-level approval. I rebuilt it around the actual operational decision. I&apos;m faster at questioning my own first drafts now.
                </p>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2} direction="right">
                <div className="p-6 rounded-2xl border border-white/[0.08] sticky top-24" style={{ background: "rgba(10,15,30,0.8)" }}>
                  <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">At a glance</h3>
                  <dl className="space-y-4">
                    {[
                      { label: "Role", value: "Senior Product Manager" },
                      { label: "Company", value: "Petpooja — India's largest restaurant tech platform" },
                      { label: "Scale", value: "1,00,000+ restaurant outlets across India" },
                      { label: "Domain", value: "Restaurant Technology · Commerce · Platform Architecture" },
                      { label: "Specialisms", value: "POS · Catalog · Multi-brand · Integration · Android" },
                      { label: "Years at Petpooja", value: "8+ years" },
                      { label: "Location", value: "India · Open to remote and relocation" },
                      { label: "Target Role", value: "Group PM · Head of Product · Senior PM" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <dt className="text-xs text-slate-500 uppercase tracking-wide">{label}</dt>
                        <dd className="text-slate-300 text-sm">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00d4aa] text-[#020817] font-semibold text-sm hover:bg-[#00b891] transition-all duration-200"
                    >
                      Get in touch <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-3">Leadership</p>
            <h2 className="text-3xl font-semibold text-white tracking-[-0.02em] mb-12">How I lead product teams</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Context over instructions.",
                body: "I share the why behind every prioritisation call. When I pulled QR menu customisation from scope three weeks before go-live, I sent the full operator research to the engineering squad — two engineers flagged a data model edge case I hadn't caught, because they understood the reasoning, not just the decision.",
              },
              {
                title: "Roadmaps are hypotheses, not commitments.",
                body: "I've shelved roadmap items four weeks from shipping. When pilot data showed QR ordering shifted server workload rather than reducing it, I re-scoped and defended that call with data. Shipping something we knew wouldn't move the metric was harder to justify than the delay.",
              },
              {
                title: "The spec is the last artefact, not the first.",
                body: "The POS redesign spec was 18 pages — written after two weeks in restaurants during service, six months of support ticket analysis, and an architecture session with engineering. It came back with zero scope reworks. The pre-spec process is what buys that ratio.",
              },
            ].map((item) => (
              <AnimatedSection key={item.title} delay={0.05}>
                <div className="p-6 rounded-2xl border border-white/[0.08] card-hover h-full" style={{ background: "rgba(10,15,30,0.6)" }}>
                  <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-[1.75]">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-3">Experience</p>
            <h2 className="text-3xl font-semibold text-white tracking-[-0.02em] mb-12">What I built and what it moved</h2>
          </AnimatedSection>
          <div className="relative pl-8 border-l border-white/[0.07] space-y-12">
            {experience.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2 border-[#00d4aa] bg-[#020817]" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                    <span className="text-slate-500 text-sm flex-shrink-0 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-[#00d4aa] text-sm mb-0.5">{exp.company}</p>
                  <p className="text-slate-500 text-xs mb-4">{exp.companyDesc}</p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]/50 mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[11px] font-semibold text-[#00d4aa] uppercase tracking-[0.14em] mb-3">Skills</p>
            <h2 className="text-3xl font-semibold text-white tracking-[-0.02em] mb-2">Where I&apos;m strong</h2>
            <p className="text-slate-500 text-sm mb-12">Expert = own the decision, defend the trade-off, ship it. Practitioner = drive it with the right technical partner.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((cluster, i) => (
              <AnimatedSection key={cluster.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-white/[0.08] card-hover" style={{ background: "rgba(10,15,30,0.6)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cluster.icon}</span>
                      <h3 className="text-white font-semibold text-sm">{cluster.title}</h3>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs border font-medium flex-shrink-0 ${tierColors[cluster.tier]}`}>
                      {cluster.tier}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.pills.map((pill) => (
                      <span key={pill} className="px-2.5 py-1 rounded-full text-xs border border-white/[0.08] text-slate-400" style={{ background: "rgba(0,212,170,0.04)" }}>
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="mt-6 p-5 rounded-2xl border border-white/[0.06]" style={{ background: "rgba(10,15,30,0.4)" }}>
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full text-xs border border-white/[0.08] text-slate-500" style={{ background: "rgba(255,255,255,0.02)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold text-white tracking-[-0.02em] mb-4">See the thinking behind the products</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Nine case studies covering the problem, strategy, technical architecture, and what I got wrong.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00d4aa] text-[#020817] font-semibold hover:bg-[#00b891] transition-all">
                Read Case Studies <ArrowRight size={16} />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-medium hover:border-white/20 hover:text-white transition-all">
                View All Projects
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
