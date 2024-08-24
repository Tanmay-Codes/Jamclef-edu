import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel"; // Import Carousel library
export const HeroSection = () => {
  //   const theme = useTheme();
  const items = [
    {
      title: "Upcoming Dates",
      content: "Jan 03, 2019 - Charity Concert @Miami Grand Arena",
      img: "https://cdn.pixabay.com/photo/2023/04/01/01/28/piano-7891138_1280.jpg",
    },
    {
      title: "Listen to Our Music",
      content: "Latest track on SoundCloud",
      img: "https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg",
    },
    {
      title: "About Us",
      content: "Learn more about the band and our journey.",
      img: "https://cdn.pixabay.com/photo/2017/06/21/22/40/guitar-2428921_1280.jpg",
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
            backgroundImage: `url(${item.img})`,
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
