import { useCallback } from "react";
import {
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (to: To, options?: NavigateOptions) => {
      if (to !== pathname) navigate(to, options);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate, pathname]
  );
};
