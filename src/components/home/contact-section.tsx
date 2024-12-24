import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { ContactForm } from "../contact-form";

const ContactDetail: React.FC = () => {
  return (
    <Grid item xs={12} md={6} container direction="column" rowGap={1} px={8}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        Get in touch
      </Typography>
      <Typography variant="body1">
        Share with visitors how they can contact you and encourage them to ask
        any questions they may have.
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        Phone
      </Typography>
      <Link href="tel:+966507116423" target="_self" sx={{ color: "inherit" }}>
        +966 50 711 6423
      </Link>
      <Typography variant="body1" fontWeight="bold">
        Email
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

export const ContactUsSection: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <ContactDetail />
        <ContactForm />
      </Grid>
    </Container>
  );
};
