import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

export const PageHeading: FC = () => {
  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        py: 12, // Vertical padding
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          MEP Solutions Excellence
        </Typography>
        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{ maxWidth: "60%", mx: "auto", lineHeight: 1.6 }}
        >
          Delivering top tier HVAC, fire fighting, electrical, and plumbing
          services across Saudi Arabia.
        </Typography>
      </Container>
    </Box>
  );
};
