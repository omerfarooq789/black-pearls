import { FC, useEffect } from "react";

import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Footer, Header } from "../components";
import {
  ContactUs,
  Home,
  PageNotFound,
  Projects,
  Services,
  ServicesDetails,
} from "../pages";
import { useTranslation } from "react-i18next";

const AllRoutes: FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    const currentLang = pathname.startsWith("/en") ? "en" : "ar";
    if (pathname !== "/" && currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
    }
  }, [i18n, pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/services" Component={Services} />
        <Route path="/:lang/services/:type" Component={ServicesDetails} />
        <Route path="/:lang/projects" Component={Projects} />
        <Route path="/:lang/contact" Component={ContactUs} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </main>
  );
};

export const AppRoutes: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Header />
        <AllRoutes />
        <Footer />
      </Router>
    </Box>
  );
};
