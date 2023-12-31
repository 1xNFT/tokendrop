/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.ipfscdn.io", "315d0c4add7d6d75bfbd0354ebcfd132.ipfscdn.io"],
  },
};

module.exports = nextConfig;
