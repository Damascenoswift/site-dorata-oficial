import type { NextConfig } from "next";

// Ensure node binary is findable by Turbopack worker processes
if (process.env.PATH && !process.env.PATH.includes("/usr/local/bin")) {
  process.env.PATH = `/usr/local/bin:${process.env.PATH}`;
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
