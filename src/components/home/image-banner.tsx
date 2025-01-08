import {
  Box,
  Typography,
  Button,
  Container,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useCustomNavigate } from "../../hooks";

export const ImageBanner: FC = () => {
  const { t } = useTranslation();
  const navigate = useCustomNavigate();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box
      display="flex"
      justifyContent="center"
      py={8}
      sx={{
        height: "70vh",
        minHeight: "fit-content",
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
        <Typography variant={isSmallScreen ? "h3" : "h2"} gutterBottom>
          {t("pages.home.imageBanner.title")}
        </Typography>
        <Typography variant="body1" sx={{ width: { xs: "100%", md: "60%" } }}>
          {t("pages.home.imageBanner.description")}
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/contact")}
          sx={{
            width: "fit-content",
          }}
        >
          {t("pages.home.imageBanner.btn")}
        </Button>
      </Container>
    </Box>
  );
};
