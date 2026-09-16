import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ncerc.ac.in",
      },
    ],
  },
};

export default nextConfig;
