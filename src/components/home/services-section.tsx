import React from "react";
import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  Theme,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { servicesSectionData } from "../../assets/data";
import { useTranslation } from "react-i18next";
import { useCustomNavigate } from "../../hooks";
import AnimatedSection from "../animation";

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useCustomNavigate();

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  return (
    <Box
      sx={{
        py: 8,
        px: 5,
      }}
    >
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        {t("pages.home.servicesSection.title")}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        {t("pages.home.servicesSection.description")}
      </Typography>
      <AnimatedSection animationClass="animate-fadeIn">
        <div dir="ltr">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={isSmallScreen ? 1 : isMdScreen ? 2 : 4}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
          >
            <Box sx={{ px: 5 }}>
              {servicesSectionData.data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      overflow: "hidden",
                      borderRadius: 2,
                      mt: 2,
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      className="flex-1"
                      alignItems="center"
                      justifyContent="center"
                      mb={5}
                      rowGap={2}
                      sx={{
                        textAlign: "center",
                        color: (theme) => theme.palette.common.white,
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${!isMdScreen ? item.imageUrl.large : !isSmallScreen ? item.imageUrl.medium : item.imageUrl.small})`,
                        backgroundPositionY: "center",
                        backgroundSize: "cover",
                        borderRadius: 4,
                        height: "350px",
                        p: 2,
                      }}
                    >
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {t(`common.servicesList.${item.type}.title`)}
                      </Typography>
                      <Typography variant="body1">
                        {t(`common.servicesList.${item.type}.description`)}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={() => navigate(`/services/${item.type}`)}
                        sx={{ width: "fit-content" }}
                      >
                        {t("pages.home.servicesSection.seeMoreBtn")}
                      </Button>
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Box>
          </Swiper>
        </div>
      </AnimatedSection>
    </Box>
  );
};
