import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import {
  Email,
  Instagram,
  Facebook,
  // Twitter,
  YouTube,
} from "@mui/icons-material";

import logo from "../../assets/logos/JamClefLogo.png";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222", // Dark background
        color: "white",
        textAlign: "center",
        // height: "30vh",
        padding: "2rem",
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
              <a
                href="mailto:jamclefacademyofmusic@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Email
                  color="secondary"
                  sx={{ mr: 1, verticalAlign: "middle" }}
                />
                <u>jamclefacademyofmusic@gmail.com</u>
              </a>
            </Typography>

            <Box sx={{ display: "flex", mt: 2, justifyContent: "center" }}>
              <IconButton
                color="secondary"
                href="https://www.facebook.com/profile.php?id=61568187552429&mibextid=ZbWKwL"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook fontSize="small" />
              </IconButton>

              {/* <IconButton
                color="secondary"
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter fontSize="small" />
              </IconButton> */}

              <IconButton
                color="secondary"
                href="https://www.instagram.com/jamclef_?igsh=NHRoYWkxZzRwemwy"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                color="secondary"
                href="https://youtube.com/@jamclefmusic?si=omP2EMj_YbWU14x9"
                target="_blank"
                aria-label="YouTube"
              >
                <YouTube fontSize="medium" />
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
