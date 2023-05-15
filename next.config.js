/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  //reactStrictMode: true,
  i18n: {
    locales: ["tr", "en", "de", "nl", "it"],
    defaultLocale: "tr",
  },
};

module.exports = nextConfig;
