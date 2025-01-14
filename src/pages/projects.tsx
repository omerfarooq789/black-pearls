import { Box } from "@mui/material";
import { FC } from "react";
import { PageHeading, ProjectsList } from "../components";
import AnimatedSection from "../components/animation";

const Projects: FC = () => {
  return (
    <Box>
      <AnimatedSection animationClass="animate-fadeIn">
        <PageHeading />
      </AnimatedSection>
      <AnimatedSection animationClass="animate-fadeIn">
        <ProjectsList />
      </AnimatedSection>
    </Box>
  );
};

export default Projects;
