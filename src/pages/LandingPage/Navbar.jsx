/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, Link } from "react-router-dom";
import jamClefLogo from "../../assets/logos/JamClefLogo.png";
const Navbar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const drawerItems = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {links.map(({ name, path }, i) => (
          <ListItem component={Link} to={path} key={i}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        <Stack justifyContent="center" padding={2}>
          <Button variant="contained">LogIn/SignUp</Button>
        </Stack>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? theme.palette.primary.main
            : "transparent",
          transition: "background-color 0.3s ease-in-out",
          boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none",
          backdropFilter: isScrolled ? "none" : "blur(10px)",
          zIndex: 10,
        }}
      >
        <Toolbar>
          <Stack
            width="100%"
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Box>
              <Link
                to={"/"}
                onClick={() =>
                  props.hadndleScrollToSection(props.sectionRefs[0])
                }
              >
                <img src={jamClefLogo} height={40} alt="logo" />
              </Link>
            </Box>
            <Box>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    elevation={3}
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                  >
                    {drawerItems}
                  </Drawer>
                </>
              ) : (
                <Stack direction={"row"}>
                  {links.map(({ name, path }) => (
                    <Button
                      key={name}
                      component={Link}
                      to={path}
                      color="inherit"
                      sx={{
                        position: "relative",
                        textTransform: "none",
                        padding: 1,
                        "&:hover::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: theme.palette.secondary.main,
                          transform: "scaleX(1)",
                          transition: "transform 0.3s ease-in-out",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: theme.palette.secondary.main,
                          transform: "scaleX(0)",
                          transition: "transform 0.3s ease-in-out",
                        },
                        "&.active::after": {
                          transform: "scaleX(1)",
                        },
                      }}
                      className={location.pathname === path ? "active" : ""}
                    >
                      {name}
                    </Button>
                  ))}
                  <Stack justifyContent="center" padding={2}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component={Link}
                      to="/login"
                    >
                      LogIn/SignUp
                    </Button>
                  </Stack>
                </Stack>
              )}
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
