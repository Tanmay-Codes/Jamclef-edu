import { Suspense, lazy } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

// Lazy load the Carousel component
const Carousel = lazy(() => import("react-material-ui-carousel"));

// Image imports - these are already static imports and do not require lazy loading
import hero1 from "../../assets/images/BannerA.JPG";
import hero2 from "../../assets/images/BannerB.JPG";
import hero3 from "../../assets/images/BannerC.JPG";

export const HeroSection = () => {
  const items = [
    {
      title: "Learn From The Best Teachers",
      content: "Select your preferred teachers to learn from",
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
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            minHeight: "60vh", // Full screen height for loader
          }}
        >
          <CircularProgress /> {/* Loader while carousel is loading */}
        </Box>
      }
    >
      <Carousel
        interval={3000} // Auto-scroll every 3 seconds
        stopAutoPlayOnHover={true} // Stops autoplay when hovered
        indicators={false} // Hides the navigation dots
        navButtonsAlwaysVisible // Always show the navigation arrows
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
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
    </Suspense>
  );
};
