import type { MetadataRoute } from "next";

const SITE_URL = "https://sandeepkurapati.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Block AI training crawlers from indexing portfolio content
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
