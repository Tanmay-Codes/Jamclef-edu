import { Box, Typography, Stack } from "@mui/material";
import cultureImgB from "../../assets/images/cultureImgB.jpeg";
const BannerSection = () => {
  return (
    <Box
      sx={{
        mt: 20,
        width: "100%",
        height: "300px", // Adjust the height as needed
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cultureImgB})`, // Gradient overlay with the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff", // Assuming white text for contrast
        textAlign: "center",
        padding: 2,
        borderRadius: 5,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography
          variant="h2"
          fontWeight={600}
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font size
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Culture at JamClef
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" }, // Adjust subtitle text size for responsive
            maxWidth: "800px",
          }}
        >
          At JamClef, we believe in fostering a creative and inclusive
          environment where musicians can thrive, learn, and inspire one
          another.
        </Typography>
      </Stack>
    </Box>
  );
};

export default BannerSection;
