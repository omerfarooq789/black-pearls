import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    returnEmptyString: false,
    supportedLngs: ["en", "ar"],
    detection: {
      order: ["querystring", "path", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      caches: ["cookie", "localStorage"],
    },
    ns: ["main"],
    fallbackLng: "en",
    // defaultNS,
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p", "ul", "li"],
    },
  });
export default i18n;
