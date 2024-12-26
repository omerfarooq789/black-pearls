import { FC } from "react";

import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import { ContactUs, Home, Projects, Services } from "../pages";

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
            <Route path="/projects" Component={Projects} />
            <Route path="/contact" Component={ContactUs} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Box>
  );
};
