import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `pnpm build` writes plain HTML/CSS/JS to `out/`, so the
  // site can live on Vercel or next to the provider's billing system
  // (/segundavia, /central) on the current server.
  output: "export",
  turbopack: {
    root: import.meta.dirname,
  },
  // The only images are the small brand PNGs, so no optimizer is needed.
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
