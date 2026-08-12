import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/app-store",
        destination: "/app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
