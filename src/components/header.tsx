import { FC, useMemo, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  Box,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const btnsList = useMemo(() => {
    const list = [
      { text: "common.header.home", route: "/" },
      { text: "common.header.services", route: "/services" },
      { text: "common.header.projects", route: "/projects" },
      { text: "common.header.contact", route: "/contact" },
    ];
    return i18n.language === "ar" ? list.reverse() : list;
  }, [i18n.language]);

  const handleNavigate = (route: string) => {
    navigate(route);
    setDrawerOpen(false);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, width: "100%" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isSmallScreen && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ position: "absolute", left: 0 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
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
          </Box>
          {!isSmallScreen && (
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
                  onClick={() => navigate(btn.route)}
                >
                  {t(btn.text)}
                </Button>
              ))}
              <LanguageSwitcher setDrawerOpen={setDrawerOpen} />
            </Stack>
          )}
        </Toolbar>
      </Container>
      <Drawer
        anchor="left" // Open menu from the left
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%", // Full width for a fullscreen feel
            height: "100%", // Full height
            backgroundColor: "background.default",
            color: "text.primary",
          },
        }}
      >
        <Container sx={{ height: "100%" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {btnsList.map((btn, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigate(btn.route)}
                  sx={{ justifyContent: "center", textAlign: "center" }}
                >
                  <ListItemText primary={t(btn.text)} />
                </ListItemButton>
              </ListItem>
            ))}
            <Box
              sx={{ position: "absolute", bottom: "1rem", textAlign: "center" }}
            >
              <LanguageSwitcher setDrawerOpen={setDrawerOpen} />
            </Box>
          </List>
        </Container>
      </Drawer>
    </AppBar>
  );
};
