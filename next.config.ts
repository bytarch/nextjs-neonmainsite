import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 // output: 'export', // Enable static export
//  distDir: 'dist',  // Set output directory
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }

};

export default nextConfig;
