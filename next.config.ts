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
        source: "/services/:slug*",
        destination: "/Services/:slug*",
      },
      {
        source: "/work",
        destination: "/Work",
      },
      {
        source: "/work/:slug*",
        destination: "/Work/:slug*",
      },
      {
        source: "/contact",
        destination: "/Contact",
      },
      {
        source: "/contact-us",
        destination: "/Contact",
      },
      {
        source: "/tnc",
        destination: "/TnC",
      },
      {
        source: "/terms",
        destination: "/TnC",
      },
      {
        source: "/terms-and-conditions",
        destination: "/TnC",
      },
    ];
  },
};

export default nextConfig;
