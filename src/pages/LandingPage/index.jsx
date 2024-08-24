import { AlbumSection } from "./AlbumSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import MarketingSectionA from "./MarketingSectionA";
import MarketingSectionB from "./MarketingSectionB";
import MarketingSectionC from "./MarketingSectionC";
import TimelineSection from "./TimelineSection";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
// import { CssBaseline } from "@mui/material";

// Hero section with carousel images, autoplay added

// Album Cards Section

// Footer Component - Refactored based on the new image

// Main Landing Page Component
const LandingPage = () => {
  return (
    <Box sx={{ maxWidth: "100Vw" }}>
      <Navbar />
      <HeroSection />
      <AlbumSection />
      <MarketingSectionA />
      <MarketingSectionB />
      <MarketingSectionC />
      <TimelineSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
