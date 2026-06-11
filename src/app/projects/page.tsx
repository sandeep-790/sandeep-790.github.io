import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products — Restaurant POS, Catalog Management & Commerce Platform Portfolio",
  description:
    "12+ restaurant technology products built by Sandeep Kurapati at Petpooja — POS solutions, catalog management systems, online ordering ecosystems, QR dine-in technology, integrations platform, Android restaurant applications, multi-brand operations, and backend platform architecture. Full-stack merchant technology product portfolio.",
  keywords: [
    "restaurant POS solutions",
    "catalog management system",
    "online ordering platform",
    "restaurant integrations platform",
    "android restaurant applications",
    "restaurant operations software",
    "commerce platform products",
    "merchant technology products",
    "platform products restaurant",
    "dine-in technology",
    "multi-brand restaurant platform",
    "backend platform architecture",
    "restaurant technology portfolio",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "https://sandeepkurapati.com/projects",
    title: "Products — Restaurant POS, Catalog Management & Commerce Platform Portfolio",
    description:
      "12+ restaurant technology products built at Petpooja — POS solutions, catalog management systems, online ordering ecosystems, integrations platform, Android restaurant applications, and backend platform architecture serving 1,00,000+ outlets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Restaurant POS, Catalog Management & Commerce Platform Portfolio",
    description:
      "12+ restaurant technology products built at Petpooja — POS solutions, catalog management, online ordering, integrations platform, Android apps, and backend architecture.",
  },
};

const sections = [
  {
    label: "Restaurant Operations",
    projects: [
      {
        id: "restaurant-pos",
        icon: "🍽️",
        num: "01",
        title: "Restaurant POS Ecosystem",
        tagline: "Unified billing, kitchen, table management, and checkout — one order data model across 4,200+ restaurants.",
        description:
          "The fundamental problem with restaurant POS wasn't any individual module — it was that billing, kitchen, and payment were three separate systems that had to be manually kept in sync. I redesigned around a shared order record that all modules read from and write to. The result: eliminating the re-keying step that was adding 29 seconds to every checkout and causing a significant fraction of billing errors.",
        bullets: [
          "Unified order model — billing, KOT routing, table management, menu, and payment operate on the same record with no data translation between systems",
          "Offline-first local store with deferred cloud sync — service runs normally during network outages; no lost orders, no manual recovery",
          "Checkout time from 47s to 18s — not through UI changes, but by removing the re-keying step between kitchen confirmation and billing",
          "Billing errors down 34% across 4,200 outlets — directly from eliminating manual data re-entry",
          "Multi-format support across QSR, fine dining, cloud kitchens, bars, and multi-cuisine — one codebase, configurable workflows",
        ],
        tags: ["POS", "KOT", "Restaurant Ops", "Billing", "Offline-first"],
      },
      {
        id: "android-apps",
        icon: "📱",
        num: "02",
        title: "Android Restaurant Applications",
        tagline: "Role-specific apps for every position in a restaurant — designed for constrained hardware and operational pressure.",
        description:
          "Restaurant hardware is not developer hardware. These apps run on EDC terminals, low-RAM Android tablets, kitchen display screens, and budget phones — under flaky networks, in kitchens with grease-covered screens, used by operators who cannot stop service to troubleshoot. I built the Android product line with those constraints as the primary design inputs, not afterthoughts.",
        bullets: [
          "Role-specific applications: billing terminal, captain order-taking, kitchen display system, and management dashboard — each optimised for the specific workflow and device",
          "Offline-first transaction handling on every app — local persistence with deferred sync; no transaction is lost during connectivity drops",
          "OTA update channel with phased fleet rollouts and automatic rollback on elevated crash rates — 8,500+ devices updated without service disruption",
          "99.1% crash-free session rate across 8,500+ active devices at peak restaurant hours",
          "Hardware-agnostic: runs across EDC terminals, Android tablets, phones, and KDS screens with consistent behaviour",
        ],
        tags: ["Android", "Restaurant Apps", "KDS", "Fleet Management", "Offline-first"],
      },
    ],
  },
  {
    label: "Catalog & Online Commerce",
    projects: [
      {
        id: "catalog-management",
        icon: "📋",
        num: "03",
        title: "Catalog Management System",
        tagline: "One menu change. Every outlet, aggregator, and ordering channel updated automatically.",
        description:
          "Before this system existed, a 200-outlet chain pushing a price change meant manually updating each aggregator, each outlet's POS, and the ordering website — often over 3 days, often with inconsistencies. I built the catalog as infrastructure: a hierarchical data model with inheritance rules that makes a single change propagate everywhere automatically, with version control and rollback for safety.",
        bullets: [
          "Hierarchical model — category → item → variant → modifier — with pricing, availability, and tax rules that inherit from parent and override at any level",
          "Propagation time from 3 days to under 4 hours for 200-outlet chains — fully automated, no aggregator ops team",
          "Bulk operations across all outlets simultaneously: price changes, availability toggles, new item rollouts — one action, all channels",
          "Multi-channel sync: POS, Swiggy, Zomato, web ordering, and QR menu updated from one change — now serves 15,000+ outlets",
          "Version history and rollback — menu experiments can be reversed across live outlets without downtime",
        ],
        tags: ["Catalog", "Menu Management", "Multi-channel", "Pricing", "Aggregators"],
      },
      {
        id: "online-ordering",
        icon: "🌐",
        num: "04",
        title: "Online Ordering Ecosystem",
        tagline: "Orders from every channel — web, app, aggregators, QR — flowing directly into the POS and kitchen without manual entry.",
        description:
          "The order acceptance problem in online ordering isn't the ordering interface — it's what happens after the customer places the order. Before this platform, aggregator orders required a staff member to read the screen and re-enter into the POS. That step introduced errors, delays, and the possibility of a missed order during a busy period. I built the platform to eliminate that step entirely.",
        bullets: [
          "Orders from web, app, Swiggy, Zomato, and QR menus auto-injected into POS and KOT without manual acceptance or re-entry",
          "Real-time menu availability sync — out-of-stock items on POS propagate to all ordering channels in under 5 minutes",
          "Order defect rate reduced 52% by removing manual entry from the acceptance flow",
          "Auto-reconciliation of online orders to POS settlements — finance teams close from one number",
          "White-label ordering pages with custom branding, menu controls, and outlet-level configuration",
        ],
        tags: ["Online Ordering", "Aggregator Integration", "Order Management", "Commerce"],
      },
      {
        id: "dine-in-tech",
        icon: "🪑",
        num: "05",
        title: "Dine-In Technology & QR Menu Platform",
        tagline: "Contactless ordering, table-side payment, and live menus — the guest experience improved, the service pressure reduced.",
        description:
          "Dine-in technology often gets implemented as a novelty. I built it to solve a real operational bottleneck: the dependency on staff for order-taking and payment during peak hours was limiting table turn. I designed the QR menu and pay-at-table flow to move those steps off the critical service path — not to replace staff, but to free them for work that requires human judgment.",
        bullets: [
          "QR menu with real-time availability, item photos, and dietary filters — menu reflects POS stock status with no manual update",
          "Table-side ordering: guests place orders directly to POS and kitchen with no staff intermediation needed",
          "Pay-at-table: guests initiate and complete payment from the table — no waiting for the bill, no separate payment terminal required",
          "Table turn time improved 19% at pilot outlets — billing and payment removed from the critical service path",
          "2M+ sessions per month across the platform — all dine-in orders appear in POS and KOT identically to counter orders",
        ],
        tags: ["Dine-in", "QR Menu", "Contactless", "Table Management", "Guest Experience"],
      },
    ],
  },
  {
    label: "Operations & Platform",
    projects: [
      {
        id: "multi-brand",
        icon: "🏢",
        num: "06",
        title: "Multi-Brand Operations Platform",
        tagline: "Centralised control for restaurant groups — 20 to 200 outlets — without sacrificing outlet-level flexibility.",
        description:
          "The challenge with multi-brand and franchise operators is that they need central control without losing local flexibility. A brand manager needs to push a price change across all 150 outlets instantly. An outlet manager needs to mark an item out of stock in the next 30 seconds. I built a hierarchical platform that handles both — config inheritance from brand to outlet, with granular overrides at each level based on role.",
        bullets: [
          "Org → brand → outlet → channel hierarchy with role-based access control and config inheritance at every level",
          "New outlet activation from 3 days to 4 hours — remote provisioning with no site visit required",
          "Menu and config changes propagate to all outlets in under 90 seconds from the brand control panel",
          "Outlet-level overrides for local availability without breaking chain-wide pricing or menu rules",
          "Consolidated sales, operations, and settlement reporting across the full portfolio — one dashboard for groups managing 200 locations",
        ],
        tags: ["Multi-brand", "Franchise", "Operations", "Reporting", "Platform"],
      },
      {
        id: "integration-platform",
        icon: "🔗",
        num: "07",
        title: "Integration Platform",
        tagline: "Third-party integrations as a repeatable product — not a custom engineering engagement per partner.",
        description:
          "Before the integration platform, every new aggregator or third-party system required a bespoke engineering effort — custom data mapping, manual testing, no sandbox, 6-week timelines. I rebuilt this as a product: versioned APIs, webhooks with delivery guarantees, a sandbox environment mirroring production, and a documented partner onboarding process. Integrations became a scalable capability, not an ongoing cost.",
        bullets: [
          "Aggregator integrations: Swiggy, Zomato, and other delivery platforms — real-time menu sync and automatic order injection into POS",
          "Versioned REST APIs and webhooks for external systems connecting to POS and catalog data",
          "Sandbox environment mirroring production — partner integration onboarding from 6 weeks to 9 days",
          "Event-driven order routing: aggregator orders auto-accepted and injected into POS/KOT without manual steps",
          "Signed payloads, retry with backoff, and delivery guarantees on all order and menu events — 40+ active integrations",
        ],
        tags: ["Integration Platform", "Aggregators", "APIs", "Webhooks", "Connectivity"],
      },
      {
        id: "backend-architecture",
        icon: "⚙️",
        num: "08",
        title: "Backend Platform Architecture",
        tagline: "Service boundaries and shared foundations — 12 product lines that deploy independently without cascading each other.",
        description:
          "The platform was a monolith when I joined — changes to the billing module required re-testing the catalog, a payment failure could bring down order acceptance, and every new capability required coordinating multiple teams. I defined the domain service decomposition: six independently deployable services with explicit API contracts, an event-driven backbone for cross-domain communication, and idempotent financial paths that are correct under retries and failures.",
        bullets: [
          "Domain boundaries: POS, catalog, ordering, merchant, finance, devices — each independently deployable with versioned contracts",
          "Event-driven backbone enabling decoupled communication across domains without direct service dependencies",
          "Idempotent, auditable handling on all financial paths — correct under retries, partial failures, and concurrent writes",
          "Platform uptime improved to 99.7%; cascading failure rate reduced 82% — a payment service issue no longer takes down order acceptance",
          "New product capability build time reduced 40% — teams work on stable foundations without coordination overhead",
        ],
        tags: ["Architecture", "Platform", "Scalability", "APIs", "Engineering"],
      },
    ],
  },
  {
    label: "Finance, Compliance & Merchant Solutions",
    projects: [
      {
        id: "gst-compliance",
        icon: "🧾",
        num: "09",
        title: "GST Standardization & Compliance",
        tagline: "Automated GST compliance built into the POS — not a separate tool merchants have to reconcile manually.",
        description:
          "GST compliance for restaurants in India is genuinely complex: multiple tax slabs, composite schemes, HSN code requirements, and GSTR filing obligations. Before this product, compliance was a monthly manual process. I built it into the POS itself — so every transaction captures the right tax data automatically, and GSTR reports generate directly from that data without manual consolidation.",
        bullets: [
          "HSN code library with automated mapping for 95%+ of common restaurant items — covers the long tail that trips up manual classification",
          "Configurable tax rule engine: GST slabs, exemptions, and composite schemes by item, category, and outlet",
          "GSTR report generation directly from POS transaction data — no manual export, transformation, or consolidation",
          "Compliance error rate reduced 67% across 10,000+ merchants after rollout",
          "Full audit trail: merchants can trace every tax line from transaction to GSTR return — useful for both internal review and GST notice responses",
        ],
        tags: ["GST", "Compliance", "Finance", "Tax", "Restaurant"],
      },
      {
        id: "finance-enablement",
        icon: "💼",
        num: "10",
        title: "Finance Enablement Products",
        tagline: "Every rupee traceable from transaction to bank account — settlement, reconciliation, and payout visibility in one layer.",
        description:
          "Merchant finance anxiety is almost never about the total amount — it's about not knowing when money will arrive, why a settlement was short, or which transactions didn't reconcile. I built the finance enablement layer as a trust product: the primary goal was making every rupee's journey visible and traceable, not just accurate.",
        bullets: [
          "Settlement engine with full audit trail per cycle: fees, refunds, adjustments, and tax deductions all visible in one view",
          "Reconciliation engine matching POS transactions to bank and PSP settlements — auto-resolved 89% of exceptions without manual investigation",
          "Merchant-facing financial reporting with transaction-to-payout traceability and CSV export for accounting teams",
          "Settlement support tickets reduced 41% after redesigning reporting around 'what settled today and why'",
          "Payout visibility dashboard: real-time settlement status, pending amounts, and exception alerts — merchants don't need to call support to know where their money is",
        ],
        tags: ["Finance", "Settlement", "Reconciliation", "Merchant", "Reporting"],
      },
    ],
  },
  {
    label: "Payment Infrastructure",
    note: "Payment capability is one component within the broader commerce ecosystem — not the primary positioning.",
    projects: [
      {
        id: "payment-infrastructure",
        icon: "💳",
        num: "11",
        title: "Payment Infrastructure",
        tagline: "UPI, QR, and EDC acceptance across the restaurant ecosystem — reliability at the counter, not the developer console.",
        description:
          "Payment infrastructure in restaurants is not a fintech problem — it's an operational reliability problem. A failed payment at checkout during a lunch rush is a service failure, not just a transaction failure. I built payment acceptance as a component within the broader restaurant tech stack: UPI, QR, and EDC channels with reliability engineering at the centre.",
        bullets: [
          "UPI success rate optimised to 97.4% (+4.3 pp) through health-aware payment routing and automatic retry logic",
          "QR payment integration across POS, dine-in, and online ordering — under 2s confirmation, 94% auto-reconciliation",
          "EDC terminal integration across 8,500+ terminals with offline-first transaction handling",
          "Payment gateway orchestration, settlement, and reconciliation integrated into the finance layer — not a separate system",
        ],
        tags: ["Payments", "UPI", "QR", "EDC", "Payment Infrastructure"],
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="bg-[#020817] pt-24">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-medium text-[#00d4aa] uppercase tracking-widest mb-4">Work</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Products I&apos;ve built</h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Eleven products across the restaurant technology and commerce stack — owned from problem discovery through architecture, execution, and post-launch growth. Each one connects to the others.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {sections.map((section) => (
            <div key={section.label}>
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-lg font-semibold text-white">{section.label}</h2>
                  <div className="flex-1 h-px bg-white/8" />
                  {section.note && (
                    <p className="text-slate-600 text-xs max-w-xs text-right hidden sm:block">{section.note}</p>
                  )}
                </div>
              </AnimatedSection>

              <div className="space-y-5">
                {section.projects.map((project, i) => (
                  <AnimatedSection key={project.id} delay={i * 0.06}>
                    <div className="p-6 sm:p-8 rounded-2xl border border-white/8 card-hover" style={{ background: "rgba(10,15,30,0.6)" }}>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className="flex items-start gap-4 sm:w-2/3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "rgba(0,212,170,0.08)" }}>
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-xs text-slate-600 font-mono">{project.num}</span>
                              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                            </div>
                            <p className="text-[#00d4aa] text-sm mb-3">{project.tagline}</p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                            <ul className="space-y-1.5">
                              {project.bullets.map((b, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                                  <CheckCircle2 size={13} className="text-[#00d4aa]/60 mt-0.5 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="sm:w-1/3 flex flex-col gap-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-full text-xs border border-white/8 text-slate-500" style={{ background: "rgba(255,255,255,0.02)" }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link href="/case-studies" className="inline-flex items-center gap-1 text-[#00d4aa] text-sm font-medium hover:gap-2 transition-all">
                            Read case study <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
