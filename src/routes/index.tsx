import { FC, useEffect } from "react";

import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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

const AllRoutes: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <main>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/services/:type" Component={ServicesDetails} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={ContactUs} />
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
