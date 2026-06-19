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
        title: "Executive Summary",
        content: "Petpooja's catalog problem was a data architecture problem, not a UI problem. Restaurant chains maintained menus across five or six systems that had all drifted from each other. I designed the platform as infrastructure — a hierarchical data model with a change propagation engine that made multi-channel consistency automatic, not a manual discipline.",
      },
      {
        title: "Business Problem",
        content: "A restaurant group with 80 outlets wanting to run a weekend promotion would spend Monday through Wednesday manually updating each aggregator portal, POS, and website. By Friday, half the outlets had reverted because POS syncs overwrote the manual changes. This wasn't an edge case — it was the standard workflow.",
        bullets: [
          "Menu data maintained independently across POS, Swiggy, Zomato, website, and QR menu — each drifting on its own schedule",
          "Price inconsistencies between channels caused order defects, aggregator penalties, and customer refunds",
          "A 50-outlet chain needed 4–6 hours of manual work per menu change",
        ],
      },
      {
        title: "Market Context",
        content: "Petpooja was scaling from single-outlet restaurants to franchise groups managing 200+ locations. The catalog problem scaled linearly with outlet count — every new outlet was another place a change had to be manually propagated. Aggregators were also penalising outlets for order defects caused by stale catalog data.",
      },
      {
        title: "Product Vision",
        content: "A restaurant's menu should be defined once and exist everywhere simultaneously. A brand manager at a 150-outlet chain should change a price in one action and trust it's consistent everywhere within the hour. An outlet manager should mark an item out of stock in 15 seconds without touching the catalog.",
      },
      {
        title: "Product Strategy",
        content: "Three phases sequenced by value delivery: consolidate all menu data into a single canonical store; build the propagation engine that pushes changes to all channels automatically; give operators the control layer that makes the system safe to rely on at scale.",
        bullets: [
          "Phase 1 — Canonical catalog store: Hierarchical model, migration tooling, data validation",
          "Phase 2 — Propagation engine: Channel workers per downstream system, retry logic, delivery confirmation",
          "Phase 3 — Operator controls: Bulk operations, scheduling, version history, outlet-level overrides",
        ],
      },
      {
        title: "User Personas",
        content: "Three personas shaped the design. The Brand Manager needs to push menu changes across the full chain in one action. The Outlet Manager needs to mark items sold-out in under 30 seconds during service without navigating a catalog editing flow. The internal Aggregator Ops Analyst wanted to stop doing manual sync and focus only on exceptions.",
      },
      {
        title: "Stakeholder Management",
        content: "Engineering leads wanted a flat catalog with manual overrides — I built a prototype showing how the flat model broke for chains with outlet-specific variants, using three real customer examples. Sales worried migration would corrupt existing data, so I negotiated a 30-day parallel-run before any deprecation. Aggregator rate limits shaped the propagation architecture: batch updates for non-urgent changes, real-time push for pricing and availability.",
      },
      {
        title: "Technical Architecture",
        content: "Hierarchical model: Organisation → Brand → Outlet → Channel. Each node inherits from its parent and overrides selectively. Availability is completely decoupled from catalog — out-of-stock marking creates a time-scoped record without touching catalog data. The propagation engine is event-driven: a change triggers channel workers that each handle their partner's API constraints independently.",
        bullets: [
          "Hierarchical model with selective override at every level — pricing, availability, and tax rules have independent override chains",
          "Availability engine separate from catalog — real-time stock changes don't touch catalog data, enabling instant 86s",
          "Event log with delivery status per channel — operators see exactly which outlets are in sync",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Hierarchical vs flat model: hierarchical, because the flat model couldn't represent outlet-specific variant pricing without duplicating entire menu trees. Real-time vs batch propagation: chosen by channel — POS and ordering get real-time push, aggregators get batch with scheduling. Decoupling availability from catalog was the most important call: merging them put the catalog on the critical path during service.",
      },
      {
        title: "Execution Approach",
        content: "Built the data model first — with engineering leads and three large chain operators over six weeks, through four revisions before any application code. Migration was the highest-risk phase: existing menus across 800 outlets had roughly 30% data quality issues. I built it as a read-only import with a validation report operators could approve before committing, with immediate rollback capability.",
      },
      {
        title: "Metrics & Measurement",
        content: "Primary: menu propagation time from commit to all-channels-confirmed, channel sync accuracy (audited weekly), and manual ops hours on aggregator sync. Secondary: aggregator order defect rate from menu inconsistency and catalog API response time for POS integration.",
      },
      {
        title: "Outcomes",
        content: "Menu propagation cut from 3 days to under 4 hours for 200-outlet chains; most now propagate in under 30 minutes. Channel sync accuracy 99.2%. Internal aggregator ops team reduced from 6 to 2 — the 2 remaining handle exceptions, not routine sync. Catalog now serves 15,000+ outlets and became the foundation for QR menus, online ordering, and the integration platform.",
      },
      {
        title: "Lessons Learned",
        content: "I underestimated the data quality problem in existing menus — roughly 30% had inconsistent or duplicate data when we migrated 800 outlets. Three weeks of manual cleaning could have been surfaced in one with a pre-migration audit. I now run a data audit as the first step of any migration project.",
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
        title: "Executive Summary",
        content: "Every new aggregator integration was a custom engineering project — 6 weeks, largely from scratch each time. Integration engineering was permanently backlogged with no leverage. I designed the Integration Platform as a product: canonical event model, adapter pattern for partner translation, versioned APIs, and a production-fidelity sandbox. Integration onboarding became a configuration exercise, not a coding engagement.",
      },
      {
        title: "Business Problem",
        content: "Petpooja was losing RFPs because restaurant chains couldn't get the aggregator integrations they needed within their go-live timelines. Each new integration was a unique project with custom data mapping, no reusable components, and 6-week timelines. When partner APIs changed — and they did frequently — fixes required pulling engineers back into code they hadn't touched in months.",
        bullets: [
          "Integration engineering team backlogged 4–5 months — new partnerships delayed by capacity, not feasibility",
          "No observability: broken integrations discovered via support tickets, not proactive monitoring",
          "No sandbox: partner engineers tested against production, creating risk on both sides",
        ],
      },
      {
        title: "Market Context",
        content: "The aggregator ecosystem in India was expanding rapidly — Swiggy, Zomato, and regional players all wanted deep POS integration. A POS that connected to every aggregator a restaurant used was worth more than one requiring manual order entry. Petpooja needed integration to be a scalable capability, not a one-off cost per new relationship.",
      },
      {
        title: "Product Vision",
        content: "Integration as a product, not a project. External partners self-serve through documented APIs and a sandbox that behaves identically to production. Internal teams onboard new integrations by composing platform primitives — defining an adapter for a new partner's event format — not writing bespoke code.",
      },
      {
        title: "Product Strategy",
        content: "Define the canonical events first — the platform's common language that every integration speaks. Then build the routing layer translating between canonical and partner-specific formats. Build the sandbox before onboarding any partners.",
        bullets: [
          "Canonical event model: menu.updated, order.placed, order.accepted — schema-versioned",
          "Adapter framework: each partner has an adapter translating to and from canonical format",
          "Webhook delivery engine: signed payloads, retry with exponential backoff, delivery receipts",
        ],
      },
      {
        title: "User Personas",
        content: "The Aggregator Integration Engineer at Swiggy or Zomato needs a sandbox that behaves like production and documentation that doesn't require a phone call. The Restaurant Operator doesn't think about integrations — she just expects orders from every channel to appear in the POS automatically. The internal Integration PM wants to launch a new partner in days, not months, by defining an adapter rather than commissioning a project.",
      },
      {
        title: "Stakeholder Management",
        content: "Engineering was initially resistant — the platform felt like over-engineering when each case could be solved pragmatically. I modelled the integration pipeline: 12 partners in backlog, current cost per integration, forward cost at current growth. The economics made the platform investment obvious. With sales and partner management, I held a clear boundary: we commit to what the platform does today; roadmap items aren't commitments until they ship.",
      },
      {
        title: "Technical Architecture",
        content: "Canonical event model defines all platform events in a schema-versioned format. Partner adapters translate between canonical and partner-specific format — a new partner means a new adapter, not changes to the core platform. Webhooks deliver events to partners; they don't poll. Observability via per-integration dashboards showing event volume, delivery rate, latency, and error breakdown.",
        bullets: [
          "Adapter pattern: each partner integration is a translation layer — core platform unchanged per new partner",
          "Idempotency on all financial events: order.placed processed once regardless of delivery retries",
          "Proactive monitoring: failure rate spike on a partner channel triggers alert before restaurant owners report it",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Webhooks vs polling: webhooks for all time-sensitive events — an order not visible in the POS for 2 minutes means the kitchen starts late, and in a restaurant that's a real impact. Adapter pattern vs direct integration: the adapter adds upfront work but makes each subsequent integration a configuration exercise. High-fidelity sandbox vs simplified stub: high-fidelity — false confidence from a simplified sandbox is worse than no sandbox.",
      },
      {
        title: "Execution Approach",
        content: "Built sandbox and adapter framework before onboarding any partners — delayed the first visible integration by four weeks but resulted in Swiggy onboarding in 11 days versus 6 weeks historically. Designed the canonical event model collaboratively with Swiggy's engineering team during a one-week working session — they understood their edge cases better than we did.",
      },
      {
        title: "Metrics & Measurement",
        content: "Integration onboarding time (days from partner agreement to live traffic), order auto-acceptance rate, menu sync latency, webhook delivery success rate, and mean time to detect a broken integration — proactive versus reactive.",
      },
      {
        title: "Outcomes",
        content: "40+ active integrations. Order auto-acceptance rate 99.4%. Mean time to detect a broken integration dropped from 6+ hours to under 20 minutes. Integration engineering shifted from permanently backlogged to building new platform capabilities. The canonical event model became the internal lingua franca — other platform teams adopted it for cross-service communication.",
      },
      {
        title: "Lessons Learned",
        content: "The hardest part wasn't technical — it was semantic alignment on the canonical event model. What does 'order.placed' mean across Swiggy, Zomato, and three regional aggregators? We resolved 14 ambiguous event definitions in the first month post-launch. I now treat semantic alignment as a first-class deliverable, not something handled informally before the project starts.",
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
        title: "Executive Summary",
        content: "GST compliance for Indian restaurants involves multiple tax slabs, HSN codes, composite scheme eligibility, and monthly GSTR filings. Before this product, compliance was a post-hoc manual process with errors at every step. I embedded compliance into the POS and catalog workflow so every transaction captured the right tax data automatically, and GSTR reports generated from that data without manual intervention.",
      },
      {
        title: "Business Problem",
        content: "Restaurant owners were compiling transaction data, mapping items to tax categories in a spreadsheet, and handing it to their accountant every month. Errors were common, penalties were real, and the process ate 8–10 hours of owner time monthly.",
        bullets: [
          "HSN code misassignment was the most common error — wrong codes applied due to lack of a systematic mapping tool",
          "Composite scheme restaurants (turnover < ₹1.5 Cr) frequently applying the wrong tax rates",
          "No automated audit trail from transaction to GSTR return — manual compilation broke the chain",
        ],
      },
      {
        title: "Market Context",
        content: "GST rules for restaurants changed multiple times between 2017 and 2021. Restaurant owners were navigating a moving regulatory target without dedicated tax support. Petpooja serving 1,00,000+ outlets was positioned to solve this at scale: one well-designed system benefiting every merchant, rather than each restaurant navigating the same complexity independently.",
      },
      {
        title: "Product Vision",
        content: "GST compliance should be a byproduct of normal operations, not a separate workflow. When a restaurant bills correctly during service, the data for compliance should already be captured and ready to aggregate. Filing should require a review and a click.",
      },
      {
        title: "Product Strategy",
        content: "Compliance embedded at the point of data creation, not at the end of the period. Three components: a catalog-level HSN assignment and tax rule engine, a transaction capture layer recording the right tax data on every sale, and a reporting layer aggregating to GSTR-ready formats from clean transaction data.",
        bullets: [
          "HSN library: curated mapping of common restaurant items to HSN codes, covering 95%+ of typical menus",
          "Tax rule engine: configurable slabs, exemptions, composite scheme support, and restaurant-type defaults",
          "GSTR report generation: GSTR-1 and GSTR-3B aggregated directly from transaction records — no manual compilation",
        ],
      },
      {
        title: "User Personas",
        content: "The Restaurant Owner wants GST handled correctly without needing to understand HSN codes or composite scheme rules. The Accountant needs clean, categorised transaction data that maps directly to GSTR line items without manual interpretation. The internal Tax Specialist needed tooling to push HSN library updates to all merchants simultaneously as regulations changed.",
      },
      {
        title: "Stakeholder Management",
        content: "I engaged two GST practitioners as external advisors during design — their knowledge of how tax authorities interpret composite scheme rules shaped the data model in ways no internal team member could have. Internal legal reviewed the product to confirm we weren't offering tax advice — the tool is positioned as a data organisation aid, not a compliance guarantee. Finance and sales wanted a premium feature; I argued it should be base platform, because compliance capability is a prerequisite for merchant trust at scale.",
      },
      {
        title: "Technical Architecture",
        content: "HSN library maintained as a versioned dataset — updated by internal tax specialists, pushed to all merchants on next sync. Tax rule engine configurable by restaurant type, turnover bracket, and item category; rules resolve hierarchically from platform default down to item-level override. Every POS bill records item-level tax data at the moment of billing — immutable record, no post-hoc reconstruction.",
        bullets: [
          "Versioned HSN library updated centrally — merchants don't manage their own HSN mapping",
          "Immutable billing records with full tax data — GSTR generated from what actually happened, not reconstructed later",
          "Discrepancy detection: system flags GSTR-2A mismatches before filing, not after",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Curated HSN library vs merchant-managed: curated. Ten thousand restaurants each maintaining their own mappings would have produced 10,000 different answers to the same question. Compliance reporting in base vs premium: base — compliance is a prerequisite for merchant trust, not a differentiator you can charge for.",
      },
      {
        title: "Execution Approach",
        content: "Spent six weeks with a GST practitioner building the HSN library before any product code — restaurant items frequently sit in ambiguous HSN categories and ambiguous cases were resolved with a documented decision log, not a best guess. Beta tested with 50 restaurants across regular, composite, and air-conditioned categories before rollout — composite scheme edge cases surfaced three rule engine bugs that would have caused systematic filing errors at scale.",
      },
      {
        title: "Metrics & Measurement",
        content: "Primary: compliance error rate per 100 GSTR filings versus baseline, HSN assignment accuracy audited monthly, merchant time on compliance preparation. Secondary: GSTR report generation time and merchant support tickets about GST.",
      },
      {
        title: "Outcomes",
        content: "Compliance error rate reduced 67% across 10,000+ merchants. HSN accuracy above 95% on monthly audits. Merchant time on GST preparation dropped from 8–10 hours monthly to roughly 45 minutes. The audit trail from GSTR line item back to the original bill became a feature accountants recommended to clients — tax authority queries answerable in minutes.",
      },
      {
        title: "Lessons Learned",
        content: "Restaurant item categorisation is often genuinely ambiguous under GST rules. The HSN library needed a 'how we classified this' explanation for each item, not just the result — without it, merchants couldn't verify our mapping against their accountant's judgement. I added it post-launch and it meaningfully increased adoption in the accountant-managed segment.",
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
        title: "Executive Summary",
        content: "The online ordering problem isn't the customer-facing interface — it's what happens after the order is placed. Before this platform, every online order required a staff member to read a tablet and re-enter it into the POS. I built the ecosystem to make that step disappear: orders placed anywhere flow directly into the POS and kitchen automatically.",
      },
      {
        title: "Business Problem",
        content: "Restaurants were running a manual routing system — staff watching separate Swiggy and Zomato tablets, re-entering each order into the POS for kitchen processing. During a busy dinner shift, this was two-person overhead that created errors, delays, and the risk of a missed order.",
        bullets: [
          "Order defect rate from manual re-entry estimated at 8–12% — wrong quantity, wrong modifier, missed special instruction",
          "Items marked out of stock in POS remained available on aggregator channels for 30–120 minutes",
          "Aggregator SLA penalties for order acceptance latency exceeding 3 minutes",
        ],
      },
      {
        title: "Market Context",
        content: "Online ordering grew from roughly 15% to over 35% of restaurant revenue across Petpooja's merchant base between 2019 and 2022. Aggregators were simultaneously raising SLA expectations — penalising restaurants for slow acceptance and high defect rates. The online channel had become operationally critical.",
      },
      {
        title: "Product Vision",
        content: "Zero-touch order acceptance: an order placed anywhere — Swiggy, Zomato, the restaurant's website, or a QR code at the table — should appear in the POS and kitchen within seconds, correctly formatted, without any human in the acceptance loop.",
      },
      {
        title: "Product Strategy",
        content: "Build the order ingestion and routing layer before the ordering interface. The customer-facing UI is the visible part, but the value is in reliable order receipt from all channels, intelligent routing to the right kitchen station, and real-time menu availability sync back to all channels.",
        bullets: [
          "Order ingestion: channel adapters handle format translation; the core processes canonical order events",
          "POS and KOT integration: orders injected identically regardless of source — one kitchen system, not multiple screens",
          "Availability sync: POS stock changes propagate to all ordering channels in under 5 minutes",
        ],
      },
      {
        title: "User Personas",
        content: "The Kitchen Staff can't have separate workflows for in-restaurant and online orders — everything must arrive on the same KOT screen. The Restaurant Manager cares about the unified channel view: volume, defect rate, and acceptance lag. The Restaurant Owner cares about aggregator SLA compliance — his ratings and commission rates depend on it.",
      },
      {
        title: "Stakeholder Management",
        content: "Aggregators were both partners and stakeholders with their own product requirements. Swiggy required specific order confirmation formats; Zomato required menu sync in their proprietary format with field names that conflicted with our canonical model. I maintained direct relationships with technical partners at both platforms — useful for negotiating API changes and getting advance notice of deprecations.",
      },
      {
        title: "Technical Architecture",
        content: "Channel adapters for each source translate incoming orders to canonical format before any processing — a Swiggy order and a web order are identical objects by the time they reach the routing layer. Availability sync: POS stock changes trigger an event propagated to all channel adapters, each translating to the partner's expected format.",
        bullets: [
          "Idempotent order ingestion: duplicate deliveries from partner retries handled without creating duplicate orders",
          "Kitchen routing: items split to correct stations (hot, cold, dessert) based on catalog-level station assignment",
          "Auto-reconciliation: online order settlements matched to POS records nightly — 91% auto-matched, 9% flagged",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Unified POS injection vs separate online order management: unified injection — all orders flow into the POS through the same path regardless of channel. A separate 'online orders' workflow would have meant two systems for kitchen staff. Menu sync frequency: near-real-time for availability (out-of-stock is time-critical), batch for catalog changes (price changes can tolerate a 30-minute window).",
      },
      {
        title: "Execution Approach",
        content: "Built and tested the ingestion and POS injection layer in a closed pilot with 20 restaurants before touching the ordering UI. The pilot surfaced the kitchen routing problem — multi-station kitchens needed item-level station assignment, not order-level. That discovery added three weeks but prevented a systematic kitchen workflow problem at launch.",
      },
      {
        title: "Metrics & Measurement",
        content: "Order defect rate per channel, order acceptance latency, menu availability sync latency, auto-acceptance rate, and monthly reconciliation accuracy between online order receipts and POS settlements.",
      },
      {
        title: "Outcomes",
        content: "Order defect rate from online channels reduced 52% in the first 90 days after automated routing launched. 99.4% of online orders now auto-accepted and routed to kitchen without staff intervention. The dedicated 'aggregator tablet monitor' role disappeared at mid-volume restaurants — that staff member moved to floor or prep.",
      },
      {
        title: "Lessons Learned",
        content: "The kitchen routing problem was a blind spot because I designed based on the most common format — single-station kitchens. The multi-station routing issue only surfaced during pilot testing. I now explicitly include format diversity (QSR, fine dining, cloud kitchen, multi-cuisine) in every design review for operational software.",
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
        title: "Executive Summary",
        content: "Dine-in technology is often treated as a novelty or a post-COVID hygiene measure. I designed it to solve a specific operational constraint: during peak hours, order-taking and payment were on the critical path of table turn, requiring staff who were never free at those exact moments. The platform moves those steps off the critical path — not to replace staff, but to remove the ceiling they created.",
      },
      {
        title: "Business Problem",
        content: "At peak service, the two most staff-intensive moments in a table's lifecycle were order-taking and bill settlement. Both required a free staff member at exactly the moments when no staff member was free. Tables sat at 'waiting to order' and 'waiting for the bill' for 8–12 minutes combined.",
        bullets: [
          "Order-taking requiring captain availability at an unpredictable moment — average 5–8 minute wait at table",
          "Bill request to settlement averaging 7–12 minutes: generating bill, delivering it, processing payment",
          "Digital menu not connected to real-time POS availability — showing items that were out of stock",
        ],
      },
      {
        title: "Market Context",
        content: "Post-2020, customer familiarity with QR codes increased significantly across India. Contactless ordering was no longer novel — it was expected at mid-market and above restaurants. At the same time, restaurant labour costs were rising and staffing full service teams was becoming harder for mid-volume operators.",
      },
      {
        title: "Product Vision",
        content: "The guest should control the moments that benefit from control — browsing the menu, placing an order when ready, paying when done. Staff should be freed for the moments that require hospitality. The technology should feel like a faster, more responsive version of traditional service, not a self-checkout kiosk.",
      },
      {
        title: "Product Strategy",
        content: "Three components sequenced from lowest friction to highest. QR menu first: passive, no account required, real-time availability. Table-side ordering second: orders from QR flow into POS identically to captain-placed orders. Pay-at-table third: guests initiate and complete payment without waiting for a physical bill.",
        bullets: [
          "QR menu: real-time availability from POS, photos, dietary filters, no app or login required",
          "Table-side ordering: orders placed directly into POS order model — kitchen sees them identically to counter orders",
          "Staff-override capability: captain can add to any QR-initiated order from the POS at any time",
        ],
      },
      {
        title: "User Personas",
        content: "The Guest wants to see the menu accurately and have the option to order and pay on their own timeline — without creating an account or downloading an app. The Captain needs to know which tables have QR orders in-flight and be able to modify from the POS — not a separate system. The Restaurant Manager cares about table turn time, average cover value, and actionable data.",
      },
      {
        title: "Stakeholder Management",
        content: "The biggest internal tension was with operators concerned QR ordering would make their restaurants feel transactional. I addressed this directly: QR ordering is opt-in, captain ordering never goes away, and the design preserves the captain's role — they can always override from the POS. Operators who saw the pilot results (19% table turn improvement with no degradation in review scores) became the strongest advocates for expanding the rollout.",
      },
      {
        title: "Technical Architecture",
        content: "QR menu served from CDN with real-time availability overlay from POS — menu structure from catalog, availability from POS in real time. Orders from QR go into the same POS order model as captain-placed orders — the kitchen sees a KOT, not a 'QR order.' Pay-at-table payment confirmation updates POS settlement state atomically.",
        bullets: [
          "Zero friction access: QR scan → live menu in under 2 seconds, no login, no app install",
          "Orders injected into POS identically to captain entry — single kitchen workflow regardless of order origin",
          "Split payment support: guests can split a bill by item or amount from the QR interface",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "App vs no-app: no app, no account. A QR that requires an app download loses 40–60% of potential users before they see the menu. Real-time availability vs cached menu: real-time — showing accurate availability requires the POS availability layer to be queryable live, and the engineering cost was worth the product quality improvement.",
      },
      {
        title: "Execution Approach",
        content: "Piloted with 15 restaurants across QSR, casual dining, and fine dining. Fine dining adoption was lower — operators were resistant on hospitality grounds. We designed a 'recommendation mode' for fine dining: QR menu browsing, but ordering still through the captain. This addressed their actual concern without removing the functionality that added value.",
      },
      {
        title: "Metrics & Measurement",
        content: "Table turn time, staff order-taking time per table, pay-at-table adoption rate, average time from bill request to settlement, monthly session volume, and customer review scores over the pilot period.",
      },
      {
        title: "Outcomes",
        content: "Table turn time improved 19% at pilot outlets — from moving order-taking and payment off the critical path. Staff order-taking time reduced roughly 60% at outlets with high QR adoption. 2M+ monthly sessions across the platform. Pay-at-table adopted for 68% of dine-in bills at fully-deployed outlets. Customer review scores unchanged or slightly improved.",
      },
      {
        title: "Lessons Learned",
        content: "I designed a single QR experience for all formats. Fine dining operators had legitimate concerns that couldn't be resolved by reassurance — they needed a product variation that preserved their service model. In hospitality technology, operator concerns about the guest experience are often right. I should have done format-specific research before designing a single-format product.",
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
        title: "Executive Summary",
        content: "Merchant finance anxiety in restaurants is almost never about total amounts — it's about not knowing when money will arrive or why a settlement was short. I built the finance platform as a trust product: payment acceptance reliability first so the right data exists, then financial visibility so merchants can act on it.",
      },
      {
        title: "Business Problem",
        content: "Restaurant owners faced a fragmented financial picture — EDC settlements with opaque timelines, UPI with variable success rates, and monthly payouts from multiple PSPs that didn't reconcile against POS totals without manual work. A persistent 'where is my money' anxiety drove 41% of support tickets.",
        bullets: [
          "UPI success rate at baseline: 93.1% — 7 in 100 payment attempts failing, mostly bank-side timeouts",
          "Monthly settlements from payment processors not matching POS transaction totals",
          "No visibility into settlement timeline — merchants didn't know when funds would arrive or why a payout was short",
        ],
      },
      {
        title: "Market Context",
        content: "UPI became the dominant payment method in Indian restaurants between 2020 and 2022, growing from roughly 15% to over 50% at many outlets. A 7% failure rate that was acceptable when UPI was secondary became a meaningful service issue when it was the primary payment method.",
      },
      {
        title: "Product Vision",
        content: "Every rupee a restaurant earns should be traceable from the moment of payment to when it lands in the bank account. Settlement should be predictable, reconciliation automatic, and 'why was my payout short?' should be answerable in the platform without a support call.",
      },
      {
        title: "Product Strategy",
        content: "Two parallel tracks: payment reliability (engineering work on routing, retry logic, terminal monitoring) and financial visibility (data architecture for the reconciliation layer and a merchant-facing dashboard).",
        bullets: [
          "Payment reliability: health-aware UPI routing, EDC terminal monitoring, retry logic with provider failover",
          "Settlement transparency: settlement engine with full fee/deduction audit trail, daily status notification",
          "Reconciliation: automated matching of POS transaction records to bank/PSP settlement records",
        ],
      },
      {
        title: "User Personas",
        content: "The Restaurant Owner wants to know payments work reliably and not have to call support to understand a short payout. She checks the payout dashboard on her phone — mobile is primary. The Accountant needs a clean settlement export that maps to the chart of accounts without manual transformation. The Cashier needs the payment terminal to work on the first tap with clear error feedback when it doesn't.",
      },
      {
        title: "Stakeholder Management",
        content: "PSPs were initially resistant to sharing real-time settlement status, preferring end-of-day batch reporting. I made the case using merchant support ticket data: the 'missing settlement' category was damaging merchant trust in Petpooja, not the PSP, even when the root cause was PSP timing. That framing shifted the conversation. Internally, every banking services feature required legal and compliance review — I built this into the development cycle rather than treating it as a gate at the end.",
      },
      {
        title: "Technical Architecture",
        content: "Health-aware UPI routing across payment providers with real-time success rate monitoring — traffic shifts automatically to healthier routes. EDC terminals send a heartbeat; terminals that go silent trigger alerts before they cause a failed payment. Reconciliation engine matches POS records to PSP records using transaction ID, amount, and timestamp — auto-matches 94%, surfaces exceptions with specific discrepancy reason.",
        bullets: [
          "Health-aware UPI routing: traffic shifted automatically on PSP degradation",
          "EDC terminal heartbeat: proactive detection of offline terminals before payment failure occurs",
          "Settlement audit trail: every deduction (MDR, GST on MDR, chargeback) visible with calculation basis",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Health-aware routing vs simple load balancing: health-aware, because during PSP degradation simple load balancing kept sending 20% of transactions to a degraded route. Reconciliation auto-match threshold: exact amount match rather than tolerance — a ₹2 discrepancy is sometimes an error and sometimes rounding, and auto-matching either way hid the ones that mattered.",
      },
      {
        title: "Execution Approach",
        content: "Started with reconciliation, not payment reliability — it was creating the highest support volume and was entirely solvable without PSP partnership work. The reconciliation engine launched in 6 weeks and immediately reduced 'missing money' tickets by 30%, creating goodwill that made the subsequent payment reliability work easier to sustain while PSP negotiation took months.",
      },
      {
        title: "Metrics & Measurement",
        content: "UPI success rate, EDC terminal uptime, settlement support ticket volume, reconciliation auto-match rate, settlement-to-payout latency, and merchant NPS on the financial product segment.",
      },
      {
        title: "Outcomes",
        content: "UPI success rate from 93.1% to 97.4% — roughly 40,000 fewer failed payments per month at steady state. Settlement support tickets reduced 41% — the largest single category reduction in merchant support. 94% of payment records auto-reconciled without manual review. Payout prediction accuracy within 1 day of actual for 89% of settlements.",
      },
      {
        title: "Lessons Learned",
        content: "UPI infrastructure failures are invisible until they're at scale. A 7% failure rate sounds acceptable in testing. At 600,000 monthly transactions, it's 42,000 failed payments. I now build failure rate projections at operational scale into every payment product review — a 'good enough' error rate in testing is often not good enough in production.",
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
        title: "Executive Summary",
        content: "The POS problem wasn't a feature gap — it was a data architecture problem. Billing, kitchen orders, table management, and payment were four separate systems that didn't share state. Every order crossed system boundaries with re-keying at each step. I redesigned around a single shared order data model that all modules read from and write to, eliminating the manual translation steps that were the source of both the time overhead and the error rate.",
      },
      {
        title: "Business Problem",
        content: "A cashier closing a table had to read the kitchen confirmation, manually calculate the bill, process payment on a separate EDC terminal that didn't know the bill total, and reconcile — re-keying at three steps. Each re-key was a potential error, and errors during service cost time and goodwill.",
        bullets: [
          "Average checkout time 47 seconds — driven by multi-system lookups and manual calculations",
          "Billing errors at 6–8% of covers during peak hours — mostly quantity errors from re-keying",
          "No unified sales view — daily reconciliation required pulling from multiple systems",
        ],
      },
      {
        title: "Market Context",
        content: "The Indian restaurant POS market in 2020 was dominated by legacy systems — standalone billing software with no kitchen integration, no cloud connectivity, and no aggregator support. Restaurant chains scaling past 20 outlets found that managing disconnected POS systems was becoming an operational liability.",
      },
      {
        title: "Product Vision",
        content: "One order — from 'I'll have the biryani' to the cash drawer closing — should live in one place. Every system that needs to act on that order reads from and writes to the same record. No translation. No re-keying. No manual reconciliation at the end of the shift.",
      },
      {
        title: "Product Strategy",
        content: "Anchor product design on the actual restaurant service sequence: order → kitchen → bill → pay → reconcile. Design the data model first so every module builds on the same state. Build offline-first from the start — not as a feature, but as an architectural constraint.",
        bullets: [
          "Single order data model shared across billing, KOT, table, payment, and reporting",
          "Offline-first local store: all operations work without network; cloud sync runs asynchronously",
          "Multi-format support from the data model level — QSR, fine dining, cloud kitchen as configuration, not separate products",
        ],
      },
      {
        title: "User Personas",
        content: "The Cashier needs to close a table in under 20 seconds on a touch screen with minimum taps — errors must be prevented by the system, not communicated after the fact. The Kitchen Staff need a clear queue and an explicit confirmation step routed to their station. The Restaurant Owner needs the daily summary from one screen without opening three systems.",
      },
      {
        title: "Stakeholder Management",
        content: "The largest resistance came from operators during migration from existing systems. I designed a parallel-run approach: new POS runs in shadow mode alongside the existing system for one week, validating that sales totals, KOT routing, and table management behave identically before switching over. This added three weeks per batch but reduced migration-related support tickets by 80% versus a hard-cutover approach.",
      },
      {
        title: "Technical Architecture",
        content: "Every order state transition (placed, sent to kitchen, modified, billed, paid) is written to a single order record — no module maintains its own copy. Offline-first: SQLite local store with a write-ahead log, every state transition written locally first and synced to cloud on connectivity. Multi-terminal sync via local network, not cloud.",
        bullets: [
          "Single order record — one source of truth for billing, kitchen, table, and payment",
          "SQLite local store with cloud sync — full offline capability, no data loss on connectivity drops",
          "KOT routing: item-level station assignment from catalog, multi-station KOT generation from one order",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Offline-first vs online-first: offline-first, non-negotiable. Restaurant network reliability is too variable to build a mission-critical system on assumed connectivity. Modular POS vs unified: unified at the data layer, modular at the UI layer — each role gets a purpose-built interface, but all interfaces read and write the same order model.",
      },
      {
        title: "Execution Approach",
        content: "Spent three weeks across seven restaurant formats before writing the spec — QSR, fine dining, cloud kitchen, bar, bakery, multi-cuisine, fast casual. Most important discovery: KOT routing for multi-station kitchens was far more complex than my single-printer assumption. Fine dining kitchens route to separate grill, cold prep, pastry, and expediter stations. I rewrote the KOT module from scratch — added four weeks but shipped something that fit real kitchen operations.",
      },
      {
        title: "Metrics & Measurement",
        content: "Checkout time per cover, billing error rate, POS uptime including offline periods, KOT-to-kitchen latency, daily reconciliation time, and adoption rate by restaurant format.",
      },
      {
        title: "Outcomes",
        content: "Checkout time reduced from 47s to 18s across 4,200 outlets — a 62% reduction from eliminating re-keying, not UI optimisation. Billing errors down 34%. POS uptime 99.3%. The most-used owner feature post-launch was the real-time sales dashboard — the unified view the multi-system architecture had made impossible. The POS data model became the foundation for catalog, online ordering, dine-in, and finance products built on top of it.",
      },
      {
        title: "Lessons Learned",
        content: "My initial KOT routing model was wrong because I based it on QSR research — the most common format by volume, but not the most complex. Fine dining and multi-cuisine kitchens have routing requirements QSR doesn't. The lesson: validate across the full distribution of the target market, not just the modal user. I now run format-specific research as a gate before finalising any operational system spec.",
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
        title: "Executive Summary",
        content: "Restaurant Android applications aren't consumer apps. They run on budget EDC terminals, low-RAM tablets, and kitchen displays — with inconsistent power, greasy screens, and users who can't stop working to troubleshoot. I built the Android product line with those constraints as primary design inputs: offline-first transaction handling, minimal RAM footprint, role-specific workflows, and an OTA update channel that could push fixes to 8,500 devices without service disruption.",
      },
      {
        title: "Business Problem",
        content: "Restaurants were using consumer Android devices with general-purpose software for mission-critical tasks. A waiter taking a table order had to navigate 4–6 screens per order. Kitchen display apps would go blank on low RAM and not auto-recover. EDC terminal apps crashed during payment — exactly the moment when a crash was most costly.",
        bullets: [
          "General-purpose POS apps requiring 4–6 navigation steps per order — captains slower than pen-and-paper during peak",
          "Kitchen display apps crashing on low RAM devices — staff losing the order queue and recovering manually",
          "No OTA update mechanism — fixes required physical access to each device",
        ],
      },
      {
        title: "Market Context",
        content: "The Indian restaurant technology market runs on Android hardware — not enterprise MDM-managed fleets, but consumer-grade devices purchased independently by restaurant owners. The device landscape included Sunmi EDC terminals, Epson receipt printers, generic tablets at various RAM tiers, and phones used as captain order-taking devices.",
      },
      {
        title: "Product Vision",
        content: "A restaurant staff member should never have to think about the device they're using. The app should start instantly, work fully without network, respond on the first tap under any load, and update itself silently in the background. The UX should be designed for the specific role and operational moment — not a general-purpose interface the user has to adapt to their job.",
      },
      {
        title: "Product Strategy",
        content: "Role-specific applications: one app per operational role, not one app with role-based views. A cashier and kitchen staff have fundamentally different workflows — a unified app makes both worse. Offline-first as a non-negotiable architectural constraint. Minimal RAM footprint — target the lowest-spec device in the fleet.",
        bullets: [
          "Billing terminal app: cashier workflow — fast table selection, bill generation, payment acceptance",
          "Captain order-taking app: menu browsing and order placement optimised for tableside use with gloves or greasy hands",
          "Kitchen display (KDS) app: order queue management, station routing, acknowledgement — no extraneous UI",
        ],
      },
      {
        title: "User Personas",
        content: "The Cashier processes 80–120 covers during peak service and can't have a single crash or slow response — the UI must prevent errors, not communicate them after the fact. The Captain uses the order-taking app at the table, often with wet or greasy hands, so the UI must work with imprecise touches. The Kitchen Staff need to see the current queue and acknowledge their station's items without touching the screen frequently.",
      },
      {
        title: "Stakeholder Management",
        content: "Hardware diversity created complexity — every OEM had slightly different Android implementation quirks. I maintained a device compatibility matrix and required new hardware integrations to pass a defined test suite before certification. After a single bad update to 400 devices caused a 6-hour service disruption, I held the line on phased rollouts — catching issues in 5% of the fleet before they affect 100% is worth the deployment complexity every time.",
      },
      {
        title: "Technical Architecture",
        content: "Offline-first SQLite store with sync on connectivity — foreground operations are always local, background sync runs when network is available. Apps target 180MB peak RAM to run on 1GB-RAM EDC terminals. OTA update packages are versioned, downloaded in background, and applied on next idle restart. Elevated crash rates in a version trigger an automatic rollback signal.",
        bullets: [
          "SQLite-first transaction model — zero dependency on network for core functionality",
          "Sub-180MB RAM ceiling — verified on lowest-spec target device before each release",
          "OTA channel: phased rollout (5% → 20% → 100%), automatic rollback on crash rate threshold",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Role-specific apps vs unified app with role views: role-specific. A unified app is simpler to maintain but produces a worse experience for every role — each sees a bloated interface designed for everyone and optimised for no one. Phased OTA rollouts vs simultaneous: phased, non-negotiable after the 400-device incident.",
      },
      {
        title: "Execution Approach",
        content: "Built the billing terminal app first and deployed to 50 restaurants as an extended beta before building any other role apps. The billing terminal is on the critical path of payment — getting it right first proved the architecture decisions (offline-first, RAM ceiling, OTA channel) before building on them. The captain order-taking app went through five interaction prototypes on actual Android tablets — navigating a menu with one hand while holding a notepad required more iteration than the billing UI.",
      },
      {
        title: "Metrics & Measurement",
        content: "Crash-free session rate per app per device model, RAM peak usage, OTA update coverage (% of fleet on latest stable within 48 hours), order entry time per table, transaction processing time, and offline operation rate.",
      },
      {
        title: "Outcomes",
        content: "99.1% crash-free session rate across 8,500+ active devices. OTA update coverage: 95% of fleet on latest stable within 48 hours. Zero offline transaction losses. Captain order-taking time reduced roughly 40% versus the previous general-purpose app. The device monitoring dashboard — built as an internal ops tool — became a product feature requested by large restaurant groups who wanted fleet visibility for their own estates.",
      },
      {
        title: "Lessons Learned",
        content: "Android hardware diversity matters far more than expected. The app ran correctly on the primary test device then exhibited edge case failures on 3 of 12 hardware variants — touch event handling differences, font rendering issues on specific screen densities, one camera integration breaking on a specific Sunmi firmware version. Device compatibility is now a P0 requirement tested on every device model before any release.",
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
        title: "Executive Summary",
        content: "Petpooja's platform had grown as a monolith — a billing module change required re-testing catalog, a payment failure brought down order acceptance, and every new capability required coordinating multiple teams to avoid breaking existing functionality. I defined the domain service decomposition that separated the platform into six independently deployable services with explicit API contracts and an event-driven backbone for cross-domain communication.",
      },
      {
        title: "Business Problem",
        content: "The monolith's failure modes were becoming a business risk. A degraded payment service could cascade into POS unavailability — restaurants couldn't bill customers during service. Any schema change required coordinating three or four teams before deployment. When something broke, diagnosing which component was responsible added hours to incident resolution.",
        bullets: [
          "Cascading failures: payment service degradation causing POS unavailability — unrelated systems affecting each other",
          "Deployment coordination required across 3–4 teams for any schema change — features took weeks longer than development",
          "New product onboarding slow: teams had to learn the full monolith before building new capabilities",
        ],
      },
      {
        title: "Market Context",
        content: "Petpooja was adding integration platform, online ordering, and dine-in technology to an already-loaded POS and catalog codebase. Product and engineering teams were expanding and structuring around product areas — the architecture needed to match the team topology or Conway's Law would keep making it worse.",
      },
      {
        title: "Product Vision",
        content: "The platform should behave like a set of independent products with well-defined integration contracts. A POS release shouldn't require a catalog deployment. A payment incident shouldn't affect order acceptance. New teams should be able to build on the platform without understanding the entire existing codebase.",
      },
      {
        title: "Product Strategy",
        content: "Domain boundary definition first — the hardest and most consequential decision. Service decomposition without clear domain boundaries produces microservices that are worse than a monolith: distributed, difficult to debug, and still coupled. Defined the six domains based on data ownership and business capability.",
        bullets: [
          "Domain definition: POS, Catalog, Ordering, Merchant, Finance, Devices — each owns its data and API contracts",
          "Event-driven backbone: cross-domain communication through events where eventual consistency is acceptable",
          "Financial idempotency: all financial operations idempotent and auditable under retries and partial failures",
        ],
      },
      {
        title: "User Personas",
        content: "The primary persona is the internal engineering team. The POS Engineering Team needs a Catalog API that is stable and versioned. The Finance Engineering Team needs a payment event model that is immutable and auditable — they're building settlement logic on top of it. The On-Call Engineer needs to isolate a production incident to a specific service within minutes, not diagnose a monolithic failure.",
      },
      {
        title: "Stakeholder Management",
        content: "The decomposition required buy-in from every engineering lead whose team would own one of the new domains. The largest friction was data ownership — every team wanted read access to adjacent domains' data, which would have reproduced the coupling of the monolith in distributed form. I held a strict rule: no service queries another service's database directly. This was uncomfortable, but it was the boundary discipline that made independent deployability achievable.",
      },
      {
        title: "Technical Architecture",
        content: "Six domain services: POS, Catalog, Ordering, Merchant, Finance, Devices — each owning its data and API contracts. Event backbone: Kafka for cross-domain events with consumer groups per subscribing service. Synchronous APIs only for consistency-critical paths. Circuit breakers on synchronous calls — a degraded dependency triggers fallback, not cascading failure.",
        bullets: [
          "Six independently deployable domains, each owning its data and API contracts",
          "Event backbone for eventual-consistency communication — services publish what they produce, subscribe to what they consume",
          "Financial idempotency: all payment and settlement events carry idempotency keys — duplicate processing rejected",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Six domains vs finer granularity: six. More granular decomposition would have been premature — the right boundary is where data ownership is clear and the team boundary matches. Event-driven vs synchronous for cross-domain: event-driven as the default, synchronous only where immediate consistency is genuinely required. Defaulting to events forces explicit thinking about which operations truly need synchronous consistency — and that set is smaller than it appears.",
      },
      {
        title: "Execution Approach",
        content: "Strangler fig pattern: new capabilities built as domain services from day one; existing functionality migrated incrementally, starting with Finance — highest isolation value, clearest data boundary, most visible failure modes. Each domain migration ran in shadow mode for 2–4 weeks before traffic shifted.",
      },
      {
        title: "Metrics & Measurement",
        content: "Platform uptime per service, cascading failure rate, MTTD and MTTR per service, deployment frequency per team (proxy for independent deployability), and new feature build time versus pre-decomposition baseline.",
      },
      {
        title: "Outcomes",
        content: "Platform uptime 99.7% versus 98.1% pre-decomposition — the difference reflects eliminated cascading failures. Cascading failure rate reduced 82%. Mean time to detect a production incident reduced 65% — service-specific dashboards surface the failing component immediately. New capability build time reduced 40%. Deployment frequency per team increased 3x.",
      },
      {
        title: "Lessons Learned",
        content: "The hardest part was organisational alignment on data ownership rules, not technical execution. The 'no direct database access across domains' rule was challenged repeatedly. I should have built the business case using specific historical incidents where cross-domain coupling caused a production issue — the technical argument for loose coupling was abstract; incident history was concrete.",
      },
    ],
  },
];

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-bold text-[#00d4aa]">{value}</div>
      <div className="text-slate-500 text-xs mt-0.5">{label}</div>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: "rgba(10,15,30,0.6)" }}>
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
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,15,30,0.8) 100%)" }} />
          </div>
        )}
        <div className="p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-5 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "rgba(0,212,170,0.08)" }}>
              {cs.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-xs text-slate-600 font-mono">{cs.num}</span>
                <h3 className="text-white font-bold text-xl">{cs.title}</h3>
              </div>
              <p className="text-slate-500 text-xs mb-3 tracking-wide">{cs.category}</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{cs.summary}</p>
            </div>
          </div>
          <div className="text-slate-500 flex-shrink-0 mt-1">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/5">
          {cs.metrics.map((m) => (
            <MetricBadge key={m.label} value={m.value} label={m.label} />
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-white/8 text-slate-600" style={{ background: "rgba(255,255,255,0.02)" }}>
              {tag}
            </span>
          ))}
        </div>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-white/5">
          <div className="px-7 sm:px-8 py-8 space-y-0">
            {cs.sections.map((section, idx) => (
              <div key={idx} className={`py-7 ${idx < cs.sections.length - 1 ? "border-b border-white/5" : ""}`}>
                <div className="flex items-start gap-6">
                  <div className="w-5 flex-shrink-0 mt-0.5">
                    <span className="text-xs text-slate-700 font-mono">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-[#00d4aa] uppercase tracking-widest mb-3">{section.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{section.content}</p>
                    {section.bullets && (
                      <ul className="mt-4 space-y-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-[#00d4aa]/50 mt-2 flex-shrink-0" />
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
    <div className="bg-[#020817] pt-24">
      <section className="py-20 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs font-medium text-[#00d4aa] uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Nine products. Every layer of the stack.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Each case study covers the business problem, market context, product strategy, technical architecture, stakeholder management, execution approach, and what I got wrong. This is the thinking behind the outcomes.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-3">
              {[
                "Executive Summary", "Business Problem", "Market Context",
                "Product Vision", "Product Strategy", "User Personas",
                "Stakeholder Management", "Technical Architecture", "Key Product Decisions",
                "Execution Approach", "Metrics", "Outcomes",
              ].map((label) => (
                <div key={label} className="px-2.5 py-1.5 rounded-lg border border-white/5 text-center" style={{ background: "rgba(0,212,170,0.03)" }}>
                  <span className="text-slate-600 text-xs">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-700 text-xs mt-3">13 sections per case study — click any case study to expand</p>
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

      <section className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="p-5 rounded-2xl border border-amber-500/10" style={{ background: "rgba(245,158,11,0.04)" }}>
              <p className="text-amber-500/70 text-xs">
                <strong className="text-amber-500/90">Note:</strong> Metrics reflect outcomes from Petpooja&apos;s restaurant technology products. Specific figures will be verified through reference conversations on request. No NDA-protected customer data is disclosed.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
