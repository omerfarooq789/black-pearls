import { FC } from "react";
import { Box, Typography, Paper, Container, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const servicesSectionData: {
  reviewer: string;
  review: string;
  imageUrl: string;
}[] = [
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls6-A0xwOPBzWrTpG6M9.webp",
    review:
      "Impressed with the efficiency and professionalism. The entire process was smooth and hassle-free.",
    reviewer: "Abdullah bin Mohammed Al-Saud",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls5-YrDlZM7KLNtR8JVq.webp",
    review:
      "We hired them for electrical and plumbing work during our office renovation. Everything was done perfectly, and the team was very cooperative.",
    reviewer: "Reem bint Abdulrahman Al Ghamdi",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls7-mv0DB1N2gvHK9M1J.webp",
    review:
      "Highly professional team! They delivered our project on time and with great attention to detail. Would definitely recommend them for any MEP work.",
    reviewer: "Hanan bint Khalid Al Otaib",
  },
  {
    imageUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=560,fit=crop/YrDlZMrOaPuW2xBy/blackpearls4-AMqbE9713ytwxJLP.webp",
    review:
      "Great experience working with this company. Their expertise in ducting and wiring is exceptional.",
    reviewer: "Mansour bin Saad Al Zahrani",
  },
];

export const ReviewSection: FC = () => {
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
        What our clients are saying about our company.
      </Typography>
      <Container
        sx={{
          ".swiper-button-prev,.swiper-button-next": {
            color: "transparent",
            "&:hover": {
              color: "white",
            },
          },
        }}
      >
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
                elevation={0}
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  mt: 2,
                  background: "transparent",
                }}
              >
                <Box
                  className="flex-1"
                  justifyContent="center"
                  py={8}
                  mb={5}
                  px={11}
                  rowGap={2}
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                    color: (theme) => theme.palette.common.white,
                  }}
                >
                  <Avatar
                    sx={{ width: "150px", height: "150px" }}
                    alt="Remy Sharp"
                    src={item.imageUrl}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "start",
                    }}
                  >
                    <FormatQuoteIcon />
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {item.review}
                    </Typography>
                    <FormatQuoteIcon />
                  </Box>
                  <Typography variant="h6">{`- ${item.reviewer}`}</Typography>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};
