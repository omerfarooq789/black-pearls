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
import AnimatedSection from "../components/animation";

const Home: FC = () => {
  return (
    <Box className="flex-1">
      <AnimatedSection animationClass="animate-fadeIn">
        <ImageBanner />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ReviewSection />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ContactUsSection />
      </AnimatedSection>
    </Box>
  );
};

export default Home;
