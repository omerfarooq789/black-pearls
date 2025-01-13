import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageURL } from "../../models";

const aboutSectionData: {
  title: string;
  description: string;
  imageUrl: ImageURL;
}[] = [
  {
    title: "pages.home.aboutSection.list.about.title",
    description: "pages.home.aboutSection.list.about.description",
    imageUrl: {
      large:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1224&h=928",
      medium:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      small:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
  },
  {
    title: "pages.home.aboutSection.list.commitment.title",
    description: "pages.home.aboutSection.list.commitment.description",
    imageUrl: {
      large:
        "https://images.unsplash.com/photo-1665564459188-f84071695295?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=960",
      medium:
        "https://images.unsplash.com/photo-1665564459188-f84071695295?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=720",
      small:
        "https://images.unsplash.com/photo-1665564459188-f84071695295?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=480",
    },
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
                src={item.imageUrl.large}
                srcSet={`${item.imageUrl.small} 400w,${item.imageUrl.medium} 800w,${item.imageUrl.large} 1600w`}
                sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
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
