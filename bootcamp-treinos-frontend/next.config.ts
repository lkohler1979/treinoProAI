import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
    ],
  },
experimental: {
  serverActions: {
    allowedOrigins: [".nexux360.com.br"]
  }
}  
};

export default nextConfig;
