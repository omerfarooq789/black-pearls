import React, { useMemo } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { servicesSectionData } from "../../assets/data";
import { Trans, useTranslation } from "react-i18next";

export const AboutServices: React.FC = () => {
  const { type } = useParams();
  const { t } = useTranslation();

  const currentService = useMemo(() => {
    return servicesSectionData.data.find((item) => item.type === type);
  }, [type]);

  return (
    <>
      <Container sx={{ pt: 10 }}>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "text.primary" }}
        >
          <Trans i18nKey={`common.servicesList.${type}.descriptionLong`} />
        </Typography>
      </Container>

      <Container sx={{ py: 10 }}>
        <Typography variant="h3" textAlign="center" mb={5} fontWeight="bold">
          {t(`common.servicesList.servicesInclude`)}
        </Typography>

        <Grid container rowGap={5}>
          {currentService?.subService.map((item, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    ...(index % 2 === 0
                      ? { pr: { xs: 0, md: 12 } }
                      : { pl: { xs: 0, md: 12 } }),
                  }}
                >
                  {t(`common.servicesList.${type}.services.${item}.title`)}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    ...(index % 2 === 0
                      ? { pr: { xs: 0, md: 12 } }
                      : { pl: { xs: 0, md: 12 } }),
                  }}
                >
                  <Trans
                    i18nKey={`common.servicesList.${type}.services.${item}.description`}
                  />
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={servicesSectionData.galleryImages[index].large}
                  srcSet={`${servicesSectionData.galleryImages[index].small} 400w,${servicesSectionData.galleryImages[index].medium} 800w,${servicesSectionData.galleryImages[index].large} 1600w`}
                  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
                  alt={`${t(`common.servicesList.${type}.services.${item}.title`)} - ${index}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
