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
    locales: ["tr-TR", "en-EN", "de-DE", "nl-NL", "it-IT"],
    defaultLocale: "tr-TR",
  },
};
