import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222", // Dark background
        color: "white",
        textAlign: "center",
        height: "50vh",
        padding: 10,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Music WordPress Theme
            </Typography>
            <Typography variant="body2">
              Powering your music, band, or artist website. Responsive, fast,
              and interactive.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Find Our Band
            </Typography>
            <Typography variant="body2">
              Phone: 555-2611
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
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Latest News
            </Typography>
            <Typography variant="body2">
              - Guide to Play Guitar
              <br />
              - Top Albums of the Year
              <br />- Album Review
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Listen Our Music
            </Typography>
            <Box>
              <Link href="#">
                <img
                  src="https://via.placeholder.com/150x50"
                  alt="Google Play Music"
                />
              </Link>
              <Link href="#">
                <img
                  src="https://via.placeholder.com/150x50"
                  alt="Apple Music"
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">
          Powered by Visualmodo WordPress Themes
        </Typography>
      </Box>
    </Box>
  );
};
