import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "carbon-car.vercel.app",
          },
        ],
        destination: "https://www.carbonhyd.studio/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
