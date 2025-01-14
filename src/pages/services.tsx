import { FC } from "react";
import { Box } from "@mui/material";
import { ServicesPartners, PageHeading, ServicesMain } from "../components";
import AnimatedSection from "../components/animation";

const Services: FC = () => {
  return (
    <Box>
      <AnimatedSection animationClass="animate-fadeIn">
        <PageHeading />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ServicesMain />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ServicesPartners />
      </AnimatedSection>
    </Box>
  );
};

export default Services;
