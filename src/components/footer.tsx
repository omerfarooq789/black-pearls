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
import { useAlert, useCustomNavigate } from "../hooks";
import { AlertTypes, ServicesTypes } from "../enums";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface UpdatesForm {
  email: string;
}

export const Footer: React.FC = () => {
  const { t } = useTranslation("main");
  const alert = useAlert();
  const { pathname } = useLocation();
  const navigate = useCustomNavigate();

  const validation = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required(
            t("common.errors.required", {
              label: t("common.footer.projects.field.label"),
            })
          )
          .email(t("common.errors.invalidEmail")),
      }),
    [t]
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
          <Grid item xs={12} md={6} lg={3}>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=442,h=152,fit=crop/YrDlZMrOaPuW2xBy/the_black_pearls__1_-removebg-preview-YNqyewgMDBTaXVMx.webp"
              alt="Black Pearl Logo"
              width="80%"
            />
            <Typography variant="body2">
              {t("common.footer.companyDescription")}
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

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              {t("common.footer.services.title")}
            </Typography>
            {Object.values(ServicesTypes).map((item, index) => (
              <Box key={index}>
                <Button
                  variant="text"
                  sx={{
                    "&:hover": {
                      background: "#ffffff3d",
                    },
                  }}
                  onClick={() => {
                    navigate(`/services/${item}`);
                  }}
                >
                  {t(`common.servicesList.${item}.title`)}
                </Button>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              {t("common.footer.contact.title")}
            </Typography>
            <Box>
              <Typography variant="body1">
                {t("common.contactTypes.phone")}
              </Typography>
              <Link
                href="tel:+966507116423"
                target="_self"
                underline="hover"
                sx={{ color: "inherit" }}
              >
                {t("common.phoneNum")}
              </Link>
            </Box>
            <Box>
              <Typography variant="body1">
                {t("common.contactTypes.email")}
              </Typography>
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

          <Grid item xs={12} md={6} lg={3}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              mt={3}
              mb={2}
            >
              {t("common.footer.projects.title")}
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
                          mb: 0.5,
                        }}
                      >
                        {t("common.footer.projects.field.label")}
                      </FormLabel>
                      <TextField
                        id={field.name}
                        fullWidth
                        {...field}
                        placeholder={t(
                          "common.footer.projects.field.placeholder"
                        )}
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
                    {t("common.footer.projects.field.btn")}
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
            &copy; {new Date().getFullYear()} {t("common.footer.copyWrite")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
