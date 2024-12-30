import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { ContactForm } from "../contact-form";
import { useTranslation } from "react-i18next";

const ContactDetail: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} md={6} container direction="column" rowGap={1} px={8}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        {t("pages.contactUs.details.title")}
      </Typography>
      <Typography variant="body1">
        {t("pages.contactUs.details.description")}
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        {t("pages.contactUs.details.types.support")}
      </Typography>
      <Link href="tel:+966507116423" target="_self" sx={{ color: "inherit" }}>
        {t("common.phoneNum")}
      </Link>
      <Typography variant="body1" fontWeight="bold">
        {t("pages.contactUs.details.types.inquiry")}
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
        <ContactForm btnText="pages.contactUs.details.btn" />
      </Grid>
    </Container>
  );
};
