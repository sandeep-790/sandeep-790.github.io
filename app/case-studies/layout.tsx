import type { Metadata } from "next";

const SITE_URL = "https://sandeepkurapati.com";

export const metadata: Metadata = {
  title:
    "Case Studies — POS Solutions, Catalog Management & Restaurant Commerce Platforms",
  description:
    "Nine in-depth product case studies by Sandeep Kurapati covering POS solutions, catalog management systems, restaurant integrations platform, online ordering ecosystems, QR dine-in technology, GST standardization, restaurant finance platform, Android restaurant applications, and backend platform architecture. Full problem-to-outcome case studies from Petpooja's restaurant technology stack.",
  keywords: [
    "restaurant POS case study",
    "catalog management case study",
    "restaurant integrations platform",
    "online ordering ecosystem",
    "QR dine-in technology",
    "restaurant finance platform",
    "android restaurant applications case study",
    "backend platform architecture case study",
    "GST standardization restaurant",
    "restaurant technology product case studies",
    "commerce platform case study",
    "merchant technology case study",
    "restaurant operations product management",
    "POS solutions product case study",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/case-studies`,
    title:
      "Case Studies — POS Solutions, Catalog Management & Restaurant Commerce Platforms",
    description:
      "Nine in-depth product case studies covering POS solutions, catalog management, restaurant integrations platform, online ordering, QR dine-in, finance platform, Android applications, and backend architecture at Petpooja.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Case Studies — POS Solutions, Catalog Management & Restaurant Commerce Platforms",
    description:
      "Nine in-depth product case studies: POS solutions, catalog management, integrations platform, online ordering, QR dine-in, finance, Android apps, and backend architecture.",
  },
};

const caseStudiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/case-studies`,
  url: `${SITE_URL}/case-studies`,
  name: "Product Case Studies — Restaurant Technology & Commerce Platforms",
  description:
    "Nine detailed product case studies covering POS solutions, catalog management systems, integrations platform, online ordering ecosystems, and backend architecture built by Senior Product Manager Sandeep Kurapati at Petpooja.",
  author: {
    "@id": `${SITE_URL}/#person`,
  },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${SITE_URL}/case-studies`,
      },
    ],
  },
  about: [
    {
      "@type": "Thing",
      name: "POS Solutions",
      description:
        "Restaurant POS system with unified order data model — checkout reduced from 47s to 18s across 4,200+ outlets.",
    },
    {
      "@type": "Thing",
      name: "Catalog Management System",
      description:
        "Hierarchical catalog infrastructure with automated multi-channel propagation — menu sync reduced from 3 days to 4 hours for 15,000+ outlets.",
    },
    {
      "@type": "Thing",
      name: "Restaurant Integrations Platform",
      description:
        "Adapter-pattern integration platform reducing partner onboarding from 6 weeks to 9 days. 40+ active integrations with 99.4% order acceptance.",
    },
    {
      "@type": "Thing",
      name: "Online Ordering Ecosystem",
      description:
        "Zero-touch order routing from all channels to POS and kitchen. 99.4% auto-acceptance rate, 52% reduction in order defects.",
    },
    {
      "@type": "Thing",
      name: "QR Dine-In Technology",
      description:
        "QR menu and pay-at-table platform improving table turn time 19% with 2M+ monthly sessions.",
    },
    {
      "@type": "Thing",
      name: "Restaurant Finance Platform",
      description:
        "Payment reliability and reconciliation engine — UPI success 97.4%, 94% auto-reconciliation, settlement tickets reduced 41%.",
    },
    {
      "@type": "Thing",
      name: "Android Restaurant Applications",
      description:
        "Role-specific Android apps for billing, kitchen display, and order management across 8,500+ devices with 99.1% crash-free rate.",
    },
    {
      "@type": "Thing",
      name: "Backend Platform Architecture",
      description:
        "Domain service decomposition achieving 99.7% platform uptime, 82% reduction in cascading failures, and 40% faster build times.",
    },
  ],
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesStructuredData),
        }}
      />
      {children}
    </>
  );
}
