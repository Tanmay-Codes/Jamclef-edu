import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { Email, Instagram, Facebook, Twitter } from "@mui/icons-material";

import logo from "../../assets/logos/JamClefLogo.png";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222", // Dark background
        color: "white",
        textAlign: "center",
        height: "30vh",
        padding: 10,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              What we do ?
            </Typography>
            <Typography variant="body2">
              We provide a supportive environment where passion meets purpose,
              helping you unlock your full potential.
            </Typography>
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Reach out to us
            </Typography>
            <Typography variant="body2">
              Phone:
              <br />
              Email: contact@musictheme.com
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" href="#">
                <i className="fab fa-facebook-f"></i>
              </IconButton>
              <IconButton color="inherit" href="#">
                <i className="fab fa-twitter"></i>
              </IconButton>
              <IconButton color="inherit" href="#">
                <i className="fab fa-instagram"></i>
              </IconButton>
            </Box>
          </Grid> */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Reach out to us
            </Typography>

            <Typography variant="body2" sx={{ color: "inherit" }}>
              <Email
                color="secondary"
                sx={{ mr: 1, verticalAlign: "middle" }}
              />
              jamclefacademyofmusic@gmail.com
            </Typography>

            <Box sx={{ display: "flex", mt: 2, justifyContent: "center" }}>
              <IconButton
                color="secondary"
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook fontSize="small" />
              </IconButton>

              <IconButton
                color="secondary"
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter fontSize="small" />
              </IconButton>

              <IconButton
                color="secondary"
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              What you get to learn
            </Typography>
            <Typography variant="body2">
              Guide to Play Guitar
              <br />
              Guide to play Keyboard
              <br />
              Guide to play drums
              <br />
              Guide to singing and composing
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Learn music with us
            </Typography>
            <Box>
              <Link href="#">
                <img src={logo} width={200} alt="Google Play Music" />
              </Link>
              <Link href="#">
                {/* <img
                  src="https://via.placeholder.com/150x50"
                  alt="Apple Music"
                /> */}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          &copy; Jamclef Ind, Inc. All rights reserved{" "}
        </Typography>
      </Box>
    </Box>
  );
};
