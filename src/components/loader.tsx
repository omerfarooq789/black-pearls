import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FC } from "react";

export const Loader: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <CircularProgress sx={{ color: "black" }} />
    </Box>
  );
};
