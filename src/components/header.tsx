import { FC, useMemo } from "react";
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { i18n } = useTranslation();

  const btnsList: {
    text: string;
    route: string;
  }[] = useMemo(() => {
    const list: {
      text: string;
      route: string;
    }[] = [
      {
        text: "common.header.home",
        route: "/",
      },
      {
        text: "common.header.services",
        route: "/services",
      },
      {
        text: "common.header.projects",
        route: "/projects",
      },
      {
        text: "common.header.contact",
        route: "/contact",
      },
    ];
    if (i18n.language === "ar") {
      return list.reverse();
    }
    return list;
  }, [i18n.language]);

  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Container>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://assets.zyrosite.com/YrDlZMrOaPuW2xBy/blackpearls-mnlv8PLLGPFO6gX3.svg"
              alt="logo"
              width={233}
              height={80}
              onClick={() => {
                if (pathname !== "/") navigate("/");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <Stack direction="row" columnGap={1} alignItems="center">
            {btnsList.map((btn, index) => (
              <Button
                key={index}
                sx={{
                  ...(btn.route === pathname && {
                    fontWeight: 600,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottom: "1px solid",
                  }),
                }}
                color="inherit"
                onClick={() => {
                  navigate(btn.route);
                }}
              >
                {t(btn.text)}
              </Button>
            ))}
            <LanguageSwitcher />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
