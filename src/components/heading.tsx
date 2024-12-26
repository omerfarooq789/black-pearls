import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const PageHeading: FC = () => {
  const { t } = useTranslation();
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
          {t("common.pageHeading.title")}
        </Typography>
        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{ maxWidth: "60%", mx: "auto", lineHeight: 1.6 }}
        >
          {t("common.pageHeading.description")}
        </Typography>
      </Container>
    </Box>
  );
};
