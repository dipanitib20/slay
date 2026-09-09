import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/About",
      },
      {
        source: "/about-us",
        destination: "/About",
      },
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
