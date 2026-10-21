import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no root page: visitors land on the English version.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
