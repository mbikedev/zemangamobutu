import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" to enable API routes for Netlify
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
