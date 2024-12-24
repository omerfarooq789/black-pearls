import { FC } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { servicesSectionData } from "../../assets/data";

export const ServicesMain: FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom align="center" fontWeight="bold">
        Our Exclusive Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicesSectionData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              className="flex-1"
              justifyContent="end"
              py={8}
              mb={5}
              sx={{
                height: "50vh",
                px: 4,
                color: (theme) => theme.palette.common.white,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${item.imageUrl})`,
                backgroundPositionY: "center",
                backgroundSize: "cover",
                borderRadius: 4,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: "fit-content", mt: 2, borderRadius: "50px" }}
              >
                See more
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
