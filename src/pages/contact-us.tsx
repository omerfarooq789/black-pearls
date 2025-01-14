import { Box } from "@mui/material";
import { FC } from "react";
import {
  ContactLocation,
  ContactUsHeading,
  ContactUsDetails,
} from "../components";
import AnimatedSection from "../components/animation";

const ContactUs: FC = () => {
  return (
    <Box>
      <AnimatedSection animationClass="animate-fadeIn">
        <ContactUsHeading />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ContactUsDetails />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ContactLocation />
      </AnimatedSection>
    </Box>
  );
};

export default ContactUs;
