import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
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
      <Paper elevation={0} sx={{ p: 4 }}>
        <Grid container rowGap={3}>
          {aboutSectionData.map((item, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              direction={index / 2 == 0 ? "row" : "row-reverse"}
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h2" gutterBottom fontWeight="bold">
                  {t(item.title)}
                </Typography>
                <Typography variant="body1" color="text.secondary">
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
      </Paper>
    </Container>
  );
};
