import { FC } from "react";
import { Box } from "@mui/material";
import { ServicesPartners, PageHeading, ServicesMain } from "../components";

const Services: FC = () => {
  return (
    <Box>
      <PageHeading />
      <ServicesMain />
      <ServicesPartners />
    </Box>
  );
};

export default Services;
