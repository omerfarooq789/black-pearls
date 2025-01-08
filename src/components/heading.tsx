import { FC } from "react";
import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const PageHeading: FC<{
  title?: string;
  description?: string;
}> = ({
  title = "common.pageHeading.title",
  description = "common.pageHeading.description",
}) => {
  const { t } = useTranslation();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      sx={{
        background: "#000",
        color: "#fff",
        py: 12,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant={isSmallScreen ? "h3" : "h2"}
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          {t(title)}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "60%", mx: "auto", lineHeight: 1.6 }}
        >
          {t(description)}
        </Typography>
      </Container>
    </Box>
  );
};
