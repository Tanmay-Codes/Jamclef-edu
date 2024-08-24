import MenuIcon from "@mui/icons-material/Menu";
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import jamClefLogo from "../assets/logos/JamClefLogo.png";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  // Handle scroll event to change navbar background
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

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled
            ? theme.palette.primary.main
            : "transparent", // Change background based on scroll
          transition: "background-color 0.3s ease-in-out", // Smooth transition
          boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.3)" : "none", // Show shadow only when scrolled
          backdropFilter: isScrolled ? "none" : "blur(10px)", // Optional blur
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
            {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JaMclef
          </Typography> */}
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
                  <Button color="inherit">Albums</Button>
                  <Button color="inherit">Blog</Button>
                  <Button color="inherit">About</Button>
                  <Button color="inherit">Elements</Button>
                  <Button color="inherit">Contact</Button>
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
