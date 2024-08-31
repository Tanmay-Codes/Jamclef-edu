import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import backImage from "../../assets/images/aboutBanner.jpg";
const AboutBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax offset for banner (slower than the card)
  const bannerParallaxOffset = scrollY * 0.2; // Adjust speed (slower)

  return (
    <Box
      sx={{
        width: "100%",
        height: "60vh",
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        transform: `translateY(${bannerParallaxOffset}px)`, // AboutBanner moves slower
        transition: "transform 0.1s ease-out",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <Typography
          variant="h2"
          align="center"
          sx={{
            color: theme.palette.common.white,
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: theme.palette.common.white,
            mt: 2,
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
          }}
        >
          Welcome to JamClef – Where music connects students and teachers
        </Typography> */}
      </motion.div>
    </Box>
  );
};

export default AboutBanner;
