import type { MetadataRoute } from "next";

const SITE_URL = "https://sandeepkurapati.com";
const LAST_MODIFIED = new Date("2026-06-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
