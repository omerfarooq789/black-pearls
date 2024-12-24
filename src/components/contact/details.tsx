import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { ContactForm } from "../contact-form";

const ContactDetail: React.FC = () => {
  return (
    <Grid item xs={12} md={6} container direction="column" rowGap={1} px={8}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Contact Us Today
      </Typography>
      <Typography variant="body1">
        Get in touch for top-tier MEP solutions. We are here to assist you with
        your HVAC, fire fighting, electrical, and plumbing needs.
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Support
      </Typography>
      <Link href="tel:+966507116423" target="_self" sx={{ color: "inherit" }}>
        +966 50 711 6423
      </Link>
      <Typography variant="body1" fontWeight="bold">
        Inquiry
      </Typography>
      <Link
        href="mailto:muhammadmusaffa@theblackpearlsa.com"
        target="_self"
        sx={{ color: "inherit" }}
      >
        muhammadmusaffa@theblackpearlsa.com
      </Link>
    </Grid>
  );
};

export const ContactUsDetails: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <ContactDetail />
        <ContactForm btnText="Submit your inquiry" />
      </Grid>
    </Container>
  );
};
