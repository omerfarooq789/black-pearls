import { FC } from "react";
import { Map } from "./map";
import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ContactLocation: FC = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          rowGap={1}
          px={8}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            {t("pages.contactUs.location.title")}
          </Typography>
          <Typography variant="body1">
            {t("pages.contactUs.location.description")}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {t("pages.contactUs.location.office")}
          </Typography>
          <Typography variant="body1">6740, Mishrifah Dist., Jeddah</Typography>
          <Typography variant="body1" fontWeight="bold">
            {t("pages.contactUs.location.support")}
          </Typography>
          <Typography variant="body1">
            Sat - Thurs (8:00 am to 6:00 pm)
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
      </Grid>
    </Container>
  );
};
