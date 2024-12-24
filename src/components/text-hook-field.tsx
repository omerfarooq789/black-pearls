import React, { ChangeEvent, ReactElement, useCallback } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
} from "react-hook-form";

import {
  FormControl,
  FormLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";

export interface TextHookFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control?: Control<TFieldValues>;
  name: TName;
  defaultValue?: PathValue<TFieldValues, TName> | undefined;
}

export const TextHookField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  fullWidth = true,
  helperText,
  defaultValue,
  label,
  disabled,
  ...restProps
}: TextFieldProps & TextHookFieldProps<TFieldValues, TName>): ReactElement => {
  const {
    field: { ref, onChange, onBlur, value, ...restField },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue,
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.value;

      if (restProps.onChange) {
        restProps.onChange(e);
      }

      if (restProps.type === "number") {
        return onChange(targetValue || null);
      }
      return onChange(targetValue);
    },
    [restProps, onChange]
  );

  const handleBlur = useCallback(() => {
    if (value && restProps.type !== "number") {
      onChange(value?.trim());
    }
    onBlur();
  }, [onBlur, onChange, restProps, value]);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "number") {
      target.blur();
    }
  }, []);

  return (
    <FormControl
      disabled={disabled}
      required={restProps.required}
      fullWidth={fullWidth}
      error={!!(fieldState.invalid && fieldState.error)}
      sx={{
        "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#00000080 !important",
        },
      }}
    >
      {label ? (
        <FormLabel
          sx={{
            color: (theme) => theme.palette.common.black,
            ".MuiFormLabel-asterisk": {
              color: "red",
            },
          }}
          htmlFor={name}
        >
          {label}
        </FormLabel>
      ) : null}
      <TextField
        id={name}
        fullWidth={fullWidth}
        {...restProps}
        {...restField}
        value={value ?? ""}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borederColor: (theme) => `${theme.palette.common.black} !important`,
          },
        }}
        onBlur={handleBlur}
        disabled={disabled}
        aria-readonly={disabled}
        aria-disabled={disabled}
        error={!!(fieldState.invalid && fieldState.error)}
        helperText={fieldState.error?.message ?? helperText}
        inputRef={ref}
        onWheelCapture={handleWheel}
      />
    </FormControl>
  );
};
