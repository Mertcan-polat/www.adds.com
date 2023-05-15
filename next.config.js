/**
 * @type {import('next').NextConfig}
 */

module.exports = module.exports = {
  // Diğer yapılandırma seçenekleri burada yer alabilir
  output: {
    // output seçeneğini "export" olarak ayarla
    export: {},
  },
  i18n: {
    locales: ["tr", "en", "de", "nl", "it"],
    defaultLocale: "tr",
  },
  images: {
    unoptimized: true,
  },
};
