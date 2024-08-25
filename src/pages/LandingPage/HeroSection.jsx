import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel"; // Import Carousel library
import hero1 from "../../assets/images/hero1.jpeg";
import hero2 from "../../assets/images/hero2.jpeg";
import hero3 from "../../assets/images/hero3.jpeg";
export const HeroSection = () => {
  //   const theme = useTheme();
  const items = [
    {
      title: "Learn From The Best Teachers",
      content: "Select your prefered teachers to learn from",
      img: hero1,
    },
    {
      title: "Level up your skills with our experts",
      content: "Learn your favourite songs",
      img: hero2,
    },
    {
      title: "Live The Dream",
      content: "We prepare you for global certification courses",
      img: hero3,
    },
  ];

  return (
    <Carousel
      interval={5000} // Auto-scroll every 5 seconds
      stopAutoPlayOnHover={true} // Stops autoplay when hovered
      indicators={false} // Hides the navigation dots
      navButtonsAlwaysVisible // Always show the navigation arrows
    >
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
            // backgroundImage: `url(${item.img})`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${item.img})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff", // Text color for better contrast
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 3,
            backgroundColor: "#000", // Adding dark background
            opacity: 0.8, // Transparent background effect
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {item.title}
          </Typography>
          <Typography variant="h6" mt={2}>
            {item.content}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
};
