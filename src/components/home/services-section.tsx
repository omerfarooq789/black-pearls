import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { servicesSectionData } from "../../assets/data";
import { useTranslation } from "react-i18next";

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: 8,
        px: 5,
        ".swiper-button-prev,.swiper-button-next": {
          color: "transparent",
          "&:hover": {
            color: "white",
          },
        },
      }}
    >
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        {t("pages.home.servicesSection.title")}
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        {t("pages.home.servicesSection.description")}
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {servicesSectionData.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper
              elevation={4}
              sx={{ overflow: "hidden", borderRadius: 2, mt: 2 }}
            >
              <Box
                className="flex-1"
                justifyContent="center"
                py={8}
                mb={5}
                sx={{
                  textAlign: "center",
                  height: "40vh",
                  color: (theme) => theme.palette.common.white,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${item.imageUrl})`,
                  backgroundPositionY: "center",
                  backgroundSize: "cover",
                  borderRadius: 4,
                }}
              >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {t(`common.servicesList.${item.type}.title`)}
                </Typography>
                <Typography variant="h6">
                  {t(`common.servicesList.${item.type}.description`)}
                </Typography>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
