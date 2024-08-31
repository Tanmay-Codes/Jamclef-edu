import { Box } from "@mui/material";
import AboutBanner from "./AboutBanner";
import ParallaxCard from "./ParallaxCard";

export default function AboutPage() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <AboutBanner />
      <ParallaxCard />
    </Box>
  );
}
