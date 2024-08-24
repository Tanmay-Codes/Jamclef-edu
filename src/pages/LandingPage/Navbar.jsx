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

const Navbar = () => {
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

  const drawerItems = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {["Albums", "Blog", "About", "Elements", "Contact"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const links = [
    { name: "Albums", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Elements", path: "/elements" },
    { name: "Contact", path: "/contact" },
  ];

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
              <img src={jamClefLogo} height={40} alt="logo" />
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
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                  >
                    {drawerItems}
                  </Drawer>
                </>
              ) : (
                <>
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
                </>
              )}
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
