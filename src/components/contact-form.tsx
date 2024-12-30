import React, { useCallback, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Button } from "@mui/material";
import { TextHookField } from "./text-hook-field";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAlert } from "../hooks";
import { AlertTypes } from "../enums";
import { useTranslation } from "react-i18next";

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC<{ btnText?: string }> = ({
  btnText = "common.contactForm.btn",
}) => {
  const { t } = useTranslation();
  const alert = useAlert();
  const validation = useMemo(
    () =>
      Yup.object().shape({
        firstName: Yup.string().required(
          t("common.errors.required", {
            label: t("common.contactForm.formFields.firstName"),
          })
        ),
        lastName: Yup.string().required(
          t("common.errors.required", {
            label: t("common.contactForm.formFields.firstName"),
          })
        ),
        email: Yup.string()
          .required(
            t("common.errors.required", {
              label: t("common.contactForm.formFields.lastName"),
            })
          )
          .email(
            t("common.errors.required", {
              label: t("common.contactForm.formFields.email"),
            })
          ),
        message: Yup.string().required(
          t("common.errors.required", {
            label: t("common.contactForm.formFields.message"),
          })
        ),
      }),
    [t]
  );

  const { control, handleSubmit } = useForm<ContactFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(validation),
    mode: "onBlur",
  });

  const onError = useCallback(() => {
    alert({
      type: AlertTypes.Error,
      message: t("common.contactForm.alerts.error"),
    });
  }, [alert, t]);

  const onSubmit: SubmitHandler<ContactFormInputs> = useCallback(
    (data) => {
      console.log("Form Data:", data);
      alert({
        type: AlertTypes.Success,
        message: t("common.contactForm.alerts.success"),
      });
    },
    [alert, t]
  );

  return (
    <Grid item xs={12} md={6}>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <TextHookField
              name="firstName"
              control={control}
              required
              label={t("common.contactForm.formFields.firstName")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextHookField
              name="lastName"
              control={control}
              label={t("common.contactForm.formFields.lastName")}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextHookField
              name="email"
              control={control}
              type="email"
              label={t("common.contactForm.formFields.email")}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextHookField
              name="message"
              label={t("common.contactForm.formFields.message")}
              required
              control={control}
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "black", color: "white" }}
            >
              {t(btnText)}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
