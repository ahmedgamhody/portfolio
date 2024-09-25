import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ModeChange } from "../../context/ModeContext";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

//
// const navItems = ["Home", "About", "Projects", "Contact"];
const navItems = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "About",
    path: "/about",
  },
  {
    name: "Experience",
    path: "/experience",
  },

  {
    name: "Projects",
    path: "/projects",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const drawerWidth = 240;
export default function Header() {
  const theme = useTheme();
  const mode = React.useContext(ModeChange);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        pt: 3,
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          transition: "0.4s",
          "&:hover": { color: "red", rotate: "90deg" },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        variant="h6"
        component={Link}
        to={"/"}
        fontWeight={"bold"}
        sx={{
          my: 2,
          textDecoration: "none",
          color: theme.palette.text.primary,
        }}
      >
        GAM
      </Typography>
      <Divider sx={{ pt: 2 }} />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            component={NavLink}
            to={item.path}
            sx={{
              "&:hover": {
                color: "rgb(20 184 166)",
                transition: "0.3s",
              },
              "&.active": {
                color: "rgb(20 184 166)",
                fontWeight: "bold",
              },
              color: theme.palette.text.primary,
            }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none !important",
        backgroundColor: theme.palette.mainBackground[theme.palette.mode],
        backgroundImage: "none",
        color: theme.palette.text.primary,
        pt: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          size="small"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Tooltip title="Home" placement="bottom-start">
          <Typography
            variant="h5"
            component={Link}
            to={"/"}
            color={theme.palette.text.primary}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "900",
              textDecoration: "none",
            }}
          >
            GAM
          </Typography>
        </Tooltip>
        <Box sx={{ display: { xs: "none", sm: "block", flexGrow: 1 } }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              component={NavLink}
              to={item.path}
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: "rgb(20 184 166)",
                },
                "&.active": {
                  color: "rgb(20 184 166)",
                  fontWeight: "bold",
                },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Tooltip title="Mode" placement="bottom">
          <Box
            sx={{
              borderRadius: "50%",
              border: `3px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.mode === "dark" && "#252529",
            }}
          >
            <IconButton
              color="inherit"
              size="small"
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                theme.palette.mode === "dark"
                  ? mode.setMode("light")
                  : mode.setMode("dark");
              }}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon sx={{ color: "gold" }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Tooltip>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
