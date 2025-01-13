import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme, Theme } from "@mui/material/styles";
import "./App.css";
import { useTranslation } from "react-i18next";

const rtlCache = createCache({
  key: "mui-rtl",
  stylisPlugins: [rtlPlugin],
});

const ltrCache = createCache({
  key: "mui-ltr",
});

const commonTheme = {
  typography: {
    h2: {
      fontSize: "4rem",
      fontWeight: 400,
    },
    h3: {
      fontWeight: 600,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#e0e0e0",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
      },
      styleOverrides: {
        root: {
          borderRadius: "50px",
          "&.MuiButton-sizeLarge": {
            padding: "12px 25px",
            textTransform: "none",
            fontSize: "1rem",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        asterisk: () => ({
          color: "red",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => ({
          borderRadius: "8px",
          background: "white",
        }),
      },
    },
  },
};

const ltrTheme = createTheme({
  direction: "ltr",
  ...(commonTheme as unknown as Partial<Theme>),
  typography: {
    fontFamily: "OpenSans, sans-serif",
    ...commonTheme.typography,
  },
});

const rtlTheme = createTheme({
  direction: "rtl",
  ...(commonTheme as unknown as Partial<Theme>),
  typography: {
    fontFamily: "Rubik, sans-serif",
    ...commonTheme.typography,
  },
});

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  return (
    <CacheProvider value={isRtl ? rtlCache : ltrCache}>
      <ThemeProvider theme={isRtl ? rtlTheme : ltrTheme}>
        <CssBaseline />
        <div dir={isRtl ? "rtl" : "ltr"}>
          <AppRoutes />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
