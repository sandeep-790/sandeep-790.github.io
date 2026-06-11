import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sandeepkurapati.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Sandeep Kurapati — Senior Product Manager | Restaurant Technology & POS Solutions",
    template: "%s | Sandeep Kurapati",
  },

  description:
    "Senior Product Manager with 6+ years building restaurant technology, POS solutions, catalog management systems, and commerce platforms at Petpooja — India's largest restaurant tech platform serving 60,000+ outlets. Open to Group PM and Head of Product roles.",

  keywords: [
    // Primary
    "product manager",
    "senior product manager",
    "restaurant technology",
    "POS solutions",
    "restaurant POS",
    "commerce platforms",
    "merchant technology",
    "platform products",
    // Secondary
    "catalog management",
    "integrations platform",
    "android applications",
    "backend systems",
    "restaurant operations",
    // Long-tail
    "restaurant technology product manager",
    "senior product manager restaurant tech",
    "POS product manager",
    "commerce platform product manager",
    "restaurant POS solutions",
    "merchant operations product manager",
    "catalog management system",
    "restaurant integrations platform",
    "android restaurant applications",
    "backend platform architecture",
    "restaurant operations product management",
    "group product manager",
    "head of product restaurant technology",
    "Petpooja product manager",
    "SaaS product manager",
    "online ordering platform",
    "dine-in technology product manager",
  ],

  authors: [{ name: "Sandeep Kurapati", url: SITE_URL }],

  creator: "Sandeep Kurapati",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sandeep Kurapati — Senior Product Manager",
    title:
      "Sandeep Kurapati — Senior Product Manager | Restaurant Technology & POS Solutions",
    description:
      "Senior Product Manager who built the full restaurant technology ecosystem at Petpooja — POS solutions, catalog management, online ordering, dine-in technology, integrations platform, and backend architecture serving 60,000+ outlets.",
    firstName: "Sandeep",
    lastName: "Kurapati",
  },

  twitter: {
    card: "summary_large_image",
    site: "@sandeepkurapati",
    creator: "@sandeepkurapati",
    title:
      "Sandeep Kurapati — Senior Product Manager | Restaurant Technology & POS Solutions",
    description:
      "Senior Product Manager who built the full restaurant technology ecosystem at Petpooja — POS solutions, catalog management, online ordering, dine-in technology, integrations platform, and backend architecture serving 60,000+ outlets.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add your Google Search Console verification token here when available
    // google: "your-verification-token",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sandeep Kurapati",
      url: SITE_URL,
      jobTitle: "Senior Product Manager",
      description:
        "Senior Product Manager with 6+ years specializing in restaurant technology, POS solutions, catalog management systems, commerce platforms, and merchant technology. Built 12+ products at Petpooja serving 60,000+ restaurant outlets.",
      email: "sandeep.kurapati@petpooja.com",
      sameAs: ["https://linkedin.com/in/sandeep-kurapati"],
      image: `${SITE_URL}/og-image.png`,
      worksFor: {
        "@type": "Organization",
        "@id": "https://petpooja.com/#organization",
        name: "Petpooja",
        url: "https://petpooja.com",
        description:
          "India's largest restaurant technology platform — POS solutions, catalog management, online ordering, and commerce infrastructure serving 60,000+ outlets.",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Product Manager",
        description:
          "Senior Product Manager specializing in restaurant technology, POS solutions, commerce platforms, and merchant technology.",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
        skills:
          "Restaurant Technology, POS Solutions, Catalog Management, Commerce Platforms, Merchant Technology, Platform Architecture, Integrations Platform, Android Applications, Backend Systems, Restaurant Operations, Product Strategy, Roadmap Planning, Stakeholder Management",
      },
      knowsAbout: [
        "Restaurant Technology",
        "POS Solutions",
        "Restaurant POS",
        "Catalog Management Systems",
        "Commerce Platforms",
        "Merchant Technology",
        "Online Ordering Platforms",
        "Dine-in Technology",
        "Restaurant Operations",
        "Integrations Platform",
        "Android Restaurant Applications",
        "Backend Platform Architecture",
        "SaaS Product Management",
        "Platform Products",
        "Product Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sandeep Kurapati — Senior Product Manager | Restaurant Technology & POS Solutions",
      description:
        "Portfolio of Sandeep Kurapati, Senior Product Manager specializing in restaurant technology, POS solutions, catalog management, commerce platforms, and merchant technology.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Sandeep Kurapati — Senior Product Manager Portfolio",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      description:
        "Professional portfolio of Sandeep Kurapati, Senior Product Manager with expertise in restaurant technology, POS solutions, commerce platforms, and merchant technology.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} bg-[#020817] text-slate-100 antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
