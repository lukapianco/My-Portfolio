import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://lukapianco.github.io/My-Portfolio/**'),
    ],
  },
};

export default nextConfig;
