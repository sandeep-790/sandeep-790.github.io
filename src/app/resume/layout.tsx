const SITE_URL = "https://sandeepkurapati.com";

const resumeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/resume`,
  url: `${SITE_URL}/resume`,
  name: "Resume — Sandeep Kurapati | Senior Product Manager | Restaurant Technology & POS Solutions",
  description:
    "Professional resume of Sandeep Kurapati, Senior Product Manager with 8+ years building restaurant technology, POS solutions, catalog management systems, commerce platforms, and merchant technology. Open to Group PM, Head of Product, and Senior PM roles.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume",
        item: `${SITE_URL}/resume`,
      },
    ],
  },
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Sandeep Kurapati",
    jobTitle: "Senior Product Manager",
    description:
      "Senior Product Manager specializing in restaurant technology, POS solutions, commerce platforms, merchant technology, and platform architecture. 8+ years at Petpooja building 12+ products serving 1,00,000+ restaurant outlets.",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "experience",
        description:
          "8+ years as Senior Product Manager at Petpooja — restaurant technology, POS solutions, catalog management, integrations platform, Android applications, and backend systems",
      },
    ],
    seeks: {
      "@type": "JobPosting",
      title: "Group Product Manager / Head of Product / Senior Product Manager",
      description:
        "Seeking Group PM, Head of Product, or Senior PM roles at technology companies building restaurant technology, commerce platforms, operational SaaS, or merchant technology products.",
    },
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
