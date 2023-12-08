/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/invite",
          destination: "https://discord.com/api/oauth2/authorize?client_id=1089552642696552488&permissions=511040&scope=bot+applications.commands",
          permanent: true,
        },
        {
          source: "/documentation/:path*",
          destination: "https://giftify.gitbook.io/:path*",
          permanent: true,
        },
        {
          source: "/support",
          destination: "https://discord.gg/GQSGChbEKz",
          permanent: true,
        },
        {
          source: "/vote",
          destination: "https://top.gg/bot/1089552642696552488/vote",
          permanent: true,
        },
        {
          source: "/status",
          destination: "https://giftify.instatus.com",
          permanent: true,
        },
        {
          source: "/faq",
          destination: "https://giftify.gitbook.io/giftify/support/frequently-asked-questions-faqs",
          permanent: true,
        }
      ];
    },
  };
  
  module.exports = nextConfig;