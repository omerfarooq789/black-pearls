import React, { useCallback, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Button } from "@mui/material";
import { TextHookField } from "./text-hook-field";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAlert } from "../hooks";
import { AlertTypes } from "../enums";

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC<{ btnText?: string }> = ({
  btnText = "Submit",
}) => {
  const alert = useAlert();
  const validation = useMemo(
    () =>
      Yup.object().shape({
        firstName: Yup.string().required("First Name is Required"),
        lastName: Yup.string().required("Last Name is Required"),
        email: Yup.string()
          .required("Email is Required")
          .email("Invalid Email"),
        message: Yup.string().required("Message is Required"),
      }),
    []
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
      message: "Please Fillout All The Fields Before Submitting",
    });
  }, [alert]);

  const onSubmit: SubmitHandler<ContactFormInputs> = useCallback(
    (data) => {
      console.log("Form Data:", data);
      alert({
        type: AlertTypes.Success,
        message: "Form submitted successfully!",
      });
    },
    [alert]
  );

  return (
    <Grid item xs={12} md={6}>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <Grid container spacing={3} alignItems="center">
          {/* Name Field */}
          <Grid item xs={12}>
            <TextHookField
              name="firstName"
              control={control}
              required
              label="First Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextHookField
              name="lastName"
              control={control}
              label="Last Name"
              required
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextHookField
              name="email"
              control={control}
              type="email"
              label="Email"
              required
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextHookField
              name="message"
              label="Message"
              required
              control={control}
              multiline
              rows={4}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large">
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
