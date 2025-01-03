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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { LanguageSwitcher } from "./language-switcher";
import { ServicesTypes } from "../enums";

export const Header: FC = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  const servicesSubMenu = [
    {
      text: "common.header.servicesList.all",
      route: "/services",
    },
    ...Object.values(ServicesTypes).map((type) => ({
      text: `common.header.servicesList.${type}`,
      route: `/services/${type}`,
    })),
  ];

  const handleNavigate = (route: string) => {
    navigate(route);
    setDrawerOpen(false);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
        >
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
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: {
                xs: "center",
                md: i18n.language === "ar" ? "end" : "start",
              },
            }}
          >
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
            <Stack
              direction="row"
              columnGap={1}
              alignItems="center"
              flexDirection={i18n.language === "ar" ? "row-reverse" : "row"}
            >
              {btnsList.map((btn, index) =>
                btn.text === "common.header.services" ? (
                  <Box key={index} sx={{ position: "relative" }}>
                    <Button
                      sx={{
                        borderRadius: 1,
                        px: "16px !important",
                        py: "6px !important",
                        ...(Boolean(anchorEl) && {
                          background: "#f5f5f5",
                        }),
                        ...(pathname.includes(btn.route) && {
                          fontWeight: 600,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                          borderBottom: "1px solid",
                        }),
                      }}
                      color="inherit"
                      onMouseEnter={handleMenuOpen}
                      onClick={() => navigate(btn.route)}
                      endIcon={
                        anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                      }
                    >
                      {t(btn.text)}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      MenuListProps={{ onMouseLeave: handleMenuClose }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      {servicesSubMenu.map((item, idx) => (
                        <MenuItem
                          key={idx}
                          onClick={() => handleNavigate(item.route)}
                        >
                          {t(item.text)}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={index}
                    sx={{
                      borderRadius: 1,
                      px: "16px !important",
                      py: "6px !important",
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
                )
              )}
              <LanguageSwitcher setDrawerOpen={setDrawerOpen} />
            </Stack>
          )}
        </Toolbar>
      </Container>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            height: "100%",
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
