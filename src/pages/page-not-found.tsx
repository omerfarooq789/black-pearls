import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const PageNotFound: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <Stack
      sx={{
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={5}
    >
      <Typography variant="h3">{t("common.pageNotExist")}</Typography>
      <Button
        href={`/${i18n.language}`}
        variant="contained"
        sx={{ background: "black", color: "white" }}
      >
        {t("common.header.home")}
      </Button>
    </Stack>
  );
};
