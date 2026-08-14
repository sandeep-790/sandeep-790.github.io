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
    summary: "Built the catalog infrastructure serving as the single source of truth for menus across 1,00,000+ restaurant outlets. A change that took 3 days to propagate across a 200-outlet chain now takes under 4 hours — automated, auditable, and consistent across every channel simultaneously.",
    metrics: [
      { label: "Menu propagation time", value: "3 days → 4 hrs" },
      { label: "Channel sync accuracy", value: "99.2%" },
      { label: "Manual menu effort", value: "−78%" },
      { label: "Outlets on catalog", value: "1,00,000+" },
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
        content: "Menu propagation cut from 3 days to under 4 hours for 200-outlet chains; most now propagate in under 30 minutes. Channel sync accuracy 99.2%. Internal aggregator ops team reduced from 6 to 2. Catalog now serves 1,00,000+ outlets and became the foundation for QR menus, online ordering, and the integration platform.",
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
    title: "Partner Integration Platform",
    category: "Third-Party Integrations · Partner Ecosystem · APIs · Operational Automation",
    summary: "Rebuilt third-party integrations from bespoke engineering projects into a repeatable platform product. Partner onboarding reduced from 5 weeks to 1 week. 150+ active integrations running with 99.4% order acceptance rate and under 1-minute menu sync latency.",
    metrics: [
      { label: "Integration onboarding", value: "5 wks → 1 week" },
      { label: "Order acceptance rate", value: "99.4%" },
      { label: "Menu sync latency", value: "<1 min" },
      { label: "Active integrations", value: "150+" },
    ],
    tags: ["Integration Platform", "APIs", "Webhooks", "Partner Ecosystem"],
    sections: [
      {
        title: "The Problem",
        content: "Every new aggregator or hardware partner integration was a custom engineering project — 5 weeks, largely from scratch. With 150+ potential partners across aggregators, payment providers, loyalty platforms, and hardware vendors, the team was permanently backlogged. A single API change from Swiggy could break live integrations with no proactive detection.",
        bullets: [
          "Integration engineering backlogged 4–5 months — new partnerships delayed by capacity, not feasibility",
          "No observability: broken integrations discovered via merchant support tickets, not proactive monitoring",
          "No sandbox: partner engineers tested against production, creating live data risk on both sides",
        ],
      },
      {
        title: "What I Built",
        content: "A canonical event model (menu.updated, order.placed, order.accepted, payment.confirmed) that all integrations speak, plus an adapter framework where each partner is a translation layer — new partner means new adapter, not changes to the core platform. Webhooks with signed payloads, exponential backoff retry, and delivery receipts. A production-fidelity sandbox with synthetic data so partners self-serve without touching live systems.",
        bullets: [
          "Adapter pattern: each partner integration is a translation layer — core platform unchanged per new partner",
          "Idempotency on all financial events: order.placed processed exactly once regardless of delivery retries",
          "Proactive monitoring: per-partner dashboards tracking event volume, delivery rate, and latency — alerts on spike before anyone reports it",
        ],
      },
      {
        title: "Key Decisions",
        content: "Webhooks over polling — an order not visible in the POS within 60 seconds means the kitchen starts late, which in a restaurant is a real operational cost. Adapter pattern over direct integration — upfront cost per partner but each subsequent one becomes configuration, not engineering. High-fidelity sandbox over a stub — false confidence from a simplified sandbox is worse than no sandbox at all.",
      },
      {
        title: "How I Executed",
        content: "Built the sandbox and adapter framework before onboarding a single live partner — delayed the first visible integration by three weeks, but Swiggy's engineering team onboarded in 6 days and confirmed the sandbox matched production behaviour exactly. Ran the canonical event model definition as a collaborative workshop with our top three partners; they surfaced edge cases we hadn't considered, which would have caused silent data corruption post-launch.",
      },
      {
        title: "Outcomes",
        content: "150+ active integrations across aggregators, payment gateways, loyalty platforms, and hardware. Partner onboarding from 5 weeks to 1 week. Menu sync latency under 1 minute for all connected channels. Mean time to detect a broken integration dropped from 6+ hours (reactive) to under 15 minutes (proactive). Integration engineering shifted from permanently backlogged to building new platform capabilities — the canonical event model was adopted by three other internal platform teams.",
      },
      {
        title: "What I Learned",
        content: "Semantic alignment on event definitions is harder than it looks. \"order.placed\" means different things across Swiggy, Zomato, and regional aggregators — we resolved 14 ambiguous definitions in the first month. I now run an event taxonomy workshop as the first deliverable of any integration platform project, not something handled informally.",
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
    title: "Online Ordering Backend Architecture",
    category: "Backend Systems · Reliability Engineering · Fallback Design · Real-time Order Processing",
    summary: "Rebuilt the entire backend infrastructure handling online orders on the Petpooja platform — from ingestion layers and fallback mechanisms to downtime handling and real-time monitoring. Frequent order pipeline failures and silent drops were causing merchant churn. Platform now handles peak order volumes with 99.6% pipeline reliability and sub-60s end-to-end order-to-kitchen latency.",
    metrics: [
      { label: "Order pipeline reliability", value: "99.6%" },
      { label: "Order-to-kitchen latency", value: "<60 sec" },
      { label: "Silent order drops", value: "→ 0" },
      { label: "MTTD on failures", value: "6 hrs → 8 min" },
    ],
    tags: ["Backend Architecture", "Reliability", "Fallback Mechanisms", "Monitoring", "Order Processing"],
    sections: [
      {
        title: "The Problem",
        content: "The online ordering backend had no resilience design. Aggregator webhooks failed silently — orders placed on Swiggy or Zomato simply disappeared if the ingestion layer was busy or down. During peak hours, the shared processing queue would back up and orders would time out without any alert. Merchants discovered downtime through angry customer calls, not our monitoring.",
        bullets: [
          "Aggregator webhook delivery had no retry acknowledgement — failed deliveries were lost, not queued",
          "Shared processing queue caused cascade failures: one slow aggregator slowed every channel",
          "No proactive alerting — teams learned of outages from merchant support tickets, not system monitoring",
          "No graceful degradation: any downstream failure (POS, KOT service, catalog lookup) took the entire order flow offline",
        ],
      },
      {
        title: "What I Built",
        content: "A layered backend architecture with explicit failure handling at every stage. Webhook ingestion uses a durable message queue (decoupled from processing) so inbound orders are acknowledged immediately and processed independently. Per-channel isolated pipelines prevent one aggregator's degradation affecting others. A fallback order registry holds orders during downstream failures and replays them on recovery.",
        bullets: [
          "Durable ingestion queue: webhook acknowledged immediately, processing decoupled — no silent drops",
          "Per-channel isolated pipelines: Swiggy degradation doesn't affect Zomato or direct web orders",
          "Fallback registry: orders persisted on downstream failure, auto-replayed with idempotency keys on recovery",
          "Real-time monitoring: per-channel dashboards tracking ingest rate, processing lag, and error rate — alerting at threshold, not at outage",
        ],
      },
      {
        title: "Key Decisions",
        content: "Durable queue over direct processing — acknowledging the webhook and processing synchronously meant any latency spike caused HTTP timeouts and lost orders. Separating acknowledgement from processing was the single highest-impact change. Per-channel isolation over a shared queue — shared queues have no blast radius control. Circuit breakers on every downstream dependency (catalog lookup, POS injection, KDS routing) to fail fast and trigger fallback rather than hang.",
      },
      {
        title: "How I Executed",
        content: "Started by instrumenting the existing pipeline without changing it — two weeks of observability-only mode to map exactly where failures occurred and how often. The data showed 73% of silent drops happened at the POS injection step during peak load, not at ingestion as assumed. That diagnosis changed the entire intervention order: fixed the POS injection bottleneck first, then layered the queue architecture, then added per-channel isolation. Each phase had its own rollback plan.",
      },
      {
        title: "Outcomes",
        content: "Silent order drops eliminated — the fallback registry catches and replays 100% of orders that fail downstream. Order pipeline reliability at 99.6%. End-to-end order-to-kitchen latency under 60 seconds at peak. Mean time to detect a failure dropped from 6+ hours (merchant reports) to 8 minutes (automated alerting). Merchant churn attributed to ordering reliability dropped significantly in the two quarters post-launch.",
      },
      {
        title: "What I Learned",
        content: "The failure point wasn't where I assumed it was. I came in expecting the ingestion layer to be the bottleneck — the data said it was POS injection under load. Two weeks of instrumentation before changing anything saved months of building the wrong fix. I now treat observability-first as a non-negotiable first step for any reliability engineering project.",
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
    title: "Embedded Finance & Payments Platform",
    category: "EDC Integration · QR Payments · Loans · Expense Management · Settlement Architecture",
    summary: "Built Petpooja's full financial infrastructure layer — from the backend architecture powering EDC and QR payment integrations, to embedded financial products including working capital loans, expense management, and payout visibility. Settlement support tickets down 41%. UPI success rate 97.4%. 94% of payments auto-reconciled. Loans and expense products embedded directly in the POS workflow.",
    metrics: [
      { label: "Settlement tickets", value: "−41%" },
      { label: "UPI success rate", value: "97.4%" },
      { label: "Auto-reconciliation", value: "94%" },
      { label: "EDC terminals active", value: "8,500+" },
    ],
    tags: ["Finance", "EDC", "UPI", "Loans", "Expense Management", "Settlement"],
    sections: [
      {
        title: "The Problem",
        content: "Payment infrastructure at Petpooja was fragmented across three layers with no coherent product thinking. EDC terminals were onboarded via manual provisioning with no remote monitoring. UPI was failing 7% of attempts silently. Settlements from multiple PSPs didn't reconcile against POS totals without manual work. And beyond payments, merchants had no access to financial products — loans, expense tracking, or payout advances — from within the platform they used daily.",
        bullets: [
          "UPI success rate at baseline: 93.1% — bank-side timeouts with no retry or routing intelligence",
          "EDC terminal failures discovered post-fact — no heartbeat monitoring, no proactive alerting",
          "Monthly PSP settlements not matching POS totals — 41% of support tickets were finance-related",
          "No embedded financial products: merchants sourcing loans and expense tools entirely outside Petpooja",
        ],
      },
      {
        title: "What I Built",
        content: "Three interconnected layers: payment infrastructure (health-aware UPI routing with provider failover, EDC terminal backend with heartbeat monitoring and remote provisioning, QR payment integration with dynamic code generation); settlement and reconciliation (automated matching of POS records to PSP records, full audit trail per transaction, daily payout notifications); and embedded financial products (working capital loan eligibility engine using POS revenue data, expense management with category tagging from transaction history, payout advance product integrated into settlement flow).",
        bullets: [
          "Health-aware UPI routing: traffic shifts automatically on PSP degradation — 93.1% → 97.4% success rate",
          "EDC backend: remote provisioning, firmware management, heartbeat monitoring — offline terminals flagged before payment failure",
          "Loan eligibility engine: GMV-based underwriting using 90-day POS transaction history, embedded directly in POS owner dashboard",
          "Expense management: transaction-level category tagging, monthly P&L view, exportable for accounting — no separate app needed",
        ],
      },
      {
        title: "Key Decisions",
        content: "Embed financial products in the POS rather than building a separate finance app — merchants check POS daily; a separate app would have single-digit adoption. Loan eligibility using POS revenue data over credit bureau only — restaurant owners often have thin credit files but strong transaction history. Exact-amount reconciliation matching over a tolerance band — a ₹2 discrepancy is sometimes rounding, sometimes an actual error, and auto-clearing either way hides the ones that matter.",
      },
      {
        title: "How I Executed",
        content: "Sequenced the work by impact and dependencies: reconciliation first (highest support volume, no PSP partnership needed, shipped in 6 weeks), then UPI routing improvements (required PSP SLA negotiation — took 3 months of parallel relationship work), then EDC backend (required hardware partner coordination), then financial products (required NBFC partner and legal review). Each layer created the data foundation the next one needed — the reconciliation engine's clean transaction records became the input for the loan eligibility engine.",
      },
      {
        title: "Outcomes",
        content: "UPI success rate from 93.1% to 97.4% — roughly 40,000 fewer failed payments per month. Settlement support tickets down 41%. 94% of payment records auto-reconciled without manual review. Working capital loan product: first 200 loan disbursements within 90 days of launch, average disbursement ₹3.2L. Expense management adopted by 28% of active merchants within 6 months. The financial layer became a meaningful retention driver — merchants on finance products churned at 40% lower rate.",
      },
      {
        title: "What I Learned",
        content: "Embedding financial products in operational software works — but only if the data quality is there first. The loan eligibility engine was only credible because the reconciliation layer produced clean, trustworthy transaction records. I should have planned the financial products roadmap earlier; the reconciliation work I did for support ticket reduction was also, unknowingly, the foundation for the most strategically valuable product we built.",
      },
    ],
  },
  {
    id: "android-apps",
    num: "07",
    icon: "📱",
    title: "Android Restaurant Applications",
    category: "Captain App · KDS · Billing Terminal · Fleet Management · Offline-first",
    summary: "Owned the Android application product line for restaurant operations — billing terminals, captain order-taking, kitchen display systems (KDS), and owner dashboards — across 8,500+ active devices. Built for constrained hardware, unreliable networks, and staff who cannot pause service to troubleshoot. 99.1% crash-free session rate across all four apps.",
    metrics: [
      { label: "Crash-free session rate", value: "99.1%" },
      { label: "Active devices", value: "8,500+" },
      { label: "OTA update coverage", value: "95% in 48 hrs" },
      { label: "Offline transaction loss", value: "0%" },
    ],
    tags: ["Android", "Captain App", "KDS", "Billing Terminal", "Fleet Management", "Offline-first"],
    sections: [
      {
        title: "The Problem",
        content: "Restaurants were using general-purpose Android software for mission-critical workflows across four distinct operational roles. A captain placing a table order navigated 4–6 screens per order on a generic POS app — slower than pen-and-paper at peak. Kitchen display systems (KDS) went blank on low RAM devices and didn't auto-recover, causing lost orders. The billing terminal app crashed during payment. No OTA update mechanism meant every fix required physical access to each device across a fleet of thousands.",
        bullets: [
          "Captain app: 4–6 navigation steps per order on a shared-UI app — not designed for one-handed tableside use",
          "KDS: apps crashing on low-RAM kitchen display hardware — staff lost the order queue and recovered manually",
          "Billing terminal: crashes during payment processing on Sunmi EDC hardware at exactly the worst moment",
          "No OTA: every fix required physically accessing each device — impossible at scale across 8,500 terminals",
        ],
      },
      {
        title: "What I Built",
        content: "Four role-specific apps — one per operational role, not one app with role-based views. The captain app is designed for one-handed tableside use: large touch targets, item search by first letter, modifiers on a single screen, order confirmation in two taps. The KDS app is display-only with minimal UI — station-filtered order queue, acknowledge button, no navigation. The billing terminal handles the full checkout flow (table, bill, split, payment) in under 20 seconds. All four run SQLite-first, sub-180MB RAM, with a shared OTA channel (phased rollout 5% → 20% → 100%, auto-rollback on crash rate threshold).",
        bullets: [
          "Captain app: one-handed UI, 2-tap order placement, modifier selection on a single screen — order entry time down 40%",
          "KDS app: station-filtered queue, large acknowledgement button, auto-recovery from low-memory kill — zero lost orders",
          "Billing terminal: full checkout in under 20 seconds, offline payment queued and processed on connectivity restore",
          "OTA channel: phased rollout with automatic rollback — 95% of fleet on latest stable within 48 hours",
        ],
      },
      {
        title: "Key Decisions",
        content: "Role-specific apps over a unified app — a shared app is simpler to maintain but produces a worse experience for every role; each user sees UI designed for everyone and optimised for no one. KDS auto-recovery was a non-negotiable: Android's low-memory killer would terminate the app on constrained hardware, so the KDS had to restart silently, re-sync the order queue, and return to the correct state without staff intervention. Phased OTA became mandatory after a single bad release caused a 6-hour service disruption at 400 devices.",
      },
      {
        title: "How I Executed",
        content: "Built the billing terminal first — it's on the critical path of payment, so getting it right proved the architecture decisions (SQLite-first, RAM ceiling, OTA channel) before building anything else on top of them. The captain app required five interaction prototypes on actual Android tablets in restaurant conditions — one hand, often greasy, notepad in the other — before the interaction model felt right. KDS was shadowed in pilot kitchens for two weeks before replacing existing kitchen printers; the shadow period surfaced three station-routing edge cases that would have caused missed orders at launch.",
      },
      {
        title: "Outcomes",
        content: "99.1% crash-free session rate across all four apps and 8,500+ devices. Zero offline transaction losses. OTA coverage at 95% of fleet within 48 hours. Captain order-taking time down ~40%. KDS adoption replaced kitchen printers at 3,200+ outlets. The fleet monitoring dashboard — built as an internal ops tool — became a product feature enterprise restaurant groups requested to manage their own device estates.",
      },
      {
        title: "What I Learned",
        content: "Android hardware diversity is far larger than any lab test reveals. The apps ran correctly on primary test devices then failed on 3 of 12 hardware variants in the wild — touch event handling differences, font rendering issues on specific screen densities, one camera integration breaking on a specific Sunmi firmware version. Device compatibility testing across every target hardware model is now P0 before any release, not a post-launch discovery.",
      },
    ],
  },
  {
    id: "kiosk-ordering",
    num: "08",
    icon: "🖥️",
    title: "Kiosk Ordering Platform",
    category: "Self-Ordering · Kiosk Hardware · Intraserver APIs · QSR Operations",
    summary: "Reshaped Petpooja's kiosk ordering product from a standalone touchscreen UI into a fully integrated self-ordering platform. Redesigned the intraserver order API layer to handle kiosk-originated orders identically to POS and online orders. Kiosk order throughput at QSR pilots 2.3x counter throughput per terminal during peak. Average order value 18% higher than counter orders.",
    metrics: [
      { label: "Peak throughput vs counter", value: "2.3x per terminal" },
      { label: "Average order value lift", value: "+18%" },
      { label: "Kiosk-to-kitchen latency", value: "<15 sec" },
      { label: "Payment success rate", value: "98.6%" },
    ],
    tags: ["Kiosk", "Self-Ordering", "Intraserver APIs", "QSR", "Hardware Integration"],
    sections: [
      {
        title: "The Problem",
        content: "Petpooja had an existing kiosk product, but it wasn't integrated — it operated as a silo. Kiosk orders were handled by a separate backend path that didn't share the order model, catalog state, or kitchen routing logic with the POS. This meant kiosk availability wasn't real-time (items sold out on POS still showed available on kiosk), kitchen staff received kiosk orders on a separate printed slip (not the KDS), and payment failures had no graceful recovery path.",
        bullets: [
          "Kiosk and POS ran separate order backends — catalog availability, tax calculation, and kitchen routing all duplicated and divergent",
          "Kitchen received kiosk orders as a printed slip separate from the KDS queue — staff managed two systems",
          "Payment failure on kiosk had no retry or recovery flow — customer lost their order state and restarted",
          "No upsell or modifier flow — kiosk was a plain item list with no guided customisation",
        ],
      },
      {
        title: "What I Built",
        content: "A unified intraserver order API layer where kiosk-originated orders enter the same order pipeline as POS and online orders. The kiosk calls the same catalog API (real-time availability), applies the same tax rule engine, generates a canonical order event, and routes to the KDS identically to counter orders. On the hardware side: a redesigned UI with guided customisation (modifier flow, upsell prompts, meal bundles), UPI and card payment with retry logic and order state persistence through payment failure.",
        bullets: [
          "Intraserver order API: kiosk orders enter the canonical order pipeline — single kitchen queue regardless of order origin",
          "Real-time catalog availability: kiosk reflects POS stock state within 30 seconds — no more selling out-of-stock items",
          "Payment recovery: order state persisted through payment failure — customer retries payment, not the entire order",
          "Guided modifier flow: customisation UI increased modifier attachment rate 34%, directly driving average order value lift",
        ],
      },
      {
        title: "Key Decisions",
        content: "Unified API layer over a separate kiosk backend — the kiosk silo was causing real operational problems, but the temptation was to patch symptoms. Rewriting kiosk to call the same canonical order APIs as POS added 6 weeks but eliminated the divergence permanently. Order state persistence through payment failure was non-negotiable: losing a customer's full order selection because a UPI timeout is a guarantee of a one-star review. The modifier flow UI went through eight iterations — upsell and customisation revenue was a key business case, and the early versions felt pushy rather than helpful.",
      },
      {
        title: "How I Executed",
        content: "Piloted at three QSR locations with high counter volume — specifically chosen because kiosk value is highest where counter queues are longest. Ran kiosk and counter in parallel for four weeks before removing the parallel counter staff — the parallel run validated that kitchen staff handled the unified KDS queue without confusion and that payment success rates were acceptable before going live-only. Modifier flow went through user testing with 40 customers across two pilots before the design was locked.",
      },
      {
        title: "Outcomes",
        content: "Kiosk order throughput 2.3x counter throughput per terminal during peak hours. Average order value 18% higher than counter — driven by modifier attachment and upsell prompts. Kiosk-to-kitchen latency under 15 seconds. Payment success rate 98.6%. Kitchen staff reported the unified KDS queue (no separate kiosk slip) as the most significant operational improvement. One pilot QSR reduced counter staff by 2 during peak while handling 30% more orders.",
      },
      {
        title: "What I Learned",
        content: "The hardest part was the modifier UI, not the API architecture. Getting customisation to feel like assistance rather than upselling pressure took eight iterations and direct observation of customers using the kiosk — most of what I designed in a conference room felt different in front of a hungry person with a queue behind them. For any customer-facing flow in a high-pressure environment, in-context observation is not optional.",
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
              Every layer of the stack.
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Each case study covers the real problem, what I built, the decisions that shaped it, how I executed, the outcomes, and what I got wrong. This is the thinking behind the metrics.
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
