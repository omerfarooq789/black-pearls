import { FC } from "react";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const routerButtons = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "Services",
    route: "/services",
  },
  {
    text: "Projects",
    route: "/projects",
  },
  {
    text: "Contact",
    route: "/contact",
  },
];

export const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
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
          {routerButtons.map((btn, index) => (
            <Button
              key={index}
              sx={{
                mr: index < routerButtons.length - 1 ? 1 : 0,
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
              {btn.text}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
