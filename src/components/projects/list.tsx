// src/components/SolutionsSection.tsx

import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";

const solutions = [
  {
    title: "HVAC Solutions",
    description: "Expert installation and maintenance for optimal performance.",
    images: [
      "https://images.unsplash.com/photo-1640184713822-174b6e94df51?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1006&h=720",
      "https://images.unsplash.com/photo-1622467731046-c22f11a94cbb?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1006&h=720",
    ],
    buttonText: "Learn",
  },
  {
    title: "Fire Fighting",
    description:
      "Comprehensive systems ensuring safety and compliance standards.",
    images: [
      "https://images.unsplash.com/photo-1640184713828-e48c36a3ded8?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMnx8bWVwJTIwY29udHJhY3RvcnxlbnwwfHx8fDE3MzEwMjA5ODZ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1006&h=720",
      "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMHx8bWVwJTIwY29udHJhY3RvcnxlbnwwfHx8fDE3MzEwMjA5ODZ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1006&h=720",
    ],
    buttonText: "Explore",
  },
];

export const ProjectsList: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" sx={{ padding: 4 }}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ borderRadius: 4, boxShadow: 0 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="320"
                    image={solution.images[0]}
                    alt={`${solution.title} Image 1`}
                    sx={{ borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="320"
                    image={solution.images[1]}
                    alt={`${solution.title} Image 2`}
                    sx={{ borderRadius: "8px" }}
                  />
                </Grid>
              </Grid>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    fontWeight="bold"
                  >
                    {solution.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {solution.description}
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "50px",
                    textTransform: "none",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  {solution.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
