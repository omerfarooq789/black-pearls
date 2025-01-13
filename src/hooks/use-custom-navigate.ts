import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  return useCallback(
    (to: To, options?: NavigateOptions) => {
      if (to !== pathname)
        navigate(
          to !== "/ar" && to !== "/en" ? `/${i18n.language}${to}` : to,
          options
        );
      else window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [i18n.language, navigate, pathname]
  );
};
