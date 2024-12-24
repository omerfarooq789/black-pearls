import { Box } from "@mui/material";
import { FC } from "react";
import {
  AboutSection,
  ImageBanner,
  ServicesSection,
  ProjectsSection,
  ReviewSection,
  ContactUsSection,
} from "../components";

export const Home: FC = () => {
  return (
    <Box className="flex-1">
      <ImageBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewSection />
      <ContactUsSection />
    </Box>
  );
};
