//

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { menuItems } from "../../data";
import CustomAccordianMenu from "../components/CustomAccordianMenu";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout({ toggleTheme, isDarkMode }) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: { xs: "block", sm: "flex" } }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h6" ml={2}>
            Jamclef - Admin
          </Typography>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ ml: "auto", opacity: open ? 1 : 0 }}
          >
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton onClick={handleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              component={!item.subMenu && NavLink}
              to={!item.subMenu && item.path}
              onClick={() => setOpen(true)}
              key={index}
              disablePadding
              sx={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                "&.active": {
                  backgroundColor: "#aaaaaa92",
                  color: theme.palette.primary.text,
                },
                ":after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "0%",
                  height: "2px",
                  backgroundColor: theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                ":hover:after": {
                  width: "100%",
                },
              }}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1,
                }}
              >
                {open ? (
                  !item.subMenu && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon aria-label={item.title} color="primary" />
                    </ListItemIcon>
                  )
                ) : (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon color="primary" />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    item.subMenu ? (
                      <CustomAccordianMenu
                        menuTitle={item.title}
                        menuList={item.subMenu}
                        menuIcon={<item.icon color="primary" />}
                      />
                    ) : (
                      <Typography
                        sx={{ textDecoration: "none", color: "inherit" }}
                      >
                        {item.title}
                      </Typography>
                    )
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: "calc(100% - 300px)" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
