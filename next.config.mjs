/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hapi.herrguller.cc",
      },
    ],
  },
};

export default nextConfig;
