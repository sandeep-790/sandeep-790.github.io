# Portfolio Image Asset Prompts

Visual direction: dark navy background (#020817), teal accent (#00d4aa), indigo secondary (#818cf8), white text surfaces. All images should feel like premium SaaS product screenshots or technical diagrams — rendered in a dark IDE/dashboard aesthetic. No stock photography. No people. No generic "technology" clichés (no circuit boards, no glowing globes, no floating icons in space). Every image should communicate a specific system, flow, or outcome that a senior PM or VP of Product would recognise immediately as real work.

---

## 1. Hero Banner

**Purpose**
Establish Sandeep as a platform-scale product leader with breadth and depth. The hero is the first impression — it needs to communicate system thinking, not just job title. The image anchors the headline "Product leadership at platform scale."

**Placement**
Homepage hero section, right column (desktop only). Sits next to the main headline and bio copy. Currently the right column shows a "Platform Impact" metrics card with 6 stats. The image would either replace or sit below that card as an ambient background layer — a full-bleed illustration behind the metrics card that gives the card visual context.

**Style**
Dark, technical, architectural. Not a product screenshot — an abstract system map. Faint topology lines, node clusters representing different product domains (POS, Catalog, Ordering, Platform, Finance, Devices) connected by data flow lines. Color weight on teal nodes. The aesthetic should feel like a deployment topology diagram viewed from above — sparse, precise, not decorative.

**Exact Image Generation Prompt**
```
Dark navy background (#020817). Abstract technical architecture diagram rendered as a flat network topology. Six labeled node clusters arranged in a radial layout: "POS" top-left, "Catalog" top-center, "Online Ordering" top-right, "Finance" bottom-right, "Devices" bottom-left, "Integration Platform" bottom-center. Nodes rendered as glowing rounded rectangles, primary nodes in teal (#00d4aa) with soft glow, secondary nodes in indigo (#818cf8). Connecting lines between nodes drawn as thin hairlines with directional arrowheads — animated-feeling, like data flow. Small sub-node dots around each cluster representing individual products (2–4 per cluster). A faint radial grid overlay in rgba(0,212,170,0.03). "60,000+ outlets" label faintly visible near the center cluster. Render in high contrast against the dark background. No text headings, no decorative elements, no gradients beyond the node glows. The visual weight is sparse — 70% empty space, 30% structure. Ultra-high detail, 16:9 ratio, suitable for a hero background panel at 1200×800px.
```

---

## 2. Restaurant Commerce Ecosystem

**Purpose**
Show the full end-to-end commerce stack that Sandeep built — the interconnected layers from catalog to ordering channels to POS to finance. This is the "platform at scale" visual for the homepage product domains section and the about page. It communicates that the work wasn't a series of isolated features but a connected ecosystem.

**Placement**
Homepage "Product Domains" section or About page hero. Used as a section-level illustration — wide, horizontal, representing the four domain clusters (Restaurant Operations, Commerce & Ordering, Platform & Integration, Merchant Solutions). Also usable as an OG image.

**Style**
Four-column horizontal architecture diagram. Each column is a domain cluster with its products listed as stack layers. Data flows between columns shown as horizontal arrows. Dark card backgrounds per column. Icons or small glyphs per product. The overall impression: a product ecosystem map that a senior engineering leader would draw on a whiteboard, cleaned up and styled for presentation.

**Exact Image Generation Prompt**
```
Dark navy (#020817) background. A horizontal four-column diagram representing a restaurant commerce ecosystem. Each column is a domain cluster rendered as a dark card panel (rgba(255,255,255,0.025) surface, 1px rgba(255,255,255,0.08) border, 16px border-radius). 

Column 1 — "Restaurant Operations" (teal header): stack layers labeled "POS Billing", "KOT & Kitchen", "Table Management", "Offline-First Engine". Column 2 — "Commerce & Ordering" (indigo header): "Catalog System", "Online Ordering", "QR Dine-In", "Aggregator Sync". Column 3 — "Platform & Integration" (teal header): "Backend Platform", "Integration APIs", "Event Backbone", "Android Fleet". Column 4 — "Merchant Solutions" (indigo header): "Finance Layer", "Settlement Engine", "GST Compliance", "Reconciliation".

Horizontal data-flow arrows between columns in teal (#00d4aa) with 0.6 opacity — thin, precise. Small circular nodes at the connection points. A "60,000+ outlets" metric label centered above the diagram in small slate-400 text. All column headers in 11px uppercase tracking-wide. Layer labels in 12px slate-300. Dark background, high contrast. No photographic elements. Technical diagram aesthetic. 1600×500px, 3.2:1 ratio.
```

---

## 3. Catalog Management Platform

**Purpose**
Visualise the hierarchical data model and propagation engine that is the core technical innovation of the Catalog Management Platform. The key insight from the case study: "the problem wasn't coordination — it was architecture." The image should make that architecture visible — a tree structure propagating changes to multiple downstream channels simultaneously.

**Placement**
Case Studies page — Catalog Management case study card header or expanded section illustration. Also usable on the Projects page next to the Catalog Management System product entry. Should be a 2:1 or 3:2 image that sits above or beside the metrics grid.

**Style**
Data model / propagation diagram. A hierarchical tree on the left (Organisation → Brand → Outlet → Channel), with a change event propagating outward to five downstream systems on the right (POS, Swiggy, Zomato, Web Ordering, QR Menu). The propagation paths shown as animated-looking flow lines with confirmation checkmarks at each endpoint. A "3 days → 4 hours" label annotating the propagation flow. Dark card background, teal for the source node, indigo for the channel endpoints.

**Exact Image Generation Prompt**
```
Dark navy background. A data architecture diagram showing the Catalog Management Platform. 

Left side: hierarchical tree diagram with four levels. Root node "Organisation" (large teal circle, glowing). Branch to two "Brand" nodes (medium teal circles). Each Brand branches to three "Outlet" nodes (small teal circles). Each Outlet connects to "Channel" endpoints (tiny circles). The tree uses clean vertical-horizontal connector lines in rgba(255,255,255,0.12).

Right side: five destination channel cards arranged vertically: "POS Terminals", "Swiggy", "Zomato", "Web Ordering", "QR Menu". Each card is a dark rounded rectangle (rgba(255,255,255,0.03) surface, 1px border). A green checkmark (✓ in teal) appears at each destination.

Center: a horizontal propagation event shown as a glowing teal data pulse — "PRICE CHANGE EVENT" label in 10px uppercase tracking-widest, teal color. Flow lines from the catalog tree through the event to all five destinations.

Annotation below the flow: "3 days → 4 hours" in large tabular-numeral font, teal color.

Bottom-left: small label "15,000+ outlets on unified catalog". Minimal, technical, no decorative elements. 1200×600px, 2:1 ratio.
```

---

## 4. Integrations Platform

**Purpose**
Visualise the adapter pattern and canonical event model that transformed 6-week custom engineering projects into 9-day configuration exercises. The key diagram: multiple external partners (Swiggy, Zomato, regional aggregators) all connecting to Petpooja through a single canonical event model — adapter layer translating between partner-specific formats and the platform's lingua franca.

**Placement**
Case Studies page — Integrations Platform case study. Projects page beside the Integration Platform product entry. Also strong as a technical architecture section visual on the about page or homepage tech expertise section.

**Style**
Hub-and-spoke architecture diagram. The hub is the "Canonical Event Model" — a central node. Spokes extend outward to partner adapters (each labeled with a partner type), which connect outward to external partner systems. The adapter layer is shown as a translation/transform box between hub and external. Event flow annotations on the spokes: "menu.updated", "order.placed", "order.accepted". Dark, technical, precise.

**Exact Image Generation Prompt**
```
Dark navy (#020817) background. Hub-and-spoke integration architecture diagram.

Central hub: a large rounded rectangle labeled "Canonical Event Model" in teal (#00d4aa), glowing softly. Inside the hub, three event schema labels in monospace: "menu.updated", "order.placed", "order.accepted". The hub has a subtle teal radial glow.

Surrounding the hub at equal spacing: six adapter nodes. Each adapter is a medium dark card (rgba(255,255,255,0.04) surface, teal border at 0.3 opacity). Adapters labeled: "Swiggy Adapter", "Zomato Adapter", "Regional Aggregator 1", "Regional Aggregator 2", "POS Integration", "Web Ordering". Each adapter shows a small format-translation icon (→ arrow with schema conversion implied by slightly different line weight).

Outer ring: six external partner endpoint cards in indigo tint (rgba(129,140,248,0.08) surface). Labeled generically by type: "Aggregator API", "Delivery Platform", "POS System".

Connection lines: inner connections (hub to adapter) in teal hairlines with bidirectional arrows. Outer connections (adapter to partner) in indigo hairlines. All lines have small directional chevrons.

Bottom annotation: "40+ integrations live · 6 weeks → 9 days onboarding · 99.4% order acceptance". Small, slate-500 color. Minimal, technical. 1200×700px.
```

---

## 5. GST Standardization

**Purpose**
Visualise the compliance-by-design approach — where tax data is captured correctly at the point of billing, not reconstructed after the fact. The key workflow: item in catalog → HSN code assigned → transaction captured with correct tax data → GSTR report generated automatically. The innovation is that compliance is a byproduct of normal operations, not a separate workflow.

**Placement**
Case Studies page — GST Standardization case study. Also usable on the Projects page beside the Finance/Compliance product entry or on the Resume page beside the merchant solutions section. A narrower aspect ratio (16:9 or 3:2) works well here.

**Style**
Linear workflow diagram reading left to right: Catalog Item → HSN Assignment → POS Billing → Transaction Record → GSTR Report. Each step is a card with a small icon. Annotated with the key outcome at the end: "67% compliance error reduction." The HSN library shown as a versioned dataset node feeding into the assignment step. Teal for the data flow arrows, clean card backgrounds per step.

**Exact Image Generation Prompt**
```
Dark navy background. A five-step linear workflow diagram reading left to right, representing GST compliance embedded into restaurant operations.

Step 1 — "Catalog Item": a small menu card icon in a teal-tinted box. Label below in 11px slate-400: "Item created with category".
Step 2 — "HSN Assignment": a lookup table icon. Label: "Curated HSN library maps item automatically". A small "Version 3.2" badge in indigo, implying the library is maintained and updated.
Step 3 — "POS Billing": a receipt/terminal icon. Label: "Tax rate resolved at point of sale". A small teal "5% GST" badge showing the slab assigned.
Step 4 — "Transaction Record": a database cylinder icon in teal. Label: "Immutable record with item-level tax data". A small lock icon implying immutability.
Step 5 — "GSTR Report": a document icon. Label: "GSTR-1 & GSTR-3B generated from transaction data". A green checkmark.

Arrows between steps: teal directional flow lines with subtle data-pulse animation feel. Below Step 5: outcome annotation "−67% compliance errors · 10,000+ merchants · 45 min/month vs 8–10 hrs".

A secondary feed: above Step 2, a small floating node "HSN Library (5,000+ items)" feeding downward into the assignment step with a dotted teal line.

Style: dark card surfaces per step, minimal padding, monospace labels, professional and technical. 1400×500px, wide format.
```

---

## 6. Online Ordering Ecosystem

**Purpose**
Show the zero-touch order flow: a customer places an order on any channel (Swiggy, Zomato, Web, QR), the order flows automatically through the ingestion layer into the POS and kitchen, and the menu syncs back to all channels when availability changes. The key metric visualised: 99.4% auto-acceptance, eliminating the manual tablet-monitoring step.

**Placement**
Case Studies page — Online Ordering Ecosystem case study. Projects page beside the Online Ordering Ecosystem product entry. Strong as a section image on the homepage "Featured Case Studies" section for the ordering case study entry.

**Style**
Two-layer diagram. Top layer: the ordering channels (Swiggy, Zomato, Web, App, QR Code) shown as source nodes. Middle layer: the ingestion and routing engine shown as a processing hub. Bottom layer: the POS system and KDS (kitchen display) shown as destination nodes. Order flow arrows top-to-bottom in teal. Reverse arrows (availability sync) bottom-to-top in indigo, labeled "out-of-stock sync <5 min." Outcome annotation: "99.4% auto-acceptance."

**Exact Image Generation Prompt**
```
Dark navy background. Three-layer vertical architecture diagram showing zero-touch online order flow.

Top layer — "Ordering Channels": five channel cards side by side in a horizontal row. Cards: "Swiggy", "Zomato", "Web Ordering", "Mobile App", "QR Menu". Each card is a small dark rounded rectangle with a relevant icon glyph (delivery bag, web globe, QR code icon in minimalist line style). Cards in indigo-tinted surface (rgba(129,140,248,0.06)).

Middle layer — "Order Ingestion & Routing Engine": one wide card spanning the full width. Label: "Canonical Order Model · Channel Adapters · Idempotent Ingestion". A small "ROUTING" label in teal uppercase. Inside: three sub-labels in monospace: "Format Translation", "Deduplication", "Kitchen Station Routing".

Bottom layer — "Restaurant Operations": two side-by-side cards. Left: "POS System" (teal-tinted surface). Right: "Kitchen Display (KDS)" (teal-tinted surface).

Downward flow arrows (top → middle → bottom): teal, thick, with small order-count labels "99.4% auto-accepted".
Upward reverse arrows (bottom → top): indigo, thinner, labeled "Availability sync <5 min".

Outcome annotation at bottom: "−52% order defect rate · 99.4% auto-acceptance · zero manual re-entry". Small slate-400 text.

Minimal, technical, no decorative elements. 1200×700px.
```

---

## 7. QR Menu Platform

**Purpose**
Visualise the guest-facing QR ordering flow and the backend connection to POS — specifically the architectural choice that QR orders inject into the same POS order model as counter orders, making it invisible to the kitchen staff. The key UX insight: zero friction (no app, no login, scan → live menu in <2 seconds). The operational outcome: 19% table turn improvement.

**Placement**
Case Studies page — QR Menu & Dine-In Platform case study. Projects page beside the Dine-In Technology & QR Menu Platform product entry. A portrait-or-square aspect ratio works here if showing a mobile-frame mockup alongside the architecture, or a landscape 2:1 if showing the full system flow.

**Style**
Split composition. Left side: a simplified mobile browser frame showing the QR menu UI — a clean menu screen with a few item cards, availability status, and an "Add to order" button. Right side: a connection line from the phone to the POS/KDS system, labeled "Same order model as counter orders." Teal for the connection path. Outcome annotations: "+19% table turn", "2M+ monthly sessions", "No app required."

**Exact Image Generation Prompt**
```
Dark navy background. Split composition, two panels side by side.

Left panel — Mobile QR Menu: a phone browser frame (thin dark border, no phone hardware chrome) showing a restaurant menu UI. Inside the frame: dark card background, restaurant logo placeholder at top (small "RESTAURANT" text in slate-600), three menu item cards stacked vertically. Each item card has: a small image placeholder (gray rectangle), item name in white, item description in slate-400 small text, price in teal, and a "+" add button in teal. At the top of the menu, a small banner: "✓ Live availability — updated from POS". One item card shows a small red "Sold out" badge. No app download prompt visible. Below the menu, a teal "View Order (2 items)" floating button.

Right panel — Backend Connection: a clean system diagram. Three nodes stacked vertically: "QR Order" (from mobile, teal), "POS Order Model" (large central node, teal glow), "Kitchen Display (KDS)" (bottom, indigo-tinted). Arrows: QR Order → POS Order Model → KDS, all in teal with "Same data model" annotation. A dashed reverse arrow from POS → QR showing "Availability sync". 

Center divider: a thin vertical teal line connecting the two panels.

Bottom row: three metric chips — "+19% table turn", "2M+ monthly sessions", "68% pay-at-table adoption". Each chip styled as a dark pill (border, small teal dot, stat label).

Style: crisp, technical, mobile-accurate proportions. 1400×700px, 2:1 landscape.
```

---

## 8. Restaurant Finance Platform

**Purpose**
Visualise the three-way reconciliation engine and payment reliability layer — the core innovation that reduced settlement support tickets by 41%. The key diagram: payment events from UPI/EDC/QR flow into the settlement engine, which performs three-way matching against POS records and bank records. 94% auto-matched. Discrepancies flagged with specific reason codes. The trust product framing: every rupee traceable from payment to payout.

**Placement**
Case Studies page — Restaurant Finance Platform case study. Projects page beside the Finance Enablement product entry. Resume page beside the merchant solutions timeline entry (2020 milestone). A wide 3:1 or 2:1 format works well for the reconciliation flow.

**Style**
Three-column reconciliation architecture. Left column: payment inputs (UPI, EDC terminal, QR payment) feeding into the engine. Center column: the settlement/reconciliation engine with three-way match logic. Right column: output states (auto-matched, flagged, payout prediction). Teal for the matched path, amber for the flagged path. A health-aware routing diagram inset for the UPI routing layer (showing PSP routes with success rate percentages). Outcome annotation: "94% auto-reconciled · 97.4% UPI success rate · −41% settlement tickets."

**Exact Image Generation Prompt**
```
Dark navy background. Finance reconciliation architecture diagram in three vertical sections.

Left section — "Payment Inputs": three source cards stacked vertically. 
Card 1: "UPI Payments" — teal tint, small routing indicator showing "Health-aware routing: PSP-A 97.8% · PSP-B 94.2%", a small traffic-distribution bar with more weight on the healthy route. 
Card 2: "EDC Terminals" — indigo tint, small "Heartbeat monitoring: 8,500 terminals" label. 
Card 3: "QR Payments" — teal tint. 
All three feed into a single right-pointing arrow labeled "Transaction Records".

Center section — "Settlement & Reconciliation Engine": one large card spanning the height. Inside: three match inputs labeled "POS Record", "PSP Record", "Bank Record" with a ⋀ merge symbol. A match result output showing two paths: teal path labeled "Auto-matched (94%)" with a checkmark, amber path labeled "Exception (6%) — reason: MDR discrepancy" with a flag icon. Below: "Audit Trail: Every deduction traceable to calculation basis".

Right section — "Merchant Payout Visibility": a mock dashboard panel. Shows "Expected payout: ₹24,380 by Tue". Below: a simple settlement timeline (horizontal bar divided into T+1, T+2, T+3 blocks). Below that: three metric chips: "Settlement tickets −41%", "UPI 97.4%", "94% auto-reconciled".

Connecting arrows throughout in teal (auto-match path) and amber/yellow (exception path). Professional, data-dense, trust-signaling aesthetic. 1400×650px.
```

---

## 9. Android Restaurant Applications

**Purpose**
Show the four role-specific Android applications as a product family — and communicate the key technical constraints they were designed for: low RAM, offline-first, unreliable networks, hardware diversity. The visual should make it clear this is a professional product fleet, not a consumer app — constrained hardware, mission-critical reliability, OTA update management.

**Placement**
Case Studies page — Android Restaurant Applications case study. Projects page beside the Android Restaurant Applications product entry. Can also be used on the homepage tech expertise card for "Mobile & Android."

**Style**
Four-device mockup composition. Four Android device frames (tablets and phone sizes) shown side by side, each displaying a different app: Billing Terminal (cashier table view), Captain Order-Taking (menu + table selection), Kitchen Display System (order queue), Owner Dashboard (sales summary). Below the devices: an OTA update flow diagram showing the update channel — "phased rollout: 5% → 20% → 100%" with a rollback trigger. Fleet monitoring stats inset: "8,500+ devices · 99.1% crash-free · 95% OTA coverage in 48 hrs."

**Exact Image Generation Prompt**
```
Dark navy background. Four Android device frames arranged horizontally, each showing a different role-specific restaurant application. Devices range from tablet (16:10 landscape) to phone (9:16 portrait). All device frames are thin dark chrome (no branded hardware, just screen bezels).

Device 1 — Billing Terminal (tablet landscape): dark screen with a table grid UI (6 table cards in 2×3 grid, each showing table number, cover count, order status as "Open"/"Billed"). A large teal "Bill Table 4" button bottom-right. Total: ₹1,840 shown in large white tabular numerals.

Device 2 — Captain Order-Taking App (tablet portrait): a menu browsing screen. Three menu category tabs at top (teal active state). Menu items listed as cards with item name, price, and a "+" button. One item shows a red "Sold out" pill. Order summary bar at bottom: "Order: 3 items · ₹560 · Send to Kitchen →".

Device 3 — Kitchen Display System (tablet landscape): dark screen, stark. An order queue with 4 KOT cards: each shows order number, table, time elapsed (color-coded: green <5min, amber 5–10min, red >10min), and a list of items. Two items shown as checked off in teal. A "DONE" button for each ticket.

Device 4 — Owner Dashboard (phone portrait): a clean analytics summary. Daily sales: "₹84,320" in large teal metric-value font. Below: a mini bar chart for last 7 days. Three stat rows: "Covers: 142", "Avg check: ₹594", "Online: 34%". Minimal, read-only design.

Below all four devices: a horizontal OTA update flow diagram: "Build Pushed" → "5% Fleet (canary)" → "20% Fleet" → "100% Fleet", with a red rollback arrow from "5% Fleet" back if crash rate elevated. Labels in slate-400, 11px.

Bottom stats row: "8,500+ active devices · 99.1% crash-free · 95% OTA coverage in 48 hrs · 0% offline transaction loss". Small pill chips.

High fidelity, professional, technical product family aesthetic. Dark screens, teal accents, no consumer-app brightness. 1600×800px.
```

---

## 10. Backend Platform Architecture

**Purpose**
Visualise the domain service decomposition that took platform uptime from 98.1% to 99.7% and eliminated cascading failures. The core diagram: six domain services (POS, Catalog, Ordering, Merchant, Finance, Devices) each owning their data, communicating via an event backbone (Kafka), with circuit breakers on synchronous paths. This is the most technically ambitious image in the set — it needs to read as a credible system architecture diagram that a Staff Engineer would take seriously.

**Placement**
Case Studies page — Backend Platform Architecture case study (primary). Homepage "Technology & Platform Expertise" section beside the "Platform Scalability" expertise card. About page as an ambient technical credibility signal. This is the marquee technical image of the portfolio.

**Style**
Full architectural diagram, dense but readable. Six domain service boxes arranged in a ring or 2×3 grid — each with its own data store (database cylinder). Between them: the event backbone shown as a horizontal bus (labeled "Event Backbone — Kafka"). Synchronous API calls shown as solid arrows, event-driven calls shown as dashed arrows. Circuit breaker symbols on the synchronous paths. A legend bottom-right. Outcome annotations: "99.7% uptime · −82% cascading failures · −40% build time." This should look like the kind of architecture diagram a Principal Engineer would put in a design doc.

**Exact Image Generation Prompt**
```
Dark navy (#020817) background. A complete microservices architecture diagram for a restaurant technology platform. Professional engineering diagram aesthetic — precise, legible, no decoration.

Six domain service boxes arranged in two rows of three, with comfortable spacing. Each service box is a medium dark card (rgba(255,255,255,0.03) surface, 1px rgba(255,255,255,0.08) border, 12px border-radius). Each has an attached database cylinder beneath it (small, gray, labeled "owns data").

Row 1: "POS Service" (teal border accent), "Catalog Service" (teal border accent), "Ordering Service" (teal border accent).
Row 2: "Merchant Service" (indigo border accent), "Finance Service" (indigo border accent), "Devices Service" (indigo border accent).

Inside each service box: service name in white 13px semibold, domain capabilities in 10px slate-500 (e.g., POS: "order lifecycle, billing, KOT"; Catalog: "hierarchy, pricing, availability"; Ordering: "ingestion, routing, channels"; Merchant: "profiles, config, access control"; Finance: "settlement, reconciliation, payouts"; Devices: "terminal fleet, OTA, heartbeat").

Center of the diagram: a horizontal band labeled "Event Backbone" in teal uppercase tracking-widest. The band contains three event schema pills: "order.placed", "menu.updated", "payment.confirmed". The backbone runs between all six services with subscribe/publish connection points.

Arrows:
- Dashed lines (event-driven, eventual consistency): indigo, 1px, labeled "async event" in 9px.
- Solid lines with arrowheads (synchronous API, consistency-critical): teal, 1.5px, labeled "REST / gRPC" in 9px.
- On two synchronous paths: a small ⚡ circuit breaker symbol (a small lightning bolt in amber) with tooltip label "circuit breaker — fallback enabled".

Legend bottom-right: two rows — "─── Synchronous API" and "- - - Event (async)" with their respective colors.

Bottom annotation bar spanning the full width: "Platform uptime: 99.7% (↑ from 98.1%) · Cascading failures: −82% · Build time: −40% · 6 independently deployable domains". White on dark, 11px, slate-400.

Strangler fig note: small italic label bottom-left: "Migrated from monolith via strangler fig pattern". 

High information density but clean layout. Use of negative space to separate domain clusters. No gradients except node glows. 1600×900px, 16:9.
```

---

## Usage Notes

**File naming convention**
- `hero-platform-topology.png`
- `restaurant-commerce-ecosystem.png`
- `catalog-management-architecture.png`
- `integrations-platform-adapter.png`
- `gst-standardization-workflow.png`
- `online-ordering-ecosystem.png`
- `qr-menu-platform.png`
- `finance-reconciliation-engine.png`
- `android-restaurant-apps.png`
- `backend-platform-architecture.png`

**Recommended generation tools**
- Midjourney v6 or DALL-E 3 for the architecture diagrams
- For higher fidelity technical diagrams, consider Eraser (eraser.io) or Excalidraw with the dark theme, then export
- Images 9 (Android apps) and 7 (QR Menu) benefit from Figma mockup composition if device frames matter

**Dimensions to request**
- Homepage hero: 1200×800px (3:2 landscape)
- Section illustrations: 1400×600px (7:3 wide) 
- Case study headers: 1200×600px (2:1)
- Backend architecture: 1600×900px (16:9)

**Color values to specify in prompts**
- Background: `#020817`
- Primary accent (teal): `#00d4aa`
- Secondary accent (indigo): `#818cf8`
- Card surface: `rgba(255,255,255,0.025)`
- Card border: `rgba(255,255,255,0.08)`
- Body text: `#cbd5e1` (slate-300)
- Secondary text: `#94a3b8` (slate-400)
