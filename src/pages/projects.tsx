import { Box } from "@mui/material";
import { FC } from "react";
import { PageHeading, ProjectsList } from "../components";

const Projects: FC = () => {
  return (
    <Box>
      <PageHeading />
      <ProjectsList />
    </Box>
  );
};

export default Projects;
