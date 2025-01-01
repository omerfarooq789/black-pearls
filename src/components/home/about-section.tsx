import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const aboutSectionData: {
  title: string;
  description: string;
  img: string;
}[] = [
  {
    title: "pages.home.aboutSection.list.about.title",
    description: "pages.home.aboutSection.list.about.description",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1224&h=928",
  },
  {
    title: "pages.home.aboutSection.list.commitment.title",
    description: "pages.home.aboutSection.list.commitment.description",
    img: "https://images.unsplash.com/photo-1665564459188-f84071695295?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=960",
  },
];

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 10 }}>
      <Grid container rowGap={5}>
        {aboutSectionData.map((item, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            direction={index / 2 == 0 ? "row" : "row-reverse"}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  ...(index / 2 == 0
                    ? {
                        pr: { xs: 0, md: 12 },
                      }
                    : {
                        pl: { xs: 0, md: 12 },
                      }),
                }}
              >
                {t(item.title)}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  ...(index / 2 == 0
                    ? {
                        pr: { xs: 0, md: 12 },
                      }
                    : {
                        pl: { xs: 0, md: 12 },
                      }),
                }}
              >
                {t(item.description)}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={item.img}
                alt={t(item.title)}
                sx={{ width: "100%", height: "auto", borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
