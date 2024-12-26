import "react-i18next";
import en from "./assets/locales/en/main.json";
declare module "react-i18next" {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "main";
    // custom resources type
    resources: {
      main: typeof en;
    };
  }
}
