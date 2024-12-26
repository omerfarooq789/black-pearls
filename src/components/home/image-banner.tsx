import { Box, Typography, Button, Container } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const ImageBanner: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      py={8}
      sx={{
        height: "70vh",
        color: (theme) => theme.palette.common.white,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=3840fit=crop/YrDlZMrOaPuW2xBy/blackpearls1-A1awx84a6qHK3489.webp"
        )`,
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        className="flex-1"
        maxWidth="md"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 4,
        }}
      >
        <Typography variant="h2">
          {t("pages.home.imageBanner.title")}
        </Typography>
        <Typography variant="body1">
          {t("pages.home.imageBanner.description")}
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/contact")}
          sx={{
            width: "fit-content",
            borderRadius: "50px",
          }}
        >
          {t("pages.home.imageBanner.btn")}
        </Button>
      </Container>
    </Box>
  );
};
