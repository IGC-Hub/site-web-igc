import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "igcpro.com" }],
        destination: "https://www.igcpro.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
