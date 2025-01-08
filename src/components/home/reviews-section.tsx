import { FC } from "react";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Card,
  CardContent,
  Divider,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";

const reviewSectionData: {
  reviewer: string;
  review: string;
  imageUrl: string;
}[] = [
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
    review: "pages.home.reviewsSection.list.first.review",
    reviewer: "pages.home.reviewsSection.list.first.reviewer",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
    review: "pages.home.reviewsSection.list.second.review",
    reviewer: "pages.home.reviewsSection.list.second.reviewer",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
    review: "pages.home.reviewsSection.list.third.review",
    reviewer: "pages.home.reviewsSection.list.third.reviewer",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
    review: "pages.home.reviewsSection.list.fourth.review",
    reviewer: "pages.home.reviewsSection.list.fourth.reviewer",
  },
];

export const ReviewSection: FC = () => {
  const { t } = useTranslation();

  const isMdScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      className="flex-1"
      justifyContent="center"
      py={10}
      my={8}
      sx={{
        height: "70vh",
        color: (theme) => theme.palette.common.white,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=3840,fit=crop/YrDlZMrOaPuW2xBy/blackpearls3-copy-mjEvoypo6bCXwkQe.webp"
        )`,
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {t("pages.home.reviewsSection.title")}
      </Typography>
      <Container
        sx={{
          ".swiper-button-prev,.swiper-button-next": {
            color: "white",
          },
        }}
      >
        <div dir="ltr">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={isMdScreen ? 1 : 2}
            navigation={!isSmallScreen}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
          >
            {reviewSectionData.map((item, index) => (
              <SwiperSlide key={index}>
                <Box
                  className="flex-1"
                  justifyContent="center"
                  py={8}
                  mb={5}
                  px={2}
                  rowGap={2}
                  sx={{
                    height: isMdScreen ? "fit-content" : "350px",
                    textAlign: "center",
                    alignItems: "center",
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  <Card
                    className="flex-1"
                    sx={{
                      justifyContent: "center",
                      width: isSmallScreen ? "100%" : "80%",
                      textAlign: "center",
                      borderRadius: 3,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      px: { xs: 1, md: 3 },
                      py: 3,
                    }}
                  >
                    <Avatar
                      src={item.imageUrl}
                      alt="Marissa"
                      sx={{ width: 80, height: 80, margin: "0 auto", mb: 2 }}
                    />
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      {[...Array(5)].map((_, index) => (
                        <StarIcon key={index} sx={{ color: "#FFB400" }} />
                      ))}
                    </Box>
                    <CardContent
                      sx={{
                        alignItems: "center",
                        display: "flex",

                        flexDirection: "column",
                        rowGap: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontStyle: "italic", color: "#555", mb: 2 }}
                      >
                        <FormatQuoteIcon />
                        {t(item.review)}
                        <FormatQuoteIcon />
                      </Typography>
                      <Divider
                        sx={{
                          width: "100px",
                          borderWidth: "thin",
                          borderColor: "coral",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {`- ${t(item.reviewer)}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </Box>
  );
};
