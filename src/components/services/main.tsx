import { FC } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { servicesSectionData } from "../../assets/data";
import { useTranslation } from "react-i18next";
import { useCustomNavigate } from "../../hooks";
import AnimatedSection from "../animation";

export const ServicesMain: FC = () => {
  const { t } = useTranslation();
  const navigate = useCustomNavigate();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant={isSmallScreen ? "h3" : "h2"}
        gutterBottom
        align="center"
        fontWeight="bold"
      >
        {t("pages.services.title")}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {servicesSectionData.data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AnimatedSection animationClass="animate-fadeIn">
              <Box
                className="flex-1"
                justifyContent="end"
                py={8}
                mb={5}
                sx={{
                  height: "50vh",
                  px: 4,
                  color: (theme) => theme.palette.common.white,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${!isMdScreen ? item.imageUrl.large : !isSmallScreen ? item.imageUrl.medium : item.imageUrl.small})`,
                  backgroundPositionY: "center",
                  backgroundSize: "cover",
                  borderRadius: 4,
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t(`common.servicesList.${item.type}.title`)}
                </Typography>
                <Typography variant="subtitle1">
                  {t(`common.servicesList.${item.type}.description`)}
                </Typography>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    navigate(`/services/${item.type}`);
                  }}
                  sx={{ width: "fit-content", mt: 2, borderRadius: "50px" }}
                >
                  {t("pages.services.listBtn")}
                </Button>
              </Box>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
