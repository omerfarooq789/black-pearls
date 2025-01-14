import { FC } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../animation";

const partnersList: {
  imgUrl: string;
}[] = [
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/johnson_controls-dWxyK5B1M8c897lv.png",
  },
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/daikin-mP4nK1Wq2jsxNO98.png",
  },
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/carrier-m2Wp0GE0LGh2865y.png",
  },
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/zamil-mnlvVGb1W9Cx0kL6.png",
  },
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/midea-AMqboZW7lMClzjnw.png",
  },
  {
    imgUrl:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=422,fit=crop/YrDlZMrOaPuW2xBy/gree-YlevVGb3QBTDQrW2.png",
  },
];

export const ServicesPartners: FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: 8,
        px: 5,
      }}
    >
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        {t("pages.services.partners.title")}
      </Typography>
      <Typography variant="body1" gutterBottom align="center" pb={3}>
        {t("pages.services.partners.description")}
      </Typography>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {partnersList.map((partner, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <AnimatedSection animationClass="animate-fadeIn">
                <img src={partner.imgUrl} alt="partner" width="100%" />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
