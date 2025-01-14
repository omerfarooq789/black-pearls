import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageURL } from "../../models";
import AnimatedSection from "../animation";

const projectsSectionData: {
  title: string;
  description: string;
  imageUrl: ImageURL;
}[] = [
  {
    imageUrl: {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=720,fit=crop/YrDlZMrOaPuW2xBy/63f4768f-c89d-4ab7-b6b0-693ab436e9f2-AGBnqa4Vqwtnl0J6.JPG",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=576,fit=crop/YrDlZMrOaPuW2xBy/63f4768f-c89d-4ab7-b6b0-693ab436e9f2-AGBnqa4Vqwtnl0J6.JPG",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=288,fit=crop/YrDlZMrOaPuW2xBy/63f4768f-c89d-4ab7-b6b0-693ab436e9f2-AGBnqa4Vqwtnl0J6.JPG",
    },
    title: "pages.home.projectsSection.list.first.title",
    description: "pages.home.projectsSection.list.first.description",
  },
  {
    imageUrl: {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=720,fit=crop/YrDlZMrOaPuW2xBy/img_3576-m6Lj8GvvnlTyDggq.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=576,fit=crop/YrDlZMrOaPuW2xBy/img_3576-m6Lj8GvvnlTyDggq.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=288,fit=crop/YrDlZMrOaPuW2xBy/img_3576-m6Lj8GvvnlTyDggq.webp",
    },
    title: "pages.home.projectsSection.list.second.title",
    description: "pages.home.projectsSection.list.second.description",
  },
  {
    imageUrl: {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=720,fit=crop/YrDlZMrOaPuW2xBy/untitled-design-1-AGBnql8WDDsJO5q2.png",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=576,fit=crop/YrDlZMrOaPuW2xBy/untitled-design-1-AGBnql8WDDsJO5q2.png",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=288,fit=crop/YrDlZMrOaPuW2xBy/untitled-design-1-AGBnql8WDDsJO5q2.png",
    },
    title: "pages.home.projectsSection.list.third.title",
    description: "pages.home.projectsSection.list.third.description",
  },

  {
    imageUrl: {
      large:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=720,fit=crop/YrDlZMrOaPuW2xBy/bounce-AVL1PjM23vsNjb3j.webp",
      medium:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=576,fit=crop/YrDlZMrOaPuW2xBy/bounce-AVL1PjM23vsNjb3j.webp",
      small:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=288,fit=crop/YrDlZMrOaPuW2xBy/bounce-AVL1PjM23vsNjb3j.webp",
    },
    title: "pages.home.projectsSection.list.fourth.title",
    description: "pages.home.projectsSection.list.fourth.description",
  },
];

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        {t("pages.home.projectsSection.title")}
      </Typography>
      <Typography variant="body1" gutterBottom align="center" pb={3}>
        {t("pages.home.projectsSection.description")}
      </Typography>
      <Grid container spacing={6} px={{ xs: 2, md: 8 }} justifyContent="center">
        {projectsSectionData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <AnimatedSection animationClass="animate-fadeIn">
              <Paper elevation={0} sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={item.imageUrl.large}
                  srcSet={`${item.imageUrl.small} 400w,${item.imageUrl.medium} 800w,${item.imageUrl.large} 1600w`}
                  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
                <Box className="flex-1">
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {t(item.title)}
                  </Typography>
                  <Typography color="text.secondary">
                    {t(item.description)}
                  </Typography>
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
