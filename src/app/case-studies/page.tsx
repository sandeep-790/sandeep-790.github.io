"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Section = {
  title: string;
  content: string;
  bullets?: string[];
};

type CaseStudy = {
  id: string;
  num: string;
  icon: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  sections: Section[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "catalog-management",
    num: "01",
    icon: "📋",
    title: "Catalog Management Platform",
    category: "Menu Management · Catalog Architecture · Multi-Outlet · Data Standardization",
    summary: "Built the catalog infrastructure serving as the single source of truth for menus across 15,000+ restaurant outlets. A change that took 3 days to propagate across a 200-outlet chain now takes under 4 hours — automated, auditable, and consistent across every channel simultaneously.",
    metrics: [
      { label: "Menu propagation time", value: "3 days → 4 hrs" },
      { label: "Channel sync accuracy", value: "99.2%" },
      { label: "Manual menu effort", value: "−78%" },
      { label: "Outlets on catalog", value: "15,000+" },
    ],
    tags: ["Catalog", "Menu Management", "Multi-channel", "Data Architecture"],
    image: "/images/catalog-management-architecture.png",
    sections: [
      {
        title: "The Problem",
        content: "An 80-outlet chain wanting to run a weekend promotion would spend Monday through Wednesday manually updating each aggregator portal, POS, and website. By Friday, half the outlets had reverted — POS syncs overwrote the manual changes. This wasn't an edge case; it was the standard workflow.",
        bullets: [
          "Menu data maintained separately across POS, Swiggy, Zomato, website, and QR menu — each drifting independently",
          "Price inconsistencies caused order defects, aggregator penalties, and customer refunds",
          "A 50-outlet chain needed 4–6 hours of manual work per menu change",
        ],
      },
      {
        title: "What I Built",
        content: "A hierarchical data model (Organisation → Brand → Outlet → Channel) with a change propagation engine. Each node inherits from its parent and overrides selectively. Availability is completely decoupled from catalog — marking an item out of stock doesn't touch menu data, so stock changes are instant without disrupting catalog workflows.",
        bullets: [
          "Hierarchical model with selective override — pricing, availability, and tax rules have independent override chains",
          "Availability engine separate from catalog — real-time 86s without touching the catalog record",
          "Event log with delivery status per channel — operators see exactly which outlets are in sync",
        ],
      },
      {
        title: "Key Decisions",
        content: "Hierarchical vs flat model: hierarchical, because the flat model couldn't represent outlet-specific variant pricing without duplicating entire menu trees. Real-time vs batch propagation: by channel — POS and ordering get real-time push, aggregators get batch with scheduling. Decoupling availability from catalog was the most important call: merging them put the catalog on the critical path during service.",
      },
      {
        title: "How I Executed",
        content: "Built the data model first — with engineering leads and three large chain operators over six weeks, through four revisions before any application code. Migration was the highest-risk phase: existing menus across 800 outlets had roughly 30% data quality issues. I built it as a read-only import with a validation report operators could approve before committing, with immediate rollback.",
      },
      {
        title: "Outcomes",
        content: "Menu propagation cut from 3 days to under 4 hours for 200-outlet chains; most now propagate in under 30 minutes. Channel sync accuracy 99.2%. Internal aggregator ops team reduced from 6 to 2. Catalog now serves 15,000+ outlets and became the foundation for QR menus, online ordering, and the integration platform.",
      },
      {
        title: "What I Learned",
        content: "I underestimated the data quality problem in existing menus — 30% had inconsistent or duplicate data. Three weeks of manual cleaning could have been surfaced in one week with a pre-migration audit. I now run a data audit as the first step of any migration project.",
      },
    ],
  },
  {
    id: "integrations-platform",
    num: "02",
    icon: "🔗",
    title: "Restaurant Integrations Platform",
    category: "Third-Party Integrations · Partner Ecosystem · APIs · Operational Automation",
    summary: "Rebuilt third-party integrations from bespoke engineering projects into a repeatable platform product. Partner onboarding reduced from 6 weeks to 9 days. 40+ active integrations running with 99.4% order acceptance rate and under 5-minute menu sync latency.",
    metrics: [
      { label: "Integration onboarding", value: "6 wks → 9 days" },
      { label: "Order acceptance rate", value: "99.4%" },
      { label: "Menu sync latency", value: "<5 min" },
      { label: "Active integrations", value: "40+" },
    ],
    tags: ["Integration Platform", "APIs", "Webhooks", "Partner Ecosystem"],
    sections: [
      {
        title: "The Problem",
        content: "Every new aggregator integration was a custom engineering project — 6 weeks, largely from scratch. Integration engineering was permanently backlogged. When partner APIs changed, fixes required pulling engineers back into code they hadn't touched in months.",
        bullets: [
          "Integration engineering backlogged 4–5 months — new partnerships delayed by capacity, not feasibility",
          "No observability: broken integrations discovered via support tickets, not proactive monitoring",
          "No sandbox: partner engineers tested against production, creating risk on both sides",
        ],
      },
      {
        title: "What I Built",
        content: "A canonical event model (menu.updated, order.placed, order.accepted) that every integration speaks. Partner adapters translate to and from this format — a new partner means a new adapter, not changes to the core platform. Webhooks with signed payloads and retry logic deliver events; partners don't poll. A production-fidelity sandbox so partners can test without touching live data.",
        bullets: [
          "Adapter pattern: each partner integration is a translation layer — core platform unchanged per new partner",
          "Idempotency on all financial events: order.placed processed once regardless of delivery retries",
          "Proactive monitoring: failure rate spike on a partner channel triggers an alert before anyone reports it",
        ],
      },
      {
        title: "Key Decisions",
        content: "Webhooks over polling — an order not visible in the POS for 2 minutes means the kitchen starts late, and in a restaurant that's a real cost. Adapter pattern over direct integration — the adapter adds upfront work but makes each subsequent partner a configuration exercise. High-fidelity sandbox over a simplified stub — false confidence is worse than no sandbox at all.",
      },
      {
        title: "How I Executed",
        content: "Built the sandbox and adapter framework before onboarding any partners — delayed the first visible integration by four weeks, but Swiggy onboarded in 11 days versus the historical 6 weeks. Designed the canonical event model collaboratively with Swiggy's engineering team during a one-week working session — they knew their edge cases better than we did.",
      },
      {
        title: "Outcomes",
        content: "40+ active integrations. Order auto-acceptance rate 99.4%. Mean time to detect a broken integration dropped from 6+ hours to under 20 minutes. Integration engineering shifted from permanently backlogged to building new platform capabilities. The canonical event model became the internal lingua franca — other platform teams adopted it for cross-service communication.",
      },
      {
        title: "What I Learned",
        content: "The hardest part wasn't technical — it was semantic alignment. What does \"order.placed\" mean across Swiggy, Zomato, and three regional aggregators? We resolved 14 ambiguous event definitions in the first month post-launch. I now treat semantic alignment as a first-class deliverable, not something to handle informally before a project starts.",
      },
    ],
  },
  {
    id: "gst-standardization",
    num: "03",
    icon: "🧾",
    title: "GST Standardization Initiative",
    category: "Tax Compliance · Product Standardization · Merchant Impact · Regulatory Requirements",
    summary: "Built GST compliance into the POS and catalog workflow — not as a separate tool. HSN mapping engine, configurable tax rule system, and GSTR reporting generated directly from transaction data. Compliance errors down 67% across 10,000+ merchants; compliance is now a byproduct of normal operations, not a separate monthly effort.",
    metrics: [
      { label: "Compliance error rate", value: "−67%" },
      { label: "HSN mapping accuracy", value: "95%+" },
      { label: "Merchants covered", value: "10,000+" },
      { label: "Manual reconciliation time", value: "−60%" },
    ],
    tags: ["GST", "Compliance", "Tax", "Merchant Enablement"],
    image: "/images/gst-standardization-workflow.png",
    sections: [
      {
        title: "The Problem",
        content: "Restaurant owners were compiling transaction data, mapping items to HSN codes in a spreadsheet, and handing it to their accountant every month. Errors were common, penalties were real, and the process consumed 8–10 hours of owner time monthly.",
        bullets: [
          "HSN misassignment was the most common error — wrong codes applied without a systematic mapping tool",
          "Composite scheme restaurants (turnover < ₹1.5 Cr) frequently applying the wrong tax rates",
          "No automated audit trail from transaction to GSTR return — manual compilation broke the chain",
        ],
      },
      {
        title: "What I Built",
        content: "Compliance embedded at the point of data creation: a curated HSN library (maintained centrally, not per-merchant), a configurable tax rule engine (restaurant type, turnover bracket, item category), and GSTR-1 and GSTR-3B reports generated directly from POS transaction records — no manual compilation.",
        bullets: [
          "Versioned HSN library updated centrally — merchants don't manage their own mappings",
          "Immutable billing records with full tax data — GSTR generated from what actually happened",
          "Discrepancy detection: system flags GSTR-2A mismatches before filing, not after",
        ],
      },
      {
        title: "Key Decisions",
        content: "Curated HSN library over merchant-managed: 10,000 restaurants each maintaining their own mappings would produce 10,000 different answers to the same question. Compliance in base tier, not premium: it's a prerequisite for merchant trust, not a differentiator you can charge for.",
      },
      {
        title: "How I Executed",
        content: "Spent six weeks with a GST practitioner building the HSN library before writing any product code — restaurant items frequently sit in ambiguous HSN categories, and ambiguous cases were resolved with a documented decision log, not a best guess. Beta with 50 restaurants across regular, composite, and air-conditioned categories surfaced three rule engine bugs that would have caused systematic filing errors at scale.",
      },
      {
        title: "Outcomes",
        content: "Compliance errors down 67% across 10,000+ merchants. HSN accuracy above 95% on monthly audits. Merchant time on GST prep dropped from 8–10 hours monthly to roughly 45 minutes. The audit trail from GSTR line item back to the original bill became a feature accountants recommended to their clients.",
      },
      {
        title: "What I Learned",
        content: "The HSN library needed a \"why we classified this\" explanation for each item, not just the result. Without it, merchants couldn't verify our mapping against their accountant's judgement. I added it post-launch and it meaningfully increased adoption in the accountant-managed segment.",
      },
    ],
  },
  {
    id: "online-ordering",
    num: "04",
    icon: "🌐",
    title: "Online Ordering Ecosystem",
    category: "Online Orders · Aggregator Integrations · Order Routing · Operational Efficiency",
    summary: "Built the order acceptance and routing layer that connects every online channel — web, app, aggregators, QR — directly to the POS and kitchen, eliminating manual re-entry. Order defect rate from online channels reduced 52%. 99.4% of online orders now flow into operations automatically, with no staff intervention at the acceptance step.",
    metrics: [
      { label: "Order defect rate", value: "−52%" },
      { label: "Auto-acceptance rate", value: "99.4%" },
      { label: "Menu-channel sync lag", value: "<5 min" },
      { label: "Channels integrated", value: "Web, App, Swiggy, Zomato, QR" },
    ],
    tags: ["Online Ordering", "Order Routing", "Aggregators", "Automation"],
    sections: [
      {
        title: "The Problem",
        content: "Restaurants were running a manual routing system — staff watching separate Swiggy and Zomato tablets, re-entering each order into the POS for kitchen processing. During a busy dinner shift, this was two-person overhead that created errors, delays, and missed orders.",
        bullets: [
          "Order defect rate from manual re-entry estimated at 8–12% — wrong quantity, wrong modifier, missed special instruction",
          "Items marked out of stock in POS stayed available on aggregator channels for 30–120 minutes",
          "Aggregator SLA penalties for order acceptance latency exceeding 3 minutes",
        ],
      },
      {
        title: "What I Built",
        content: "Order ingestion and routing layer with channel adapters — a Swiggy order and a web order become identical canonical objects before any processing. Availability sync: POS stock changes propagate to all ordering channels in under 5 minutes. All orders inject into the POS identically regardless of source — one kitchen system, not multiple screens.",
        bullets: [
          "Idempotent order ingestion: duplicate deliveries from partner retries don't create duplicate orders",
          "Kitchen routing: items split to correct stations based on catalog-level station assignment",
          "Auto-reconciliation: online settlements matched to POS records nightly — 91% auto-matched",
        ],
      },
      {
        title: "Key Decisions",
        content: "Unified POS injection over a separate \"online orders\" workflow — two systems would mean two kitchen screens. Menu sync by urgency: near-real-time for availability (out-of-stock can't wait), batch for catalog changes (price changes tolerate a 30-minute window).",
      },
      {
        title: "How I Executed",
        content: "Piloted the ingestion and POS injection layer with 20 restaurants before touching the ordering UI. The pilot surfaced the kitchen routing problem — multi-station kitchens needed item-level station assignment, not order-level routing. That discovery added three weeks but prevented a systematic kitchen workflow problem at launch.",
      },
      {
        title: "Outcomes",
        content: "Order defect rate down 52% in the first 90 days after automated routing launched. 99.4% of online orders auto-accepted and routed to kitchen without staff intervention. The dedicated \"aggregator tablet monitor\" role disappeared at mid-volume restaurants — that staff member moved to floor or prep.",
      },
      {
        title: "What I Learned",
        content: "I designed for single-station kitchens — the most common format by volume. Multi-station routing only surfaced in pilot. I now explicitly include format diversity (QSR, fine dining, cloud kitchen, multi-cuisine) in every design review for operational software.",
      },
    ],
  },
  {
    id: "qr-dine-in",
    num: "05",
    icon: "🪑",
    title: "QR Menu & Dine-In Platform",
    category: "Customer Experience · Restaurant Operations · Digital Ordering",
    summary: "Built the full dine-in technology stack — QR menus with live availability, table-side ordering, and pay-at-table flows — designed to reduce peak-hour service pressure without degrading hospitality. Table turn time improved 19% at pilot outlets. 2M+ monthly sessions across the platform.",
    metrics: [
      { label: "Table turn improvement", value: "+19%" },
      { label: "Monthly sessions", value: "2M+" },
      { label: "Staff order-taking time", value: "−60%" },
      { label: "Pay-at-table adoption", value: "68% of dine-in bills" },
    ],
    tags: ["Dine-in", "QR Menu", "Contactless Ordering", "Table Management"],
    image: "/images/qr-menu-platform.png",
    sections: [
      {
        title: "The Problem",
        content: "At peak service, the two most staff-intensive moments were order-taking and bill settlement — both requiring a free staff member at exactly the moments when no one was free. Tables sat at \"waiting to order\" and \"waiting for the bill\" for 8–12 minutes combined.",
        bullets: [
          "Order-taking requiring captain availability at an unpredictable moment — average 5–8 minute wait",
          "Bill request to settlement averaging 7–12 minutes: generating the bill, delivering it, processing payment",
          "Digital menus not connected to real-time POS availability — showing out-of-stock items",
        ],
      },
      {
        title: "What I Built",
        content: "Three components in sequence: QR menu (real-time availability from POS, no app or login required); table-side ordering (QR orders flow into POS identically to captain-placed orders — kitchen sees a KOT either way); pay-at-table (guests initiate and complete payment without waiting for a physical bill).",
        bullets: [
          "QR scan → live menu in under 2 seconds, no login, no app install",
          "Orders injected into POS identically to captain entry — single kitchen workflow regardless of source",
          "Split payment support: guests can split by item or amount from the QR interface",
        ],
      },
      {
        title: "Key Decisions",
        content: "No app, no account — a QR requiring a download loses 40–60% of potential users before they see the menu. Real-time availability over a cached menu — showing accurate stock is worth the engineering cost. QR ordering is opt-in and captain ordering never goes away: the design preserves the captain's role, not replaces it.",
      },
      {
        title: "How I Executed",
        content: "Piloted with 15 restaurants across QSR, casual dining, and fine dining. Fine dining operators resisted on hospitality grounds. Rather than arguing, I designed a \"recommendation mode\" — QR menu browsing, but ordering still through the captain. It addressed their actual concern without removing the functionality that added value elsewhere.",
      },
      {
        title: "Outcomes",
        content: "Table turn improved 19% at pilot outlets. Staff order-taking time down 60% at high-adoption outlets. 2M+ monthly sessions. Pay-at-table adopted for 68% of dine-in bills at fully-deployed outlets. Customer review scores unchanged or slightly improved.",
      },
      {
        title: "What I Learned",
        content: "Designed a single experience for all restaurant formats. Fine dining needed a product variation, not reassurance. In hospitality technology, operator concerns about the guest experience are often right — I should have done format-specific research before building a single-format product.",
      },
    ],
  },
  {
    id: "finance-platform",
    num: "06",
    icon: "💳",
    title: "Restaurant Finance Platform",
    category: "EDC Services · QR Payments · Banking Services · Merchant Financial Products",
    summary: "Built the merchant financial layer across payment acceptance (UPI, QR, EDC), settlement, reconciliation, and payout visibility. Settlement support tickets reduced 41%. UPI success rate optimised to 97.4%. 94% of online payments auto-reconciled to POS settlements without manual intervention.",
    metrics: [
      { label: "Settlement tickets", value: "−41%" },
      { label: "UPI success rate", value: "97.4%" },
      { label: "Auto-reconciliation", value: "94%" },
      { label: "EDC terminals active", value: "8,500+" },
    ],
    tags: ["Finance", "EDC", "UPI", "Settlement", "Reconciliation"],
    sections: [
      {
        title: "The Problem",
        content: "Restaurant owners had a persistent \"where is my money\" anxiety — opaque EDC settlement timelines, variable UPI success rates, and monthly payouts from PSPs that didn't reconcile against POS totals without manual work. This drove 41% of support tickets.",
        bullets: [
          "UPI success rate at baseline: 93.1% — 7 in 100 payment attempts failing, mostly bank-side timeouts",
          "Monthly PSP settlements not matching POS transaction totals",
          "No visibility into settlement timeline — merchants couldn't explain a short payout without calling support",
        ],
      },
      {
        title: "What I Built",
        content: "Two parallel tracks: payment reliability (health-aware UPI routing, EDC terminal heartbeat monitoring, provider failover) and financial visibility (reconciliation engine that auto-matches POS records to PSP records, merchant dashboard with full settlement audit trail).",
        bullets: [
          "Health-aware UPI routing: traffic shifts automatically on PSP degradation",
          "EDC terminal heartbeat: proactive detection of offline terminals before payment failure occurs",
          "Settlement audit trail: every deduction (MDR, GST on MDR, chargeback) visible with calculation basis",
        ],
      },
      {
        title: "Key Decisions",
        content: "Health-aware routing over load balancing — during PSP degradation, simple balancing kept sending 20% of transactions to a degraded route. Reconciliation match threshold: exact amount, not a tolerance band — a ₹2 discrepancy is sometimes an error, sometimes rounding, and auto-matching either way hides the ones that matter.",
      },
      {
        title: "How I Executed",
        content: "Started with reconciliation, not payment reliability — it had the highest support volume and was solvable without PSP partnership work. The reconciliation engine launched in 6 weeks, immediately reduced \"missing money\" tickets by 30%, and created the goodwill to sustain the longer payment reliability work while PSP negotiation took months.",
      },
      {
        title: "Outcomes",
        content: "UPI success rate from 93.1% to 97.4% — roughly 40,000 fewer failed payments per month. Settlement support tickets down 41%. 94% of payment records auto-reconciled. Payout prediction accurate within 1 day for 89% of settlements.",
      },
      {
        title: "What I Learned",
        content: "A 7% failure rate sounds acceptable in testing. At 600,000 monthly transactions, it's 42,000 failed payments. I now build failure rate projections at operational scale into every payment product review — \"good enough\" in testing is often not good enough in production.",
      },
    ],
  },
  {
    id: "restaurant-pos",
    num: "07",
    icon: "🍽️",
    title: "Restaurant POS Platform",
    category: "Billing · Restaurant Operations · Multi-Terminal Workflows · Scale",
    summary: "Designed the unified order data model that became the operational backbone of the restaurant POS. Checkout time reduced from 47s to 18s across 4,200 outlets by eliminating re-keying between kitchen and billing. Billing errors down 34%. 99.3% platform uptime including offline periods.",
    metrics: [
      { label: "Checkout time", value: "47s → 18s" },
      { label: "Billing errors", value: "−34%" },
      { label: "POS uptime (incl. offline)", value: "99.3%" },
      { label: "Outlets live", value: "4,200+" },
    ],
    tags: ["POS", "Billing", "KOT", "Offline-first", "Restaurant Operations"],
    sections: [
      {
        title: "The Problem",
        content: "Billing, kitchen orders, table management, and payment were four separate systems that didn't share state. A cashier closing a table had to read the kitchen confirmation, manually calculate the bill, and process payment on a separate EDC terminal — re-keying at three steps. Each re-key was a potential error.",
        bullets: [
          "Average checkout time 47 seconds — driven by multi-system lookups and manual calculations",
          "Billing errors at 6–8% of covers during peak hours — mostly quantity errors from re-keying",
          "No unified sales view — daily reconciliation required pulling from multiple systems",
        ],
      },
      {
        title: "What I Built",
        content: "A single shared order data model. Every state transition (placed, sent to kitchen, modified, billed, paid) writes to one record — no module maintains its own copy. Offline-first: SQLite local store with every state transition written locally first, synced to cloud asynchronously. Multi-terminal sync via local network, not cloud.",
        bullets: [
          "Single order record — one source of truth for billing, kitchen, table, and payment",
          "SQLite local store with cloud sync — full offline capability, no data loss on connectivity drops",
          "KOT routing: item-level station assignment from catalog, multi-station KOT from one order",
        ],
      },
      {
        title: "Key Decisions",
        content: "Offline-first: non-negotiable. Restaurant network reliability is too variable to build a mission-critical system on assumed connectivity. Unified data layer, modular UI: each role (cashier, kitchen staff, owner) gets a purpose-built interface, but all interfaces read and write the same order model.",
      },
      {
        title: "How I Executed",
        content: "Three weeks across seven restaurant formats before writing the spec — QSR, fine dining, cloud kitchen, bar, bakery, multi-cuisine, fast casual. Key discovery: KOT routing for multi-station kitchens was far more complex than assumed. Fine dining routes to grill, cold prep, pastry, and expediter separately. I rewrote the KOT module from scratch — added four weeks but shipped something real kitchens could actually use.",
      },
      {
        title: "Outcomes",
        content: "Checkout time 47s → 18s across 4,200 outlets — from eliminating re-keying, not UI optimisation. Billing errors down 34%. POS uptime 99.3%. The most-used owner feature post-launch was the real-time sales dashboard — the unified view the multi-system architecture had made impossible. The POS data model became the foundation for catalog, online ordering, dine-in, and finance.",
      },
      {
        title: "What I Learned",
        content: "Initial KOT routing was based on QSR research — the most common format by volume, but not the most complex. Fine dining routing requirements don't exist in QSR. I now validate across the full distribution of target formats, not just the modal user, before finalising any operational system spec.",
      },
    ],
  },
  {
    id: "android-apps",
    num: "08",
    icon: "📱",
    title: "Android Restaurant Applications",
    category: "Waiter Applications · Captain Applications · Order Management · Operational Mobility",
    summary: "Owned the Android application product line for restaurant operations — billing terminals, waiter order-taking, kitchen display systems, and owner dashboards — across 8,500+ active devices. Applications designed for constrained hardware, unreliable networks, and operators who cannot pause service to troubleshoot. 99.1% crash-free session rate.",
    metrics: [
      { label: "Crash-free session rate", value: "99.1%" },
      { label: "Active devices", value: "8,500+" },
      { label: "OTA update coverage", value: "95% in 48 hrs" },
      { label: "Offline transaction loss", value: "0%" },
    ],
    tags: ["Android", "Mobile", "Restaurant Apps", "Fleet Management", "Offline-first"],
    sections: [
      {
        title: "The Problem",
        content: "Restaurants were using general-purpose Android software for mission-critical workflows. A captain placing a table order navigated 4–6 screens per order. Kitchen displays went blank on low RAM and didn't auto-recover. EDC apps crashed during payment — exactly the moment when a crash is most costly. No OTA update mechanism meant fixes required physical access to each device.",
        bullets: [
          "General-purpose apps requiring 4–6 navigation steps per order — captains slower than pen-and-paper at peak",
          "KDS apps crashing on low RAM — staff losing the order queue and recovering manually",
          "No OTA: every fix required someone to physically touch each device",
        ],
      },
      {
        title: "What I Built",
        content: "Role-specific apps (billing terminal, captain order-taking, kitchen display, owner dashboard) — one app per operational role, not one app with role-based views. Sub-180MB RAM ceiling. SQLite-first transaction model — fully offline. OTA with phased rollout (5% → 20% → 100%) and automatic rollback on elevated crash rates.",
        bullets: [
          "SQLite-first — zero dependency on network for core functionality",
          "Sub-180MB RAM ceiling — verified on lowest-spec target device before each release",
          "OTA channel: phased rollout, automatic rollback on crash rate threshold",
        ],
      },
      {
        title: "Key Decisions",
        content: "Role-specific apps over a unified app — a single app is simpler to maintain but produces a worse experience for every role. Each sees a bloated interface designed for everyone and optimised for no one. Phased OTA: non-negotiable after a single bad update caused a 6-hour service disruption at 400 devices.",
      },
      {
        title: "How I Executed",
        content: "Built the billing terminal app first — it's on the critical path of payment. Getting it right proved the architecture decisions (offline-first, RAM ceiling, OTA channel) before building anything on top of them. The captain app went through five interaction prototypes on actual Android tablets — one hand, greasy, notepad in the other — before the interaction model was right.",
      },
      {
        title: "Outcomes",
        content: "99.1% crash-free session rate across 8,500+ devices. 95% of fleet on latest stable within 48 hours. Zero offline transaction losses. Captain order-taking time down ~40%. The device monitoring dashboard — built as an internal ops tool — became a product feature large restaurant groups requested for their own estate visibility.",
      },
      {
        title: "What I Learned",
        content: "Android hardware diversity was far larger than expected. The app ran correctly on the primary test device then failed on 3 of 12 hardware variants — touch event handling differences, font rendering issues, one camera integration breaking on a specific Sunmi firmware version. Device compatibility is now P0, tested on every device model before any release.",
      },
    ],
  },
  {
    id: "backend-architecture",
    num: "09",
    icon: "⚙️",
    title: "Backend Platform Architecture",
    category: "Scalability · Reliability · Performance · Product Platform Strategy",
    summary: "Defined the domain service decomposition and platform architecture for Petpooja's full product stack. Six independently deployable services with explicit contracts replaced a monolith where a payment failure could take down order acceptance. Platform uptime 99.7%. Cascading failures down 82%. New product capability build time reduced 40%.",
    metrics: [
      { label: "Platform uptime", value: "99.7%" },
      { label: "Cascading failures", value: "−82%" },
      { label: "New capability build time", value: "−40%" },
      { label: "Services deployed independently", value: "6 domains" },
    ],
    tags: ["Platform Architecture", "Scalability", "Reliability", "Service Design"],
    image: "/images/backend-platform-architecture.png",
    sections: [
      {
        title: "The Problem",
        content: "A payment service degradation could cascade into POS unavailability — restaurants couldn't bill customers during service. Any schema change required coordinating three or four teams before deployment. New teams had to understand the entire monolith before building anything new.",
        bullets: [
          "Cascading failures: payment service degradation causing POS unavailability — unrelated systems taking each other down",
          "Deployment coordination required across 3–4 teams for any schema change — features took weeks longer than development",
          "New product onboarding slow: teams had to learn the full monolith before building new capabilities",
        ],
      },
      {
        title: "What I Built",
        content: "Six independently deployable domain services (POS, Catalog, Ordering, Merchant, Finance, Devices) — each owning its data and API contracts. Kafka event backbone for cross-domain communication. Circuit breakers on synchronous calls — a degraded dependency triggers fallback, not cascade. Financial operations idempotent and auditable under retries and partial failures.",
        bullets: [
          "Six independently deployable domains, each owning its data and API contracts",
          "Event backbone for eventual-consistency communication — services publish what they produce, subscribe to what they consume",
          "Financial idempotency: all payment and settlement events carry idempotency keys — duplicate processing rejected",
        ],
      },
      {
        title: "Key Decisions",
        content: "Six domains over finer granularity — more granular decomposition was premature. The right boundary is where data ownership is clear and team structure matches. Event-driven as default, synchronous only where immediate consistency is genuinely required — defaulting to events forces explicit thinking about which operations truly need it, and that set is smaller than it appears.",
      },
      {
        title: "How I Executed",
        content: "Strangler fig pattern: new capabilities built as domain services from day one; existing functionality migrated incrementally, starting with Finance — clearest data boundary, most visible failure modes. Each domain migration ran in shadow mode for 2–4 weeks before traffic shifted.",
      },
      {
        title: "Outcomes",
        content: "Platform uptime 99.7% versus 98.1% pre-decomposition. Cascading failure rate down 82%. Mean time to detect a production incident reduced 65% — service-specific dashboards surface the failing component immediately. New capability build time down 40%. Deployment frequency per team up 3x.",
      },
      {
        title: "What I Learned",
        content: "The hardest part was organisational, not technical. The \"no direct database access across domains\" rule was challenged repeatedly. I should have built the case using specific historical incidents — the technical argument for loose coupling is abstract; incident history is concrete.",
      },
    ],
  },
];

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-bold text-[#0f766e]">{value}</div>
      <div className="text-slate-500 text-xs mt-0.5">{label}</div>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        {cs.image && (
          <div className="relative w-full overflow-hidden rounded-t-2xl" style={{ height: "200px" }}>
            <Image
              src={cs.image}
              alt={`${cs.title} architecture diagram`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(248,250,252,0.6) 100%)" }} />
          </div>
        )}
        <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-5 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "rgba(15,118,110,0.08)" }}>
              {cs.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-xs text-slate-400 font-mono">{cs.num}</span>
                <h3 className="text-slate-900 font-bold text-xl">{cs.title}</h3>
              </div>
              <p className="text-slate-500 text-xs mb-3 tracking-wide">{cs.category}</p>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">{cs.summary}</p>
            </div>
          </div>
          <div className="text-slate-400 flex-shrink-0 mt-1">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-slate-200">
          {cs.metrics.map((m) => (
            <MetricBadge key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-slate-200 text-slate-500" style={{ background: "rgba(0,0,0,0.02)" }}>
              {tag}
            </span>
          ))}
        </div>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-slate-200">
          <div className="px-7 sm:px-8 py-8 space-y-0">
            {cs.sections.map((section, idx) => (
              <div key={idx} className={`py-7 ${idx < cs.sections.length - 1 ? "border-b border-slate-200" : ""}`}>
                <div className="flex items-start gap-6">
                  <div className="w-5 flex-shrink-0 mt-0.5">
                    <span className="text-xs text-slate-400 font-mono">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-[#0f766e] uppercase tracking-widest mb-3">{section.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{section.content}</p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <span className="w-1 h-1 rounded-full bg-[#0f766e]/50 mt-2 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className="bg-[#f8fafc] pt-24">
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-medium text-[#0f766e] uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
              Nine products. Every layer of the stack.
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Each case study covers the business problem, market context, product strategy, technical architecture, stakeholder management, execution approach, and what I got wrong. This is the thinking behind the outcomes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                "The Problem", "What I Built", "Key Decisions",
                "How I Executed", "Outcomes", "What I Learned",
              ].map((label) => (
                <div key={label} className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-center" style={{ background: "rgba(15,118,110,0.04)" }}>
                  <span className="text-slate-500 text-xs">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-xs mt-3">6 sections per case study — click any to expand</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.id} delay={i * 0.04}>
              <CaseStudyCard cs={cs} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-50">
              <p className="text-amber-700/80 text-xs">
                <strong className="text-amber-700">Note:</strong> Metrics reflect outcomes from Petpooja&apos;s restaurant technology products. Specific figures will be verified through reference conversations on request. No NDA-protected customer data is disclosed.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
