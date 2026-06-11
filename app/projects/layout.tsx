const SITE_URL = "https://sandeepkurapati.com";

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects`,
  url: `${SITE_URL}/projects`,
  name: "Products — Restaurant POS, Catalog Management & Commerce Platform Portfolio",
  description:
    "12+ restaurant technology products built by Senior Product Manager Sandeep Kurapati at Petpooja — POS solutions, catalog management systems, online ordering ecosystems, integrations platform, Android restaurant applications, and backend platform architecture.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  author: { "@id": `${SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/projects`,
      },
    ],
  },
  about: [
    { "@type": "Thing", name: "Restaurant POS Solutions" },
    { "@type": "Thing", name: "Catalog Management Systems" },
    { "@type": "Thing", name: "Online Ordering Ecosystems" },
    { "@type": "Thing", name: "Restaurant Integrations Platform" },
    { "@type": "Thing", name: "Android Restaurant Applications" },
    { "@type": "Thing", name: "QR Dine-In Technology" },
    { "@type": "Thing", name: "Restaurant Finance Platform" },
    { "@type": "Thing", name: "Backend Platform Architecture" },
    { "@type": "Thing", name: "Commerce Platforms" },
    { "@type": "Thing", name: "Merchant Technology" },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData),
        }}
      />
      {children}
    </>
  );
}
