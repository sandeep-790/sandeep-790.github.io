import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages serves from root for user/org sites (sandeep-790.github.io)
  // No basePath needed — would only be required for project repos (/repo-name)

  // Required for static export: disables server-side image optimisation
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
