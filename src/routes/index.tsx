import { FC } from "react";

import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import {
  ContactUs,
  Home,
  PageNotFound,
  Projects,
  Services,
  ServicesDetails,
} from "../pages";

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
        <Footer />
      </Router>
    </Box>
  );
};
