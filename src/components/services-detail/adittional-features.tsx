import React, { useMemo } from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { servicesSectionData } from "../../assets/data";
import { Trans } from "react-i18next";
import { useCustomNavigate } from "../../hooks";
import AnimatedSection from "../animation";

export const ServicesAdditionalFeatures: React.FC = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const navigate = useCustomNavigate();

  const currentService = useMemo(() => {
    return servicesSectionData.data.find((item) => item.type === type);
  }, [type]);

  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography variant="h3" mb={5} align="center">
          {t("common.servicesList.additionalFeatures")}
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {currentService?.additionalFeatures?.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimatedSection animationClass="animate-fadeIn">
                <Paper
                  elevation={3}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: 3,
                    padding: 3,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {t(
                        `common.servicesList.${type}.additionalFeatures.${item}.title`
                      )}
                    </Typography>
                    <Typography color="text.secondary" align="center">
                      {t(
                        `common.servicesList.${type}.additionalFeatures.${item}.description`
                      )}
                    </Typography>
                  </Box>
                </Paper>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AnimatedSection animationClass="animate-fadeIn">
        <Container sx={{ pb: 10, textAlign: "center" }}>
          <Typography variant="body1" pb={3}>
            <Trans i18nKey={`common.servicesList.${type}.footer.text`} />
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{ background: "black", color: "white" }}
          >
            {t("common.servicesList.contactUsBtn")}
          </Button>
        </Container>
      </AnimatedSection>
    </>
  );
};
