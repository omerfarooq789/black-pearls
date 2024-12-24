import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const aboutSectionData: {
  title: string;
  description: string;
  img: string;
}[] = [
  {
    title: "About The Black Pearl",
    description:
      "As a leading MEP contractor in Saudi Arabia, we specialize in providing top-notch services in HVAC, fire fighting, electrical, and plumbing. With a proven track record of over 500 successful projects, our commitment to quality and innovation sets us apart in the industry. Our experienced team of professionals is dedicated to delivering tailored solutions that meet the unique demands of each project, ensuring safety, efficiency, and sustainability. We pride ourselves on our ability to manage complex installations while adhering to strict timelines and budgets. By leveraging the latest technologies and best practices, we strive to exceed client expectations and contribute to the growth of the infrastructure in the region. At the heart of our operations is a relentless pursuit of excellence, making us the preferred choice for MEP contracting in Saudi Arabia.",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1224&h=928",
  },
  {
    title: "Our Commitment to Quality",
    description:
      "We take pride in our exceptional MEP team, which truly sets us apart in the industry. Our commitment to delivering outstanding results is unwavering, and we prioritize understanding the specific needs of our customers. By fostering strong relationships and maintaining open lines of communication, we ensure that every project aligns with our clients' expectations. Our dedicated professionals work tirelessly to implement innovative solutions that not only meet but exceed the desired outcomes. We believe that by making a positive impact in every endeavor, we can contribute to the success of our clients and the broader community. With a focus on quality and reliability, we are determined to remain a leader in our field, driven by our passion for excellence and customer satisfaction.",
    img: "https://images.unsplash.com/photo-1665564459188-f84071695295?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxtZXAlMjBjb250cmFjdG9yfGVufDB8fHx8MTczMTAyMDk4Nnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=960",
  },
];

export const AboutSection: React.FC = () => {
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
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h2" gutterBottom fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Grid>
              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
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
