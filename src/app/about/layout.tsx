const SITE_URL = "https://sandeepkurapati.com";

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about`,
  url: `${SITE_URL}/about`,
  name: "About Sandeep Kurapati — Senior Product Manager | Restaurant Technology & Merchant Platforms",
  description:
    "About Sandeep Kurapati, Senior Product Manager with 8+ years building restaurant technology, POS solutions, catalog management systems, commerce platforms, and merchant technology at Petpooja.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/about`,
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      {children}
    </>
  );
}
