import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // to skip validation of types during time
  typescript: {
    ignoreBuildErrors: true,
  },
  // to skip lint errors during build time
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
