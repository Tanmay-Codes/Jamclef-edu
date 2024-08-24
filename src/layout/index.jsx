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
  // necessary for content to be below app bar
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

// eslint-disable-next-line react/prop-types
export default function Layout({ toggleTheme, isDarkMode }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
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
                  backgroundColor: "#aaaaaa92", // Active background color
                  color: theme.palette.primary.text, // Optional: Active text color
                },
                ":after": {
                  content: '""', // Add an empty content element for the underline
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "0%", // Hidden by default
                  height: "2px", // Thickness of the underline
                  backgroundColor: theme.palette.primary.main, // Underline color
                  transition: "width 0.3s ease", // Transition for smooth animation
                },
                ":hover:after": {
                  width: "100%", // Expands to full width on hover
                },
              }}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 1,
                }}
                onClick={(e) =>
                  // console.log(
                  //   e.target.ariaLabel ? e.target.ariaLabel : e.target.innerText
                  // )
                  console.log(e.target)
                }
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <PrivateRoute> */}
        <Outlet />
        {/* </PrivateRoute> */}
      </Box>
    </Box>
  );
}
