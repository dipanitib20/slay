import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/services",
        destination: "/Services",
      },
      {
        source: "/work",
        destination: "/Work",
      },
      {
        source: "/contact",
        destination: "/Contact",
      },
      {
        source: "/contact-us",
        destination: "/Contact",
      },
    ];
  },
};

export default nextConfig;
