import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

export const ContactUsHeading: FC = () => {
  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Contact Us Today
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "60%", mx: "auto", lineHeight: 1.6 }}
        >
          Reach out for top-tier MEP solutions tailored to your business needs
          and project requirements.
        </Typography>
      </Container>
    </Box>
  );
};
