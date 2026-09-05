import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/company", destination: "/about/", permanent: true },
      { source: "/privacy-policy", destination: "/privacy/", permanent: true },
      { source: "/terms-of-service", destination: "/terms/", permanent: true },
      { source: "/refund-policy", destination: "/legal/", permanent: true },
      { source: "/refund-cancellation", destination: "/legal/", permanent: true },
    ];
  },
};

export default nextConfig;
