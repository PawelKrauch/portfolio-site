import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Common page URLs people (and search results) guess at — the site is a
  // single page, so send them to the matching section instead of a 404.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
