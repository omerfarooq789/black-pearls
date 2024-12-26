import "react-i18next";
import en from "./assets/locales/en/main.json";
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "main";
    resources: {
      main: typeof en;
    };
  }
}
