import { Box } from "@mui/material";
import { FC } from "react";
import {
  ContactLocation,
  ContactUsHeading,
  ContactUsDetails,
} from "../components";

export const ContactUs: FC = () => {
  return (
    <Box>
      <ContactUsHeading />
      <ContactUsDetails />
      <ContactLocation />
    </Box>
  );
};
