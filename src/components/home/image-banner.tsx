import { Box, Typography, Button, Container } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const ImageBanner: FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      py={8}
      sx={{
        height: "70vh",
        color: (theme) => theme.palette.common.white,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(
          "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=3840fit=crop/YrDlZMrOaPuW2xBy/blackpearls1-A1awx84a6qHK3489.webp"
        )`,
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        className="flex-1"
        maxWidth="md"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          rowGap: 4,
        }}
      >
        <Typography variant="h2">
          Leading MEP Contractor in Saudi Arabia
        </Typography>
        <Typography variant="body1">
          Delivering Quality HVAC, Fire Fighting, Electrical, and Plumbing
          Services.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/contact")}
          sx={{
            width: "fit-content",
            borderRadius: "50px",
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};
