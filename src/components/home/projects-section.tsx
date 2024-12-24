import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const projectsSectionData: {
  title: string;
  description: string;
  imageUrl: string;
}[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1563164232-b6ee5dd3e821?auto=format&fit=crop&w=1006&h=720",
    title: "Factory, industrial area 4, Jeddah",
    description:
      "We delivered a complete internal cabling solution for facility, ensuring seamless connectivity and operational efficiency.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1584443348278-4789e86c7373?auto=format&fit=crop&w=1006&h=720",
    title: "MAERSK, MINA",
    description:
      "We completed a high quality HVAC ducting installation, adhering to SMACNA standards to ensure optimal performance and compliance.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1524685364536-a6f820f6c5ce?auto=format&fit=crop&w=1006&h=720",
    title: "MOI Sports Center, Dahban",
    description:
      "Our expertise was showcased in the MEP project focusing on HVAC and fire fighting systems.",
  },

  {
    imageUrl:
      "https://images.unsplash.com/photo-1516739089214-59baa011fdb9?auto=format&fit=crop&w=1006&h=720",
    title: "Bounce Inc.",
    description:
      "We provided comprehensive HVAC services, ensuring a comfortable and controlled environment",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
        Projects section
      </Typography>
      <Typography variant="body1" gutterBottom align="center" pb={3}>
        Provide a short summary of your recent projects, highlighting the most
        important things.
      </Typography>
      <Grid container spacing={6} px={8} justifyContent="center">
        {projectsSectionData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={0} sx={{ overflow: "hidden" }}>
              <Box
                component="img"
                src={item.imageUrl}
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
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
