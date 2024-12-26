import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ContactUsHeading: FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: 12,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          {t("pages.contactUs.heading.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "60%", mx: "auto", lineHeight: 1.6 }}
        >
          {t("pages.contactUs.heading.description")}
        </Typography>
      </Container>
    </Box>
  );
};
