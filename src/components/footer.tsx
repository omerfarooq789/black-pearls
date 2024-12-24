import React, { useCallback, useEffect, useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
  TextField,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAlert } from "../hooks";
import { AlertTypes } from "../enums";
import { useLocation } from "react-router-dom";

const services: string[] = [
  "HVAC Solutions",
  "Electrical Services",
  "Fire Safety Solutions",
  "Plumbing Solutions",
  "Safety and Security",
  "Maintenance Contracts",
];

interface UpdatesForm {
  email: string;
}

export const Footer: React.FC = () => {
  const alert = useAlert();
  const { pathname } = useLocation();
  const validation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required("Email is Required")
          .email("Invalid Email"),
      }),
    []
  );
  const { handleSubmit, control, reset } = useForm<UpdatesForm>({
    defaultValues: { email: "" },
    resolver: yupResolver(validation),
    mode: "onSubmit",
  });

  const onError = useCallback(() => {
    alert({
      type: AlertTypes.Error,
      message: "Please Provide an Email",
    });
  }, [alert]);

  const onSubmit: SubmitHandler<UpdatesForm> = useCallback(
    (data) => {
      console.log("Form Data:", data);
      alert({
        type: AlertTypes.Success,
        message: "Form submitted successfully!",
      });
    },
    [alert]
  );

  useEffect(() => {
    reset();
  }, [pathname, reset]);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=442,h=152,fit=crop/YrDlZMrOaPuW2xBy/the_black_pearls__1_-removebg-preview-YNqyewgMDBTaXVMx.webp"
              alt="Black Pearl Logo"
              width="80%"
            />
            <Typography variant="body2">
              Leading MEP contractor in Saudi Arabia since inception.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://www.facebook.com/people/The-Black-Pearls/61555944485983/"
                target="_blank"
                color="inherit"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/theblackpearlsa?igsh=MTlwaXJ1OHp6ZWtsbA%3D%3D&utm_source=qr"
                target="_blank"
                color="inherit"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/theblackpearl"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              Services
            </Typography>
            {services.map((item, index) => (
              <Box key={index}>
                <Button
                  variant="text"
                  sx={{
                    "&:hover": {
                      background: "#ffffff3d",
                    },
                  }}
                >
                  {item}
                </Button>
              </Box>
            ))}
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              Contact
            </Typography>
            <Box>
              <Typography variant="body1">Phone</Typography>
              <Link
                href="tel:+966507116423"
                target="_self"
                underline="hover"
                sx={{ color: "inherit" }}
              >
                +966 50 711 6423
              </Link>
            </Box>
            <Box>
              <Typography variant="body1">Email</Typography>
              <Link
                href="mailto:muhammadmusaffa@theblackpearlsa.com"
                target="_self"
                underline="hover"
                sx={{ color: "inherit" }}
              >
                muhammadmusaffa@theblackpearlsa.com
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              Projects
            </Typography>
            <Box>
              <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl
                      fullWidth
                      error={!!(fieldState.invalid && fieldState.error)}
                    >
                      <FormLabel
                        htmlFor={field.name}
                        sx={{
                          ...(!(fieldState.invalid && fieldState.error) && {
                            color: "white !important",
                          }),
                        }}
                      >
                        Enter your email address
                      </FormLabel>
                      <TextField
                        id={field.name}
                        fullWidth
                        {...field}
                        sx={{
                          "& .MuiInputBase-input": {
                            background: "white !important",
                            borderRadius: 1,
                          },
                        }}
                        placeholder="Your email for updates"
                        error={!!(fieldState.invalid && fieldState.error)}
                        helperText={fieldState.error?.message}
                        inputRef={field.ref}
                      />
                    </FormControl>
                  )}
                />
                <Grid item xs={12} pt={1}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} The Black Pearl SA. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
