import type { Metadata } from "next";

const SITE_URL = "https://sandeepkurapati.com";

export const metadata: Metadata = {
  title:
    "Contact — Senior Product Manager Open to Group PM & Head of Product Roles",
  description:
    "Contact Sandeep Kurapati — Senior Product Manager specializing in restaurant technology, POS solutions, and commerce platforms. Open to Group Product Manager, Head of Product, and Senior PM opportunities at technology companies building operational software, commerce platforms, or restaurant technology. 24-hour response to all relevant recruiter and hiring manager outreach.",
  keywords: [
    "contact senior product manager",
    "hire product manager restaurant technology",
    "group product manager open to work",
    "head of product restaurant tech",
    "senior PM available",
    "product manager commerce platforms",
    "hire product manager POS solutions",
    "restaurant technology PM contact",
    "merchant technology product manager hire",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title:
      "Contact Sandeep Kurapati — Senior Product Manager | Open to Group PM & Head of Product",
    description:
      "Senior Product Manager in restaurant technology, POS solutions, and commerce platforms — open to Group PM and Head of Product roles. Responds to all recruiter and hiring manager outreach within 24 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Sandeep Kurapati — Senior Product Manager | Open to Group PM & Head of Product",
    description:
      "Senior Product Manager in restaurant technology and commerce platforms — open to Group PM and Head of Product roles. 24-hour response guarantee.",
  },
};

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact`,
  url: `${SITE_URL}/contact`,
  name: "Contact Sandeep Kurapati — Senior Product Manager",
  description:
    "Contact page for Sandeep Kurapati, Senior Product Manager open to Group PM, Head of Product, and Senior PM roles in restaurant technology and commerce platforms.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${SITE_URL}/contact`,
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      {children}
    </>
  );
}
