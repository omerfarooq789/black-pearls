import { FC } from "react";
import { Map } from "./map";
import { Container, Grid, Typography } from "@mui/material";

export const ContactLocation: FC = () => {
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
            Our Location
          </Typography>
          <Typography variant="body1">
            Visit us to explore top-tier MEP solutions and our extensive
            portfolio. We offer quality services in HVAC, plumbing, electrical,
            and fire fighting.
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Office
          </Typography>
          <Typography variant="body1">6740, Mishrifah Dist., Jeddah</Typography>
          <Typography variant="body1" fontWeight="bold">
            Support
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
