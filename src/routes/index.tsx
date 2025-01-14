import { FC, lazy, Suspense, useEffect } from "react";

import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Footer, Header, Loader } from "../components";

import { useTranslation } from "react-i18next";
import { usePageTracking } from "../hooks";

const Home = lazy(() => import("../pages/home"));
const Projects = lazy(() => import("../pages/projects"));
const Services = lazy(() => import("../pages/services"));
const ServicesDetails = lazy(() => import("../pages/services-details"));
const ContactUs = lazy(() => import("../pages/contact-us"));
const PageNotFound = lazy(() => import("../pages/page-not-found"));

const SuspenseLayout = () => (
  <Suspense fallback={<Loader />}>
    <Outlet />
  </Suspense>
);

const AllRoutes: FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  usePageTracking();

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
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/services" Component={Services} />
          <Route path="/:lang/services/:type" Component={ServicesDetails} />
          <Route path="/:lang/projects" Component={Projects} />
          <Route path="/:lang/contact" Component={ContactUs} />
          <Route path="*" Component={PageNotFound} />
        </Route>
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
