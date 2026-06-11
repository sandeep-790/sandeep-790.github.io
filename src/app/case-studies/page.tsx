"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
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
    sections: [
      {
        title: "Executive Summary",
        content: "Petpooja's catalog problem was not a UI problem — it was a data architecture problem. Restaurant chains were maintaining menus independently across five to six systems, and every system had drifted from the others. I designed and shipped the Catalog Management Platform as infrastructure: a hierarchical data model with a change propagation engine that made multi-channel menu consistency an automatic property of the system, not a manual discipline.",
      },
      {
        title: "Business Problem",
        content: "A restaurant group with 80 outlets wanted to run a weekend price promotion. Their catalog team spent Monday through Wednesday manually updating each aggregator portal, each outlet's POS, and the ordering website. By Thursday the updates were live. By Friday, half the outlets had reverted to old prices because POS syncs had overwritten the manual changes. The promotion lost them money in operational overhead. This was not an edge case — it was the standard workflow for menu management across the industry.",
        bullets: [
          "Menu data maintained independently in POS, Swiggy, Zomato, website, and QR menu — each by different teams, on different schedules",
          "Price inconsistencies between channels caused order defects, aggregator penalties, and customer refunds",
          "A 50-outlet chain required an estimated 4–6 hours of manual catalog work per menu change",
          "Item availability changes (86s during service) required editing catalog systems rather than marking real-time availability",
        ],
      },
      {
        title: "Market Context",
        content: "Petpooja was scaling from single-outlet restaurants to multi-brand franchise groups managing 200+ locations. The catalog problem scaled linearly with outlet count: every new outlet added was another place a menu change had to be manually propagated. The aggregator ecosystem in India was also consolidating — Swiggy and Zomato were demanding faster menu consistency from restaurant partners, and penalising outlets for order defects caused by stale catalog data. Without a solution, catalog management would have become the binding constraint on how many outlets Petpooja could commercially support.",
      },
      {
        title: "Product Vision",
        content: "A restaurant's menu should be defined once and exist everywhere simultaneously. The catalog should be infrastructure — invisible to operators when it's working correctly, and the foundation that every other system builds on. A brand manager at a 150-outlet chain should be able to change a price in one action and trust it's consistent everywhere within the hour. An outlet manager should be able to mark an item out of stock in 15 seconds without touching the catalog.",
      },
      {
        title: "Product Strategy",
        content: "Three phases, sequenced by value delivery. First: consolidate all menu data into a single canonical store with the data model designed for chain operations (not retrofitted for it). Second: build the propagation engine that pushes changes to all channels automatically, handles partner API constraints, and reports status back. Third: give operators the control layer — bulk operations, version history, rollback, outlet-level overrides — that makes the system safe to rely on at scale.",
        bullets: [
          "Phase 1 — Canonical catalog store: Hierarchical model, migration tooling, data validation for existing menus",
          "Phase 2 — Propagation engine: Channel workers per downstream system, retry logic, delivery confirmation, conflict resolution",
          "Phase 3 — Operator controls: Bulk operations, scheduling, version history, outlet-level override management",
          "Non-negotiable: availability (what's in stock now) decoupled from catalog (what exists) from the start",
        ],
      },
      {
        title: "User Personas",
        content: "Three primary personas shaped every design decision. The Brand Manager manages menu strategy across all outlets and needs to push changes across the full chain in one action without knowing which aggregator API is having a bad day. The Outlet Manager handles daily operations — she needs to mark items sold-out in under 30 seconds without navigating a catalog editing flow during service. The Aggregator Ops Analyst (internal) was spending four hours per day manually syncing menus to partner portals — a role that existed only because the system didn't automate what it should have.",
        bullets: [
          "Brand Manager: Monthly price changes, new item launches, promotional menus — needs chain-wide actions in one step",
          "Outlet Manager: Daily availability management — 86s, time-based unavailability, outlet-specific additions",
          "Aggregator Ops (internal): Wanted to stop doing manual sync and focus on exception handling only",
          "Integration Engineer (partner): Needed predictable API contracts and sandbox to build against",
        ],
      },
      {
        title: "Stakeholder Management",
        content: "Engineering leads were sceptical of the hierarchical model — they wanted a flat catalog with manual overrides at the outlet level. I built a prototype showing how the flat model broke for chains with outlet-specific variants (a Mumbai outlet with different portion sizes than the Delhi flagship) and presented it with three real customer examples. The prototype moved them. Sales teams worried the migration would corrupt existing outlet menu data — I negotiated a 30-day parallel-run period where old and new systems co-existed before any deprecation. Aggregator partners had rate limits on their menu update APIs that shaped the propagation architecture in ways I hadn't anticipated: batch updates scheduled off-peak for non-urgent changes, real-time push only for price changes and availability.",
      },
      {
        title: "Technical Architecture",
        content: "Hierarchical data model: Organisation → Brand → Outlet → Channel. Each node inherits properties from its parent and overrides selectively — a Mumbai outlet price override creates a scoped record, not a catalog edit. Availability engine is completely decoupled from catalog: out-of-stock marking creates a time-scoped availability record, leaving the catalog untouched. Propagation engine is event-driven: a catalog change event triggers channel workers (POS sync, Swiggy adapter, Zomato adapter, ordering platform, QR menu). Each worker is independently retryable and reports delivery status. No change is considered propagated until all channel workers acknowledge.",
        bullets: [
          "Hierarchical model with selective override at every level — pricing, availability, and tax rules each have independent override chains",
          "Availability engine separate from catalog — real-time stock changes don't touch catalog data, enabling instant 86s",
          "Channel workers per downstream system — each handles partner API constraints, rate limits, and format translation independently",
          "Event log with delivery status per channel — operators see exactly which outlets are in sync and which have pending changes",
          "Version history with outlet-level rollback — bad menu experiments can be reversed without affecting other outlets",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Hierarchical vs flat model: I chose hierarchical. The flat model worked for single-outlet operations but couldn't represent outlet-specific variant pricing without duplicating entire menu trees. Real-time vs batch propagation: chosen by channel — POS and ordering channels get real-time push (consistency matters immediately), aggregator channels get batch with scheduling (rate limits and their own propagation delays make real-time impractical). Availability decoupled from catalog: this was the most important decision. Merging them made the catalog the critical path during service, which is exactly when catalog edits should never be required.",
      },
      {
        title: "Execution Approach",
        content: "Built the data model first — with engineering leads and three large chain operators as design partners over six weeks. The model went through four revisions before any application code was written. This paid off: every feature after that built on a stable foundation without rework. Migration was the highest-risk phase — existing menus across 800 outlets had approximately 30% data quality issues (duplicates, inconsistent item names, missing tax codes). I built the migration as a read-only import with a validation report operators could review and approve before committing. Each outlet's catalog was migrated in a maintenance window with immediate rollback capability if validation failed.",
      },
      {
        title: "Metrics & Measurement",
        content: "Primary metrics: menu propagation time from commit to all-channels-confirmed, channel sync accuracy (audited weekly by sampling outlets against each downstream system), manual ops team hours on aggregator sync. Secondary metrics: aggregator order defect rate attributable to menu inconsistency, outlet adoption rate of bulk operations tools, catalog API response time for the POS integration.",
      },
      {
        title: "Outcomes",
        content: "Menu propagation time cut from 3 days to under 4 hours for 200-outlet chains. Most chains now propagate changes in under 30 minutes. Channel sync accuracy: 99.2% on weekly audits. Aggregator order defects from menu inconsistency near zero. Internal aggregator ops team headcount reduced from 6 to 2 — the 2 remaining handle exception resolution, not routine sync. Catalog now serves 15,000+ outlets and became the foundation for QR menus, online ordering, and the integration platform — products that weren't on the roadmap when I designed the data model, but became straightforward to build because the foundation was designed as infrastructure.",
      },
      {
        title: "Lessons Learned",
        content: "I underestimated the data quality problem in existing menus. When we migrated 800 outlets, roughly 30% had inconsistent or duplicate data that couldn't be automatically resolved. I should have built data quality tooling before migration, not during it — three weeks of manual data cleaning that a pre-migration audit would have surfaced in one. The deeper lesson: data migrations are as much about understanding the current state as designing the target state. I now run a data audit as the first step of any migration project.",
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
        content: "Every new aggregator or third-party integration was a custom engineering project: 6 weeks of scoping, mapping, testing, and deployment, largely from scratch each time. Integration engineering was permanently backlogged and had no leverage. I designed the Integration Platform as a product — canonical event model, adapter pattern for partner translation, versioned APIs, webhook delivery with guarantees, and a production-fidelity sandbox. Integration onboarding became a configuration exercise, not a coding engagement.",
      },
      {
        title: "Business Problem",
        content: "Petpooja was losing RFPs to competitors because restaurant chains couldn't get the aggregator integrations they needed within their go-live timelines. Each new integration was treated as a unique project: custom data mapping, no reusable components, manual testing, 6-week timelines. When partner APIs changed without notice — and they did frequently — fixes required context-switching the original engineer back into code they hadn't touched for months. There was no observability. Broken integrations were discovered by angry restaurant owners, not by the platform.",
        bullets: [
          "Each new partner integration required 6 weeks of custom engineering from near-scratch",
          "Integration engineering team backlogged by 4–5 months — new partnerships were delayed by capacity, not feasibility",
          "No observability: broken integrations discovered reactively through support tickets, not proactive monitoring",
          "No sandbox: partner engineers had to test against production environments, creating risk on both sides",
          "Petpooja was losing restaurant customers to competitors with faster aggregator integration timelines",
        ],
      },
      {
        title: "Market Context",
        content: "The aggregator ecosystem in India was expanding rapidly — Swiggy, Zomato, and a growing set of regional players all wanted deep POS integration. Simultaneously, restaurant technology was converging around integration capability as a competitive differentiator. A POS that could connect to every aggregator a restaurant used was worth more than one that required manual order entry from a tablet. Petpooja needed integration to be a scalable capability, not a one-off cost for each new relationship.",
      },
      {
        title: "Product Vision",
        content: "Integration as a product, not a project. External partners should be able to self-serve through documented APIs and a sandbox environment that behaves identically to production. Internal teams should be able to onboard new integrations by composing existing platform primitives — defining an adapter for a new partner's event format — not writing bespoke code. The observable outcome for a restaurant operator: orders placed on Zomato appear in the POS kitchen display automatically, with no staff intervention.",
      },
      {
        title: "Product Strategy",
        content: "Define the canonical events first — the platform's lingua franca that every integration speaks. Build the routing layer that translates between canonical events and partner-specific formats. Build the sandbox before onboarding any partners. The temptation was to do a quick Swiggy integration first and extract a platform later — I resisted this because the first integration would set the pattern for all subsequent ones, and a pattern extracted from a single example is just that example.",
        bullets: [
          "Canonical event model: menu.updated, item.availability_changed, order.placed, order.accepted, order.cancelled — schema-versioned",
          "Adapter framework: each partner has an adapter translating between canonical and partner-specific format",
          "Webhook delivery engine: signed payloads, retry with exponential backoff, delivery receipts",
          "Sandbox environment: production-fidelity, seeded with representative restaurant data, available to partner engineers",
          "Observability layer: per-integration dashboards for event volume, delivery rate, latency, error counts",
        ],
      },
      {
        title: "User Personas",
        content: "Three personas defined the platform requirements. The Aggregator Integration Engineer works at Swiggy, Zomato, or a regional partner. She needs a sandbox that behaves like production, API documentation that doesn't require a phone call, and webhook behaviour she can test reliably. If the sandbox works correctly, she can build the integration without involving Petpooja's team at all. The Restaurant Operator doesn't think about integrations — she just expects orders from every channel to appear in the POS automatically, and menu changes to sync without manual work. The Petpooja Integration PM wants to launch a new partner integration in days, not months, by defining an adapter rather than commissioning a project.",
      },
      {
        title: "Stakeholder Management",
        content: "The engineering team was initially resistant — the platform abstraction felt like over-engineering when they could solve each case pragmatically. I built a model showing the projected integration pipeline: 12 partners in the backlog, current engineering cost per integration, and the forward cost at current growth. The economics made the platform investment obvious. Partner relations teams wanted to promise aggregator partners features the platform didn't support yet. I established a clear boundary with sales and partner management: we commit to what the platform does today; roadmap items are not commitments until they ship. This required uncomfortable conversations but prevented the engineering backlog from ballooning with premature commitments.",
      },
      {
        title: "Technical Architecture",
        content: "Canonical event model defines all platform events in a schema-versioned format. Partner adapters translate between canonical and partner-specific format — new partner means a new adapter, not changes to the core platform. Webhook delivery engine: signed HMAC payloads, retry with exponential backoff, idempotency keys on all events, delivery receipts logged per event. Partners receive events; they do not poll. Observability via per-integration dashboards showing event volume, delivery success rate, p95 latency, and error breakdown by type.",
        bullets: [
          "Adapter pattern: each partner integration is a translation layer over the canonical event model — core platform unchanged per new partner",
          "Webhooks not polling: time-sensitive events (orders) delivered immediately; polling introduces a consistency window unacceptable in restaurant operations",
          "Production-fidelity sandbox: seeded with realistic restaurant data, same event flows as production — false confidence from simplified stubs is worse than no sandbox",
          "Idempotency on all financial events: order.placed processed once regardless of delivery retries",
          "Proactive monitoring: failure rate spike on a partner channel triggers alert before restaurant owners report it",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Webhooks vs polling: webhooks for all time-sensitive events. An order placed at 12:03 that isn't visible in the POS until 12:05 means the kitchen starts 2 minutes late — in a restaurant, that's a meaningful operational impact. Adapter pattern vs direct integration: the adapter adds upfront design work but makes each subsequent integration a configuration exercise, not an engineering project. High-fidelity sandbox vs simplified stub: I chose high-fidelity. A sandbox that doesn't reflect production edge cases gives partners false confidence — they ship, hit a production-only edge case, and we get an incident. The sandbox must earn the trust it implicitly promises.",
      },
      {
        title: "Execution Approach",
        content: "Built sandbox and adapter framework before onboarding any partners — a deliberate decision that delayed the first visible integration by four weeks but resulted in Swiggy onboarding in 11 days (vs 6 weeks historically), which served as proof for every subsequent partner conversation. Designed the canonical event model collaboratively with Swiggy's integration engineering team during a one-week working session — they understood their own edge cases better than we did, and building the model with them rather than for them meant the first adapter was written with direct knowledge of where it would break.",
      },
      {
        title: "Metrics & Measurement",
        content: "Integration onboarding time (days from partner agreement to live traffic), order auto-acceptance rate (orders from all channels that flow into POS without manual intervention), menu sync latency (time from catalog change to channel confirmation), webhook delivery success rate, and mean time to detect a broken integration (proactive detection vs reactive support ticket).",
      },
      {
        title: "Outcomes",
        content: "40+ active integrations on the platform. Order auto-acceptance rate 99.4%. Swiggy and Zomato integrations serve as the production template for all subsequent partners. Mean time to detect a broken integration dropped from 6+ hours (reactive) to under 20 minutes (proactive monitoring). Integration engineering team shifted from permanently backlogged to building new platform capabilities. The canonical event model became the internal lingua franca — other Petpooja platform teams adopted it for cross-service communication.",
      },
      {
        title: "Lessons Learned",
        content: "The hardest part wasn't technical — it was the semantic alignment on the canonical event model. What does 'order.placed' mean across Swiggy's model, Zomato's model, and three regional aggregators? Each partner used the same words to mean different things. I underestimated the time required to reach semantic consensus before building. We resolved 14 ambiguous event definitions in the first month post-launch — each one required renegotiating an adapter assumption. I now treat semantic alignment as a first-class deliverable, not a precondition that's handled before the project starts.",
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
    sections: [
      {
        title: "Executive Summary",
        content: "GST compliance for Indian restaurants is genuinely complex: multiple tax slabs, HSN code requirements, composite scheme eligibility, reverse charge applicability, and monthly GSTR filing obligations. Before this product, compliance was a post-hoc manual process — restaurants gathered transaction data, mapped it to tax categories, and filed reports, with errors at every step. I embedded compliance into the POS and catalog workflow so that every transaction captured the right tax data automatically, and GSTR reports generated from that data without manual intervention.",
      },
      {
        title: "Business Problem",
        content: "Restaurant owners in India face GST compliance requirements across multiple tax slabs (5%, 12%, 18%) depending on restaurant type, turnover, and item category. Correct compliance required HSN codes on every item, correct slab assignment, composite scheme handling for eligible restaurants, and monthly GSTR-1 and GSTR-3B filings. Most restaurants were doing this manually: compiling transaction data from their POS, mapping items to tax categories in a spreadsheet, and handing it to their accountant. Errors were common, penalties were real, and the process was eating 8–10 hours of owner time per month.",
        bullets: [
          "Restaurant owners spending 8–10 hours monthly on manual GST reconciliation and filing preparation",
          "HSN code misassignment was the most common error — wrong codes applied to items due to lack of a systematic mapping tool",
          "Composite scheme restaurants (turnover < ₹1.5 Cr) frequently applying the wrong tax rates",
          "GSTR-2A mismatches causing reconciliation issues and audit exposure",
          "No automated audit trail from transaction to GSTR return — manual compilation broke the chain",
        ],
      },
      {
        title: "Market Context",
        content: "The Indian government's GST implementation for restaurants went through multiple amendments between 2017 and 2021 — changing slab assignments, clarifying composite scheme rules, and introducing new reporting requirements. Restaurant owners were navigating a moving regulatory target without dedicated tax support. Petpooja serving 60,000+ outlets was in a position to solve this at scale: one well-designed compliance system benefiting every merchant on the platform, rather than each restaurant independently navigating the same complexity.",
      },
      {
        title: "Product Vision",
        content: "GST compliance should be a byproduct of normal business operations, not a separate workflow. When a restaurant bills correctly during service, the data required for GST compliance should already be captured, correctly categorised, and ready to aggregate. Filing should require a review and a click — not a multi-day reconciliation exercise. For a restaurant owner, the question 'am I GST compliant?' should have a visible, real-time answer.",
      },
      {
        title: "Product Strategy",
        content: "Compliance embedded at the point of data creation, not at the end of the period. Three components: a catalog-level HSN assignment and tax rule engine (items are tagged correctly before they're ever billed), a transaction capture layer that records the right tax data on every sale, and a reporting layer that aggregates to GSTR-ready formats from clean transaction data.",
        bullets: [
          "HSN library: curated mapping of common restaurant items to HSN codes, covering 95%+ of typical menus",
          "Tax rule engine: configurable slabs, exemptions, composite scheme support, and restaurant-type-specific defaults",
          "Transaction capture: every bill records item-level tax data at point of sale — not reconstructed after the fact",
          "GSTR report generation: GSTR-1 and GSTR-3B aggregated directly from transaction records — no manual compilation",
          "Audit trail: every tax line traceable from GSTR entry back to the original bill and item",
        ],
      },
      {
        title: "User Personas",
        content: "The Restaurant Owner is the primary beneficiary — she wants GST to be handled correctly without requiring her to understand HSN codes or composite scheme rules. She needs to know that her POS is compliant and that filing preparation takes minutes, not days. The Accountant is the secondary persona — he works with multiple restaurant clients and needs clean, categorised transaction data that maps directly to GSTR line items without manual interpretation. The Petpooja Tax Specialist (internal) maintained the HSN library and tax rule updates as regulations changed — needs tooling to push updates to all merchants simultaneously.",
      },
      {
        title: "Stakeholder Management",
        content: "The regulatory context made stakeholder management unusually important. I engaged two GST practitioners as external advisors during the design phase — their practical knowledge of how tax authorities interpret composite scheme rules and GSTR-2A matching requirements shaped the data model in ways no internal team member could have. Internal legal reviewed the product design to confirm we were not offering tax advice — we position the tool as a data organisation aid, not a compliance guarantee. This distinction matters for liability and for setting correct merchant expectations. Finance and sales teams wanted to include GST filing as a paid premium feature — I argued successfully that it should be included in the base platform, as compliance capability was a prerequisite for merchant trust at scale.",
      },
      {
        title: "Technical Architecture",
        content: "HSN library maintained as a curated, versioned dataset — updated by internal tax specialists when regulations change, pushed to all merchants on next sync. Tax rule engine: configurable by restaurant type (regular, composite, air-conditioned, non-AC), turnover bracket, and item category. Rules resolve hierarchically: platform default → restaurant-type override → item-level override. Transaction capture: every POS bill records item-level tax data (HSN, slab, tax amount) at the moment of billing — immutable record. GSTR aggregation: query engine over transaction records producing GSTR-1 (outward supplies) and GSTR-3B (summary return) in the prescribed format.",
        bullets: [
          "Versioned HSN library updated centrally and pushed to all outlets — merchants don't manage their own HSN mapping",
          "Tax rule engine resolves composite scheme applicability automatically based on restaurant-type configuration",
          "Immutable billing records with full tax data — no post-hoc reconstruction required for GSTR",
          "GSTR reports generated in return-ready format with item-level drill-down for audit trail",
          "Discrepancy detection: system flags GSTR-2A mismatches before filing, not after",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Curated HSN library vs merchant-managed mapping: I chose curated. Merchant-managed HSN was the obvious MVP, but 10,000 restaurants each maintaining their own mappings would have produced 10,000 different answers to the same question. A curated library with expert review produced consistent, auditable mappings at the cost of maintaining the library internally. Tax rules enforced at catalog level vs billing level: both. Catalog-level tax assignment is the default; billing-level allows overrides for edge cases (like a composite dish that spans categories). Compliance reporting included in base vs premium: base — compliance is a prerequisite for merchant trust, not a differentiator.",
      },
      {
        title: "Execution Approach",
        content: "Spent six weeks with a GST practitioner building the HSN library before any product code — it took longer than expected because restaurant items frequently sit in ambiguous HSN categories (is a 'chicken wrap' 2106 or 2109?). Ambiguous cases were resolved with a documented decision log rather than a best-guess, so the reasoning was auditable. Beta tested with 50 restaurants across regular, composite, and air-conditioned categories before broad rollout — the composite scheme edge cases in the beta surfaced three rule engine bugs that would have caused systematic filing errors at scale.",
      },
      {
        title: "Metrics & Measurement",
        content: "Primary: compliance error rate (errors per 100 GSTR filings compared to baseline), HSN assignment accuracy (audited against practitioner review for a sample of restaurants monthly), merchant time on compliance preparation. Secondary: GSTR report generation time, GSTR-2A mismatch detection rate, merchant support tickets about GST.",
      },
      {
        title: "Outcomes",
        content: "Compliance error rate reduced 67% across 10,000+ merchants. HSN assignment accuracy above 95% on monthly audits. Merchant time on GST preparation dropped from 8–10 hours monthly to approximately 45 minutes (review + file). GSTR-2A mismatch detection before filing, rather than discovering mismatches from tax notices. The audit trail from GSTR line item to original bill became a feature that accountants recommended the platform to clients — it made tax authority queries answerable in minutes rather than days.",
      },
      {
        title: "Lessons Learned",
        content: "I underestimated how often restaurant item categorisation is genuinely ambiguous under GST rules — not wrong, but interpretable in multiple valid ways. The HSN library needed a mechanism for merchants to flag ambiguous items and see the reasoning behind our categorisation, not just the result. Without that, merchant trust was lower than it should have been because they couldn't verify our mapping against their accountant's judgement. I added a 'how we classified this' explanation for every item in a post-launch iteration. It meaningfully increased adoption in the accountant-managed restaurant segment.",
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
        content: "The online ordering problem in restaurant technology is not the customer-facing ordering interface — it's what happens after the customer places the order. Before this platform, online orders from every channel required a staff member to read a separate tablet screen and re-enter the order into the POS. This step introduced errors, delays, and the possibility of a missed order during peak hours. I built the ecosystem to make that step disappear: orders placed anywhere flow directly into the POS and kitchen automatically.",
      },
      {
        title: "Business Problem",
        content: "Restaurants receiving online orders were operating a manual routing system: a staff member watched a tablet showing Swiggy orders, another watched a Zomato tablet, and a third watched the web ordering screen. Each order had to be manually read and re-entered into the POS for kitchen processing. During a busy dinner shift, this was a two-person overhead that created errors, delays, and the persistent risk of a missed order. When the menu changed — an item went out of stock — the aggregator tablets didn't update immediately, meaning orders were accepted for items that couldn't be fulfilled.",
        bullets: [
          "Manual order re-entry from aggregator tablets to POS — a dedicated staff position during peak hours at mid-volume restaurants",
          "Order defect rate from manual re-entry estimated at 8–12% (wrong quantity, wrong modifier, missed special instruction)",
          "Menu availability inconsistency: items marked out of stock in POS remained available on aggregator channels for 30–120 minutes",
          "No unified view of online order volume, defect rate, or acceptance latency across channels",
          "Aggregator SLA penalties for order acceptance latency exceeding 3 minutes",
        ],
      },
      {
        title: "Market Context",
        content: "Online ordering share of restaurant revenue in India grew from approximately 15% in 2019 to over 35% in 2022 across Petpooja's merchant base. Aggregators were simultaneously raising their SLA expectations — penalising restaurants for slow acceptance, high defect rates, and frequent cancellations. Restaurants that couldn't manage their online channel reliably were seeing their aggregator ratings decline, which directly reduced order volume. The online ordering infrastructure was no longer a nice-to-have — it was operationally critical for restaurants with meaningful delivery revenue.",
      },
      {
        title: "Product Vision",
        content: "Zero-touch order acceptance: an order placed by a customer anywhere — Swiggy, Zomato, the restaurant's own website, or a QR code at the table — should appear in the POS and kitchen display within seconds, correctly formatted, without any human in the acceptance loop. The kitchen staff should not need to know or care where the order came from. The restaurant owner should see all channels unified in one operational view.",
      },
      {
        title: "Product Strategy",
        content: "Build the order ingestion and routing layer before the ordering interface. The customer-facing ordering UI is the visible part, but the value delivery is in the backend: reliable order receipt from all channels, intelligent routing to the right kitchen station, and real-time menu availability sync back to all channels. The ordering UI built on top of a reliable ingestion and routing layer is a straightforward product. Without the backend, it's a different tablet in the same manual workflow.",
        bullets: [
          "Order ingestion: event-driven receipt from all channels — each channel adapter handles format translation, the core processes canonical order events",
          "POS and KOT integration: orders injected into POS identically regardless of source — kitchen staff have one system, not multiple screens",
          "Availability sync: POS stock changes propagate back to all ordering channels in under 5 minutes",
          "Unified operations view: all online orders visible in one interface alongside in-restaurant orders",
          "Defect tracking: per-channel defect rate, cancellation rate, and acceptance latency measured and visible to operators",
        ],
      },
      {
        title: "User Personas",
        content: "The Kitchen Staff persona was central — they cannot have separate workflows for in-restaurant and online orders. Everything must arrive on the same KOT screen in the same format. Adding a 'source' field was sufficient; adding a different screen was not an option. The Restaurant Manager cares about the unified channel view: what's the online order volume, which channel has the highest defect rate, and what's the current acceptance lag. The Restaurant Owner cares about aggregator SLA compliance — his ratings and commission rates depend on it. The Aggregator Integration Engineer needed reliable webhook delivery for menu updates and order confirmations with consistent response times.",
      },
      {
        title: "Stakeholder Management",
        content: "Aggregators were both partners and stakeholders with their own product requirements. Swiggy required specific order confirmation response formats and imposed SLA timelines I had to design the acceptance flow around. Zomato required menu sync in their proprietary format, with field names that conflicted with our canonical model. I maintained direct relationships with technical partners at both platforms — useful for negotiating API changes and getting advance notice of deprecations. Internal sales teams wanted to offer the ordering UI as a standalone product for restaurants without aggregator integration — I designed the architecture to support both, but insisted on the integrated backend as the non-negotiable core.",
      },
      {
        title: "Technical Architecture",
        content: "Order ingestion: channel adapters for each source translate incoming orders to canonical order format before any processing. A Swiggy order and a web order are identical objects by the time they reach the routing layer. Order routing: maps canonical order to POS order model, assigns kitchen stations based on item categories, creates KOT entries. Availability sync: POS availability changes trigger an event that propagates to all channel adapters, each translating to the partner's expected format. Reconciliation: online order totals reconciled against POS settlement records nightly, with discrepancy alerts.",
        bullets: [
          "Channel adapters: Swiggy, Zomato, web ordering, app ordering, QR — each translates to canonical format independently",
          "Idempotent order ingestion: duplicate deliveries from partner retries handled without creating duplicate orders",
          "Kitchen routing: items in the same order split to correct stations (hot, cold, dessert) based on catalog-level station assignment",
          "Availability sync <5 min: POS out-of-stock events pushed to all channels via adapter, confirmed per channel",
          "Auto-reconciliation: online order settlements matched to POS records nightly — 91% auto-matched, 9% flagged for review",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Unified POS injection vs separate online order management: I chose unified injection — all orders, regardless of channel, flow into the POS through the same path. A separate 'online orders' workflow would have meant two systems for kitchen staff to monitor. Menu sync frequency: near-real-time for availability changes (out-of-stock), batch for catalog changes (new items, price changes). The availability case is time-critical (accepting an order for an out-of-stock item causes a cancellation); catalog changes can tolerate a 30-minute sync window.",
      },
      {
        title: "Execution Approach",
        content: "Built and tested the order ingestion and POS injection layer in a closed pilot with 20 restaurants before touching the ordering UI. The pilot surfaced the kitchen routing problem — multi-station kitchens needed item-level station assignment, not order-level. That discovery added three weeks but prevented a systematic kitchen workflow problem at launch. The ordering UI was the last component built — by then, the infrastructure was proven and the UI work was straightforward.",
      },
      {
        title: "Metrics & Measurement",
        content: "Order defect rate per channel (wrong item, wrong quantity, missed modifier — measured against POS record vs actual delivery), order acceptance latency (time from order placed to POS KOT created), menu availability sync latency, auto-acceptance rate, channel-to-kitchen defect rate comparison. Monthly reconciliation accuracy between online order receipts and POS settlements.",
      },
      {
        title: "Outcomes",
        content: "Order defect rate from online channels reduced 52% in the first 90 days after the automated routing launch. 99.4% of online orders now auto-accepted and routed to kitchen without staff intervention. Aggregator SLA compliance improved across all restaurant clients on the platform. The dedicated 'aggregator tablet monitor' role disappeared at mid-volume restaurants — that staff member moved to floor or prep. Auto-reconciliation matching 91% of online settlements to POS records without intervention.",
      },
      {
        title: "Lessons Learned",
        content: "The kitchen routing problem was a blind spot because I designed the system based on the most common restaurant format — single-station kitchens where all orders go to one printer. The multi-station routing issue only surfaced during pilot testing with a mid-size restaurant group. The lesson: design validation needs to include non-modal users, not just the median. Restaurant operations have enormous variety, and edge cases that seem rare in aggregate are common at specific restaurant types. I now explicitly include format diversity (QSR, fine dining, cloud kitchen, multi-cuisine) in every design review for operational software.",
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
    sections: [
      {
        title: "Executive Summary",
        content: "Dine-in technology is often implemented as a novelty or a post-COVID hygiene measure. I designed it to solve a specific operational constraint: during peak lunch and dinner hours, table ordering and payment were on the critical path of table turn, requiring staff time that was often unavailable. I built the QR menu and pay-at-table platform to move those steps off the critical path — not to replace staff, but to remove the operational ceiling they created.",
      },
      {
        title: "Business Problem",
        content: "At peak service hours, the two most staff-intensive moments in a table's lifecycle were order-taking (captain visiting the table, taking the order verbally or manually, walking it to the POS) and bill settlement (captain generating the bill, guest waiting for the physical bill, payment processing). Both steps required a free staff member at exactly the moments when no staff member was free. The result: tables sat at the 'waiting to order' and 'waiting for the bill' stages for 8–12 minutes combined — time that added directly to table turn duration.",
        bullets: [
          "Order-taking requiring captain availability at a moment that can't be scheduled — causing average 5–8 minute wait at table",
          "Bill request to settlement averaging 7–12 minutes: generating bill, delivering it physically, waiting for payment intent, processing payment",
          "Staff attention split between new arrivals, ongoing service, and checkout — peak hour staff are the bottleneck",
          "Digital menu not connected to real-time POS availability — showing items that were out of stock created order failures",
          "No self-serve payment option — every table required staff for checkout regardless of guest's readiness to pay",
        ],
      },
      {
        title: "Market Context",
        content: "Post-2020, customer familiarity with QR codes increased significantly across India. Contactless ordering was no longer novel — it was expected at mid-market and above restaurants. At the same time, restaurant labour costs were rising and staffing full service teams was becoming harder for mid-volume operators. Technology that could improve service capacity per staff member was economically valuable in a way it hadn't been three years earlier.",
      },
      {
        title: "Product Vision",
        content: "The guest should be in control of the moments in a meal that benefit from control — browsing the menu, placing an order when ready, paying when done. Staff should be freed for the moments that require hospitality — recommendations, handling special requests, managing the ambience of the dining room. The technology should be invisible: it should feel like a faster, more responsive version of traditional service, not a self-checkout kiosk.",
      },
      {
        title: "Product Strategy",
        content: "Three components, sequenced from lowest friction to highest. QR menu first: passive, no account required, real-time availability — gives guests accurate menu access immediately. Table-side ordering second: guests can place orders directly from the QR menu — orders flow into POS and KOT identically to captain-placed orders. Pay-at-table third: guests can initiate and complete payment from the table — UPI, card, or split payment — without waiting for a physical bill.",
        bullets: [
          "QR menu: real-time availability from POS, photos and descriptions, dietary filters, no app download or login required",
          "Table-side ordering: orders from QR placed directly into POS order model — kitchen sees them identically to counter orders",
          "Pay-at-table: guest-initiated payment with UPI, card, or split — bill generated from POS, payment confirmation to POS",
          "Staff-override capability: captain can add to any QR-initiated order from the POS — table-side and staff flows are additive, not separate",
          "Feedback collection at payment: optional post-meal rating captured at the highest-intent moment",
        ],
      },
      {
        title: "User Personas",
        content: "The Guest (dine-in customer) wants to see the menu accurately — correct prices, correct availability, photos — and have the option to order and pay on their timeline. They do not want to create an account or download an app to see the menu. The Captain (floor staff) needs to know which tables have QR orders in-flight, be able to add to or modify those orders, and not have a new system for 'digital orders' separate from the POS they already use. The Restaurant Manager cares about table turn time, average cover value, and whether the QR platform is capturing data she can act on. The Restaurant Owner wants to see the business impact in aggregatable metrics.",
      },
      {
        title: "Stakeholder Management",
        content: "The biggest internal stakeholder tension was with restaurant operators who were concerned that QR ordering would undermine hospitality and make their restaurants feel transactional. I addressed this directly: QR ordering is opt-in, captain ordering never goes away, and the product positions itself as 'order when you're ready' rather than 'order without staff.' The design intentionally preserved the captain's role in the ordering flow — they can always override, add to, or replace a QR order from the POS. Operators who saw the pilot results (19% table turn improvement) without a degradation in review scores became the most effective internal advocates for expanding the rollout.",
      },
      {
        title: "Technical Architecture",
        content: "QR menu rendering: dynamic, cached with real-time availability overlay from POS — menu structure loads from catalog CDN, availability overlay loads from POS in real time. Table-side order injection: orders from QR menu go into the same POS order model as captain-placed orders — the kitchen sees a KOT, not a 'QR order'. Pay-at-table: payment initiation creates a session linked to the POS table/bill record; payment confirmation updates POS settlement state. No separate system for digital orders — the architecture treats QR as another input method to the existing POS model.",
        bullets: [
          "QR menu served from CDN with real-time availability overlay — no stale menu items, no separate availability database",
          "Zero friction access: QR scan → live menu in <2 seconds, no login, no app install",
          "Orders injected into POS order model identically to captain entry — single kitchen workflow regardless of order origin",
          "Pay-at-table session bound to POS bill record — payment state change is atomic with POS settlement record update",
          "Split payment support: guests can split a bill by item or amount from the QR interface",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "App vs no-app: no app, no account. Every friction point in the QR access flow reduces adoption. A QR that requires an app download loses 40–60% of potential users before they see the menu. Real-time availability vs cached menu: real-time, with CDN for the catalog. Showing a menu with accurate availability requires the POS availability layer to be queryable in real time — the engineering cost was worth the product quality improvement. Staff override always available: QR ordering is additive to the captain workflow, never a replacement for it. The captain can always intervene, add, or override.",
      },
      {
        title: "Execution Approach",
        content: "Piloted with 15 restaurants across QSR, casual dining, and fine dining formats. Fine dining adoption was lower than expected — the operators were more resistant to QR ordering on hospitality grounds. We designed a 'recommendation mode' specifically for fine dining: QR menu browsing and viewing specials, but ordering still initiated through the captain. This distinction increased adoption in the fine dining segment significantly, because it addressed their actual concern (impersonal ordering) without removing the functionality that did add value (accurate menu browsing).",
      },
      {
        title: "Metrics & Measurement",
        content: "Table turn time (minutes from seating to table reset), staff order-taking time (minutes per table spend with captain taking/entering order), pay-at-table adoption rate, average time from bill request to settlement, session volume (QR menu scans per month), order-to-kitchen time via QR vs captain-placed comparison, and customer review scores over the pilot period.",
      },
      {
        title: "Outcomes",
        content: "Table turn time improved 19% at pilot outlets — the direct result of moving order-taking and payment off the critical path. Staff order-taking time reduced approximately 60% at outlets with high QR adoption — captains spend less time at the POS entering orders and more time on floor service. 2M+ monthly sessions across the platform. Pay-at-table adopted for 68% of dine-in bills at fully-deployed outlets. Customer review scores unchanged or slightly improved — hospitality quality was not affected by the technology.",
      },
      {
        title: "Lessons Learned",
        content: "I initially designed a single QR ordering experience for all restaurant formats. The pilot showed that fine dining operators had legitimate concerns about QR ordering that couldn't be resolved by reassurance — they needed a product variation that preserved their service model. The lesson: in hospitality technology, operator concerns about the guest experience are often right, and dismissing them as resistance to change is a mistake. I should have done deeper format-specific research before designing a single-format product. The 'recommendation mode' we built retroactively for fine dining should have been a design option from the start.",
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
        content: "Merchant finance anxiety in restaurants is almost never about total amounts — it's about not knowing when money will arrive, why a settlement was short, or which transactions didn't reconcile. I built the finance platform as a trust product across two layers: payment acceptance reliability (UPI, QR, EDC) and financial visibility (settlement, reconciliation, payout tracking). Reliability first so the right data exists; visibility second so merchants can act on it.",
      },
      {
        title: "Business Problem",
        content: "Restaurant owners faced a fragmented financial picture: payment acceptance on EDC terminals with opaque settlement timelines, UPI payments with variable success rates and no clear failure attribution, QR codes that worked inconsistently across payer apps, and monthly settlements from multiple payment service providers that didn't reconcile against POS totals without manual work. The result was a persistent 'where is my money' anxiety that drove 41% of support tickets — a disproportionate operational burden on both merchants and the support team.",
        bullets: [
          "UPI success rate at baseline: 93.1% — 7 in 100 payment attempts failing, mostly due to bank-side timeouts and network routing",
          "EDC terminals going offline during service, often without staff awareness until a payment attempt failed",
          "Monthly settlements from payment processors not matching POS transaction totals — manual reconciliation required",
          "No visibility into settlement timeline — merchants didn't know when funds would arrive or why a payout was less than expected",
          "Support tickets about 'missing money' were the highest volume category in merchant support",
        ],
      },
      {
        title: "Market Context",
        content: "UPI became the dominant payment method in Indian restaurants between 2020 and 2022, growing from roughly 15% of payments to over 50% at many outlets. This growth made UPI reliability an operational dependency — a 7% failure rate that was acceptable when UPI was a secondary method became a meaningful service issue when it was the primary one. Simultaneously, the RBI's guidelines on merchant settlement timelines created regulatory expectations that merchants were holding payment processors and platforms accountable to.",
      },
      {
        title: "Product Vision",
        content: "Every rupee a restaurant earns should be traceable from the moment the payment is made to the moment it lands in the bank account. Settlement should be predictable, reconciliation should be automatic, and the answer to 'why was my payout short?' should be available in the platform without a support call. Payment acceptance should be reliable enough that it's never the reason a transaction fails.",
      },
      {
        title: "Product Strategy",
        content: "Two parallel tracks: payment reliability and financial visibility. Payment reliability required engineering work on routing, retry logic, and terminal monitoring. Financial visibility required data architecture work — building the reconciliation layer and making it queryable from a merchant-facing interface.",
        bullets: [
          "Payment reliability: health-aware UPI routing, EDC terminal monitoring, retry logic with provider failover",
          "Settlement transparency: settlement engine with full fee/deduction audit trail, daily settlement status notification",
          "Reconciliation: automated matching of POS transaction records to bank/PSP settlement records",
          "Payout visibility dashboard: real-time settlement status, pending amounts, deductions explained, exception alerts",
          "Banking services layer: current account integration, merchant cash advance based on settlement history",
        ],
      },
      {
        title: "User Personas",
        content: "The Restaurant Owner (primary) wants to know that payments work reliably and that she doesn't have to call support to understand why her payout was short. She checks the payout dashboard on her phone, not a desktop — the mobile experience is primary. The Accountant reviews settlement reconciliation monthly — needs a clean export of settlement records that maps to the chart of accounts without manual transformation. The Cashier needs the payment terminal to work on the first tap, every time, with clear error feedback when it doesn't — not a cryptic error code that requires a call to support.",
      },
      {
        title: "Stakeholder Management",
        content: "Payment infrastructure required deep coordination with payment service providers (PSPs) — negotiating API access for real-time settlement status, and working within their rate limits and compliance requirements. PSPs were initially resistant to sharing settlement status data in real-time, preferring end-of-day batch reporting. I made the case using merchant support ticket volume data: the 'missing settlement' ticket category was damaging merchant trust in Petpooja, not the PSP, even when the root cause was PSP timing. That framing shifted the conversation. Internally, the banking services component required legal and compliance review for every product feature — I built a review process into the product development cycle rather than treating it as a gate at the end.",
      },
      {
        title: "Technical Architecture",
        content: "UPI routing layer: health-aware routing across payment providers, with real-time success rate monitoring per provider and automatic traffic shift to healthier routes. Retry logic with provider-specific timeout parameters — UPI failures are 70% bank-side timeouts, not terminal-side errors, and retry timing matters. EDC monitoring: heartbeat signal from each terminal to a fleet management service — terminals that go silent trigger alerts before they cause a failed payment attempt. Reconciliation engine: matches POS transaction records to PSP settlement records using transaction ID, amount, and timestamp — auto-matches 94%, surfaces exceptions for manual review.",
        bullets: [
          "Health-aware UPI routing: success rate per PSP monitored in real time, traffic shifted automatically on degradation",
          "EDC terminal heartbeat monitoring: proactive detection of offline terminals, alert to ops before payment failure occurs",
          "Reconciliation engine: three-way match (POS record, PSP record, bank record) — 94% auto-matched, 6% flagged with specific discrepancy reason",
          "Settlement audit trail: every deduction (MDR, GST on MDR, chargeback, refund) visible with calculation basis",
          "Payout prediction: expected settlement date and amount calculated from transaction records, updated daily",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Health-aware routing vs simple load balancing: chosen because simple load balancing distributed volume evenly across routes regardless of their current reliability. During a PSP degradation, 20% of transactions were failing unnecessarily because traffic continued flowing to a degraded route. Health-aware routing learned and shifted within minutes. Reconciliation auto-match threshold: I set the auto-match threshold at exact amount match (not within tolerance) after discovering that tolerances masked real discrepancies — a ₹2 discrepancy is sometimes an error and sometimes a rounding difference, and auto-matching either way hid the ones that mattered.",
      },
      {
        title: "Execution Approach",
        content: "Started with reconciliation, not payment reliability, because the reconciliation problem was creating the highest merchant support volume and was entirely solvable without PSP partnership work. The reconciliation engine launched in 6 weeks and immediately reduced 'missing money' support tickets by 30%. That reduction created goodwill with merchants and with the support team — which made the subsequent payment reliability work (which required months of PSP negotiation) easier to sustain organisationally.",
      },
      {
        title: "Metrics & Measurement",
        content: "UPI success rate (successful payment / total UPI attempts), EDC terminal uptime (time terminals are responsive vs. silent), settlement support ticket volume, reconciliation auto-match rate, settlement-to-payout latency (days from transaction to funds arrival), merchant NPS on financial product segment.",
      },
      {
        title: "Outcomes",
        content: "UPI success rate from 93.1% to 97.4% — 4.3 percentage points representing approximately 40,000 fewer failed payments per month at steady state. EDC terminal offline incidents detected and resolved proactively — reactive service calls from failed payment attempts reduced significantly. Settlement support tickets reduced 41% — the largest single category reduction in merchant support. 94% of payment records auto-reconciled without manual review. Payout prediction accuracy within 1 day of actual for 89% of settlements.",
      },
      {
        title: "Lessons Learned",
        content: "The UPI routing problem taught me that payment infrastructure failures are mostly invisible until they're at scale. A 7% failure rate sounds acceptable in testing and on a small number of transactions. At 600,000 monthly UPI transactions, it's 42,000 failed payments — a number that generates an enormous amount of support volume and merchant frustration. I now build failure rate projections at operational scale into every payment product review, not just at test scale. A 'good enough' error rate in testing is often not good enough in production.",
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
        content: "The restaurant POS problem was not a feature gap — it was a data architecture problem. Billing, kitchen orders, table management, menu, and payment were four separate systems that didn't share state. Every order travelled across systems boundaries with re-keying at each crossing. I redesigned around a single shared order data model that all modules read from and write to — eliminating the manual translation steps that were the source of both the time overhead and the error rate.",
      },
      {
        title: "Business Problem",
        content: "A restaurant during service was running four disconnected systems: billing on one terminal, KOT routing to a kitchen printer, table management on a spreadsheet or whiteboard, and payment on a separate EDC terminal that didn't know the bill total. A cashier closing a table had to read the kitchen confirmation, manually calculate the bill, process payment, and reconcile the total — re-keying at three steps. Each re-key was a potential error, and errors during service cost both time and goodwill.",
        bullets: [
          "Cashier re-keying order from kitchen confirmation into billing — source of quantity and item errors",
          "Table status managed separately from order status — no single view of what's open, ordered, and billed",
          "Average checkout time 47 seconds — driven by multi-system lookups and manual calculations",
          "Billing errors at 6–8% of covers during peak hours — mostly quantity errors from re-keying",
          "No unified sales view for owners — daily reconciliation required pulling from multiple systems",
        ],
      },
      {
        title: "Market Context",
        content: "The Indian restaurant POS market in 2020 was dominated by legacy systems — standalone billing software with no integration to kitchen, no cloud connectivity, and no support for the emerging aggregator ecosystem. Restaurant chains scaling past 20 outlets found that managing a fleet of disconnected POS systems was an operational liability. The market was moving toward unified platforms, and the PM who designed the right data architecture first would define the product category.",
      },
      {
        title: "Product Vision",
        content: "One order — from the moment a guest says 'I'll have the biryani' to the moment the cash drawer closes — should live in one place. Every system that needs to act on that order (kitchen, cashier, manager, owner, finance) reads from and writes to the same record. No translation. No re-keying. No manual reconciliation at the end of the shift.",
      },
      {
        title: "Product Strategy",
        content: "Anchor the product design on the actual restaurant service sequence: order → kitchen → bill → pay → reconcile. Design the data model first so every module built on top of it is reading from and writing to the same state. Build offline-first from the start — not as a feature, but as an architectural constraint. A POS that requires network connectivity is a POS that goes down during service.",
        bullets: [
          "Single order data model shared across all modules — billing, KOT, table, payment, and reporting read the same record",
          "Offline-first local store: all operations work without network; cloud sync runs asynchronously on connectivity",
          "Module development: billing and KOT first (core service flow), then table management, then payment integration, then reporting",
          "Multi-format support from the data model level — QSR, fine dining, cloud kitchen workflows as configuration, not separate products",
          "Role-based access across cashier, captain, kitchen staff, manager, and owner — same platform, different views",
        ],
      },
      {
        title: "User Personas",
        content: "The Cashier needs to close a table in under 20 seconds and not touch a keyboard during peak hours — everything must work on a touch screen with minimum taps. She cannot read an error message during a rush; errors must be prevented by the system, not communicated after the fact. The Kitchen Staff needs to see the right items at the right station — hot items to the grill, cold items to prep — with a clear queue and an explicit confirmation step. The Restaurant Owner needs the daily summary without opening three systems: sales by category, table performance, payment method breakdown, and settled vs outstanding. The Restaurant Manager needs a view of open tables, kitchen queue status, and real-time sales — from one screen.",
      },
      {
        title: "Stakeholder Management",
        content: "The largest resistance came from restaurant operators during the migration from their existing systems. A POS migration is a high-stakes operation — done wrong, it disrupts service during the exact hours it matters most. I designed a parallel-run approach: new POS runs in shadow mode alongside the existing system for one week, with the team validating that sales totals, KOT routing, and table management behave identically. Only after passing shadow-mode validation does the restaurant switch over. This added three weeks to the rollout schedule per batch but reduced migration-related support tickets by 80% compared to a hard-cutover approach.",
      },
      {
        title: "Technical Architecture",
        content: "Shared order data model: every order state transition (placed, sent to kitchen, modified, billed, paid, settled) is written to a single order record. No module maintains its own copy of order state. Offline-first architecture: SQLite local store with a write-ahead log; every state transition written locally first, synced to cloud on connectivity. KOT routing engine: items in an order routed to stations based on catalog-level station assignment — one order can generate multiple KOTs to multiple printers or display screens. Payment integration: EDC, UPI, and QR payment sessions linked to the POS order record — payment confirmation updates order state, not a separate ledger.",
        bullets: [
          "Single order record — one source of truth for billing, kitchen, table management, and payment in the same database",
          "SQLite local store with cloud sync — full offline capability, no data loss on connectivity drops",
          "KOT routing engine: item-level station assignment from catalog, multi-station KOT generation from one order",
          "Payment integration: EDC, UPI, QR all update POS order state atomically — no separate payment reconciliation",
          "Multi-terminal sync: changes from one terminal (captain adding an item) reflected on cashier terminal in real time via local network, not cloud",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Offline-first vs online-first: offline-first, non-negotiable. Restaurant network reliability is too variable to build a mission-critical system on the assumption of connectivity. Local-first with cloud sync is more complex to build but makes the product reliable in the environment where it actually runs. Modular POS vs unified: unified at the data layer, modular at the UI layer. Each role (cashier, captain, kitchen) gets a purpose-built interface, but all interfaces read and write the same order model. Building separate data stores per module would have reproduced the exact problem I was solving.",
      },
      {
        title: "Execution Approach",
        content: "Spent three weeks across seven restaurant formats before writing the spec — QSR, fine dining, cloud kitchen, bar, bakery, multi-cuisine, fast casual. The most important discovery: KOT routing for multi-station kitchens was far more complex than the single-printer assumption I had started with. Fine dining kitchens route to separate grill, cold prep, pastry, and expediter stations. The spec I had written assumed a single kitchen printer. I rewrote the KOT module from scratch after the field research — added four weeks but shipped something that fit real kitchen operations.",
      },
      {
        title: "Metrics & Measurement",
        content: "Checkout time per cover (seconds from bill generation to payment confirmed), billing error rate (errors per 100 covers requiring correction), POS uptime including offline periods, KOT-to-kitchen latency (time from order submission to KOT printed/displayed), daily reconciliation time (minutes for owner to produce end-of-day summary), and adoption rate by restaurant format.",
      },
      {
        title: "Outcomes",
        content: "Checkout time reduced from 47s to 18s across 4,200 outlets — a 62% reduction driven by eliminating re-keying steps, not by UI optimisation. Billing errors down 34%. POS uptime including offline periods: 99.3%. The most-used owner feature post-launch was the real-time sales dashboard — not a billing feature, but the unified view of operations that the multi-system architecture had made impossible. The POS data model became the foundation for catalog, online ordering, dine-in, and finance products that built on top of it.",
      },
      {
        title: "Lessons Learned",
        content: "My initial KOT routing model was wrong because I based it on QSR format research — the most common format in volume, but not the most complex. Fine dining and multi-cuisine kitchens have routing requirements that QSR doesn't: item-level station routing, expediter display, coursing sequences. The discovery added four weeks to the spec phase. The lesson wasn't 'spec more carefully' — it was 'validate across the full distribution of the target market, not just the modal user.' I now run format-specific user research as a gate before finalising any operational system spec.",
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
        content: "Restaurant Android applications are not consumer apps. They run on budget EDC terminals, low-RAM tablets, and kitchen display screens — in environments with inconsistent power, grease-covered screens, and users who cannot stop working to troubleshoot. I built the Android product line with those constraints as primary design inputs: offline-first transaction handling, minimal RAM footprint, role-specific workflows with no cognitive overhead, and an OTA update channel that could push fixes to 8,500 devices without service disruption.",
      },
      {
        title: "Business Problem",
        content: "Restaurant operations were using consumer Android devices with general-purpose software for mission-critical tasks. A waiter taking a table order on a general POS app had to navigate 4–6 screens to place a single order. A kitchen display running a standard app would go blank on low RAM and not auto-recover. EDC terminals had limited RAM that caused app crashes during payment — exactly the moment when a crash was most costly. The applications were not designed for the operational environment they ran in.",
        bullets: [
          "General-purpose POS apps requiring 4–6 navigation steps per order — captains slower than pen-and-paper during peak service",
          "Kitchen display apps crashing on low RAM devices — kitchen staff losing the order queue and having to recover manually",
          "EDC terminal apps crashing during payment processing — requiring reboot and manual payment retry with customer waiting",
          "No OTA update mechanism — software fixes required physical access to each device, sometimes hundreds across a fleet",
          "Device monitoring non-existent — crashes discovered by operators, not by the platform",
        ],
      },
      {
        title: "Market Context",
        content: "The Indian restaurant technology market runs on Android hardware — not enterprise MDM-managed fleets, but consumer-grade Android devices purchased independently by restaurant owners. The device landscape included Sunmi EDC terminals, Epson receipt printers with Android heads, generic Chinese tablets at various RAM and storage tiers, and phones used as captain order-taking devices. Any application had to work reliably across this heterogeneous fleet without assuming enterprise device management.",
      },
      {
        title: "Product Vision",
        content: "A restaurant staff member should never have to think about the device they're using. The app should start instantly, work fully without network, respond on first tap under any load condition, and update itself silently in the background. The user experience should be designed for the specific role and the specific operational moment — not a general-purpose interface that the user has to adapt to their job.",
      },
      {
        title: "Product Strategy",
        content: "Role-specific applications: one app per operational role, not one app with role-based views. A cashier and a kitchen staff member have fundamentally different workflows — a unified app makes both worse. Offline-first as a non-negotiable architectural constraint. Minimal RAM footprint — target the lowest-spec device in the fleet. OTA update channel from day one — a fleet you can't update efficiently is a fleet you can't support.",
        bullets: [
          "Billing terminal app: designed for cashier workflow — fast table selection, bill generation, payment acceptance",
          "Captain (waiter) order-taking app: menu browsing and order placement optimised for tableside use with gloves or greasy hands",
          "Kitchen display system (KDS) app: order queue management, station routing, order acknowledgement — no extraneous UI",
          "Owner/manager dashboard app: real-time sales, table status, kitchen queue — read-only, optimised for quick glance on mobile",
          "OTA update channel: phased rollouts, automatic rollback on crash rate elevation, silent background install",
        ],
      },
      {
        title: "User Personas",
        content: "The Cashier uses the billing terminal app at the counter — she processes 80–120 covers during peak service and cannot have a single app crash or slow response. Her tolerance for error is near zero; the UI must prevent errors before they happen. The Captain (waiter) uses the order-taking app at the table — often with wet or greasy hands on a tablet. The UI must work with imprecise touches and must not require reading to navigate. The Kitchen Staff uses the KDS — they need to see the current order queue, acknowledge completed items, and see routing to their station. They should not need to touch the screen frequently. The Owner checks the dashboard app a few times a day from their phone — they want sales totals, table status, and kitchen queue without navigating deep.",
      },
      {
        title: "Stakeholder Management",
        content: "Hardware diversity created stakeholder complexity — different restaurant chains had different device procurement preferences, and every hardware OEM had slightly different Android implementation quirks. I maintained a device compatibility matrix and required all new hardware integrations to pass a defined test suite before certification. Ops teams responsible for device deployment pushed back on the phased rollout strategy — they wanted to push updates simultaneously across all devices. I held the line on phased rollouts after a single bad update to 400 devices early in the product's life caused a 6-hour service disruption. The phased approach catches issues in 5% of the fleet before they affect 100%.",
      },
      {
        title: "Technical Architecture",
        content: "Offline-first local SQLite store with sync on connectivity — transactions never block on network. Background sync runs when network is available; foreground operations are always local. Minimal RAM design: apps target 180MB peak RAM across all role variants to run on 1GB-RAM EDC terminals. OTA update channel: update packages versioned and staged, downloaded in background, applied on next idle restart. Crash rate telemetry per version and device model — elevated crash rate in a version triggers automatic rollback signal for that version's deployment. Fleet monitoring dashboard: device heartbeat, app version, crash rate, and last-sync time per device.",
        bullets: [
          "SQLite-first transaction model — all POS operations local, zero dependency on network for core functionality",
          "Sub-180MB RAM ceiling across all role apps — verified on lowest-spec target device before each release",
          "OTA channel: versioned packages, phased rollout (5% → 20% → 100%), automatic rollback on crash rate threshold",
          "Device heartbeat monitoring: silent devices (potential offline terminal) flagged in fleet management before ops team discovers via failed payment",
          "Platform-specific rendering: touch target sizing and font scales validated on each supported device model",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Role-specific apps vs unified app with role views: role-specific apps. A unified app with role views is simpler to maintain but produces a worse experience for every role — each sees a bloated interface designed for everyone and optimised for no one. The maintenance overhead of separate apps is real, but the UX quality gain justifies it at our scale. Phased OTA rollouts vs simultaneous: phased, non-negotiable after the 400-device incident. The ability to catch a bad update in 5% of devices and roll it back is worth the deployment complexity every time.",
      },
      {
        title: "Execution Approach",
        content: "Built the billing terminal app first and deployed it to 50 restaurants as an extended beta before building any other role apps. The billing terminal is the highest-stakes application — it's on the critical path of payment. Getting it right first, with real-world validation, ensured the architecture decisions (offline-first, RAM ceiling, OTA channel) were validated before building on them for the other roles. The captain order-taking app design went through five interaction prototypes on actual Android tablets before code — navigating a menu quickly with one hand while holding a notepad required more iteration than the billing UI.",
      },
      {
        title: "Metrics & Measurement",
        content: "Crash-free session rate per app per device model, RAM peak usage per app (monitored via telemetry against the ceiling), OTA update coverage (% of fleet on latest stable version within 48 hours of rollout), order entry time per table (captain app), transaction processing time per bill (billing app), device heartbeat coverage (% of fleet reporting status), offline operation rate (% of transactions completed without network).",
      },
      {
        title: "Outcomes",
        content: "99.1% crash-free session rate across 8,500+ active devices — achieved through RAM ceiling discipline, device-specific testing, and phased rollout preventing bad builds reaching the full fleet. OTA update coverage: 95% of fleet on latest stable version within 48 hours of rollout. Zero offline transaction losses across all devices. Captain order-taking time reduced approximately 40% vs the previous general-purpose app. The device monitoring dashboard surface — which I built as an internal ops tool — became a product feature requested by large restaurant groups who wanted fleet visibility for their own device estates.",
      },
      {
        title: "Lessons Learned",
        content: "I underestimated how much Android hardware diversity matters in practice. The application ran correctly on the primary test device and then exhibited edge case failures on 3 of 12 hardware variants in the fleet — touch event handling differences, font rendering issues on specific screen densities, and one camera integration that only broke on a specific Sunmi firmware version. I should have built the hardware compatibility test suite before launch, not after the first fleet-wide incident revealed it. Now, device compatibility is a P0 requirement tested on every device model in the target fleet before any release.",
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
    sections: [
      {
        title: "Executive Summary",
        content: "Petpooja's platform had grown as a monolith — changes to the billing module required re-testing the catalog, a payment processing failure brought down order acceptance, and every new product capability required coordinating multiple teams to avoid breaking existing functionality. I defined the domain service decomposition that separated the platform into six independently deployable services with explicit API contracts, an event-driven backbone for cross-domain communication, and idempotent financial paths that are correct under retries and partial failures.",
      },
      {
        title: "Business Problem",
        content: "The monolith's failure modes were becoming a business risk. A degraded payment processing service could cascade into POS unavailability — which meant restaurants couldn't bill customers during service. A catalog deployment that introduced a schema change required coordinating with the ordering team, the POS team, and the integration team before it could go out. The result was that deployments were batched, infrequent, and high-risk. When something broke, the diagnostic challenge of identifying which component in the monolith was responsible added hours to incident resolution.",
        bullets: [
          "Cascading failures: payment service degradation causing POS unavailability — unrelated systems affecting each other",
          "Deployment coordination required across 3–4 teams for any schema change — shipping features took weeks longer than development",
          "Incident resolution time high: single codebase made isolating failure points slow, often requiring full service restart",
          "Testing overhead: any change required regression testing across the entire platform to verify no cross-module breakage",
          "New product onboarding slow: new teams had to learn the full monolith context before building new capabilities",
        ],
      },
      {
        title: "Market Context",
        content: "Petpooja was growing in both outlet count and product surface simultaneously — adding the integration platform, online ordering, and dine-in technology to an already-loaded POS and catalog codebase. The organisational context was also changing: product and engineering teams were expanding and being structured around product areas, not a single codebase. The architecture needed to match the team topology — Conway's Law made the monolith increasingly difficult to maintain as the organisation specialised.",
      },
      {
        title: "Product Vision",
        content: "The platform should behave like a set of independent products with well-defined integration contracts. A POS release should not require a catalog deployment. A payment processing incident should not affect order acceptance. New product teams should be able to build on the platform without understanding the entire existing codebase. The platform itself should be treated as a product — with internal teams as users, and reliability, documentation, and API quality as product requirements.",
      },
      {
        title: "Product Strategy",
        content: "Domain boundary definition first — the hardest and most consequential decision. Service decomposition without clear domain boundaries produces microservices that are worse than a monolith: distributed, difficult to debug, and still coupled. Defined the six domains based on data ownership and business capability, then designed the event-driven communication layer, then built the financial idempotency guarantees before moving any production traffic.",
        bullets: [
          "Domain definition: POS, Catalog, Ordering, Merchant, Finance, Devices — each owns its data, each has explicit API contracts",
          "Event-driven backbone: cross-domain communication through events (not synchronous calls) where eventual consistency is acceptable",
          "Synchronous APIs: used only where immediate consistency is required (payment confirmation, order acceptance)",
          "Financial idempotency: all financial operations idempotent and auditable — correct under retries, duplicate delivery, and partial failures",
          "Internal developer experience: platform services treated as products — documentation, versioning, migration guides",
        ],
      },
      {
        title: "User Personas",
        content: "The primary persona for platform architecture is the internal product and engineering team. The POS Engineering Team needs a Catalog API that is stable, versioned, and doesn't break when the Catalog team ships a new feature. The Finance Engineering Team needs a payment event model that is immutable and auditable — they're building settlement logic on top of it and cannot tolerate schema drift. The New Product Team (integration platform, ordering) needs to be able to build on the platform without being blocked by teams maintaining existing services. The On-Call Engineer needs to isolate a production incident to a specific service within minutes, not diagnose a monolithic failure across a shared codebase.",
      },
      {
        title: "Stakeholder Management",
        content: "The service decomposition required buy-in from every engineering lead whose team would own one of the new domains. The largest friction was around data ownership — every team wanted read access to adjacent domains' data, which would have reproduced the coupling of the monolith in a distributed form. I held a strict rule: a service does not query another service's database directly. Cross-domain data access goes through the owning service's API or through events. This was uncomfortable for teams accustomed to direct SQL joins across tables, but the boundary discipline was what made independent deployability achievable. The trade-off (some queries became more complex) was documented and accepted as the cost of the reliability gain.",
      },
      {
        title: "Technical Architecture",
        content: "Six domain services: POS (order lifecycle, table management, billing), Catalog (item hierarchy, pricing, availability), Ordering (channel ingestion, order routing), Merchant (profiles, configuration, access control), Finance (settlement, reconciliation, reporting), Devices (terminal management, app fleet, heartbeat). Event backbone: Kafka for cross-domain events — menu.changed, order.placed, payment.confirmed — with consumer groups per subscribing service. Synchronous APIs: REST with semantic versioning for APIs consumed by external partners; internal service-to-service APIs use gRPC. Financial idempotency: every financial event has an idempotency key; duplicate processing is detected and rejected at the finance service boundary.",
        bullets: [
          "Six independently deployable domains, each owning its data and API contracts",
          "Event backbone for eventual-consistency communication — services publish events they produce, subscribe to events they consume",
          "Synchronous APIs only for consistency-critical paths: payment confirmation, order acceptance, availability updates",
          "Financial idempotency: all payment and settlement events carry idempotency keys — duplicate processing rejected, not retried",
          "Circuit breakers on synchronous service calls — degraded dependency triggers fallback, not cascading failure",
        ],
      },
      {
        title: "Key Product Decisions",
        content: "Six domains vs finer granularity: I chose six. More granular decomposition (e.g., separating KOT from billing within POS) would have been premature — the right boundary is where the data ownership is clear and the team boundary matches. Too-fine decomposition creates distributed monolith problems: services so tightly coupled they can't deploy independently. Event-driven vs synchronous for cross-domain: event-driven as the default, synchronous only where immediate consistency is required. The discipline of defaulting to events forces explicit thinking about which operations truly require synchronous consistency — and that set is smaller than it initially appears.",
      },
      {
        title: "Execution Approach",
        content: "Strangler fig pattern: new capabilities built as domain services from day one; existing monolith functionality migrated incrementally, starting with Finance (highest isolation value, clearest data boundary). The Finance domain was migrated first because its failure modes were the most visible (settlement errors) and its data ownership was the clearest (no other domain should be writing to financial records). Each domain migration ran in shadow mode — new service processing events in parallel with the monolith for 2–4 weeks before traffic shifted.",
      },
      {
        title: "Metrics & Measurement",
        content: "Platform uptime per service (each domain independently measured), cascading failure rate (incidents where one service failure caused downstream service degradation), mean time to detect (MTTD) and mean time to resolve (MTTR) per service, deployment frequency per team (proxy for independent deployability), new feature build time (weeks from kickoff to production for capabilities built on the platform vs before decomposition).",
      },
      {
        title: "Outcomes",
        content: "Platform uptime 99.7% (vs 98.1% pre-decomposition — the difference reflects the elimination of cascading failures). Cascading failure rate reduced 82% — a payment service degradation no longer affects POS availability. Mean time to detect a production incident reduced 65% — service-specific dashboards and circuit breaker telemetry surface the failing component immediately. New product capability build time reduced 40% — teams building on platform services don't need to understand adjacent domains. Deployment frequency per team increased 3x — teams can ship independently without release coordination.",
      },
      {
        title: "Lessons Learned",
        content: "The hardest part of the decomposition was not the technical execution — it was the organisational alignment on data ownership rules. The 'no direct database access across domains' rule was challenged repeatedly because it made some queries slower and some reporting harder. I should have invested more time upfront building the business case for the rule: specifically, documenting three historical incidents where cross-domain data coupling was the root cause of a production issue. The technical argument for loose coupling was abstract; the incident history was concrete. Documentation of the 'why' would have prevented repeated renegotiation of the same boundary decisions.",
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
        className="w-full text-left p-7 sm:p-8"
      >
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
