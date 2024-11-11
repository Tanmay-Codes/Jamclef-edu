import { AlbumSection } from "./AlbumSection";
import { Footer } from "./Footer";
// import { HeroSection } from "./HeroSection";
import MarketingSectionA from "./MarketingSectionA";
import MarketingSectionB from "./MarketingSectionB";
import MarketingSectionC from "./MarketingSectionC";
import TimelineSection from "./TimelineSection";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeroSectionVideo } from "./HeroSectionVideo";

const LandingPage = () => {
  const location = useLocation();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth", // Smooth scroll behavior
      block: "start", // Align the section to the top
    });
  };
  return (
    <Box sx={{ maxWidth: "100Vw" }}>
      <Navbar
        sectionRefs={[section1Ref, section2Ref, section3Ref]}
        hadndleScrollToSection={scrollToSection}
      />
      {location.pathname == "/" && (
        <Box>
          <Box ref={section1Ref}>
            {/* <HeroSection /> */}
            <HeroSectionVideo />
          </Box>
          <AlbumSection />
          <MarketingSectionA />
          <MarketingSectionB />
          <MarketingSectionC />
          <TimelineSection section1Ref={section1Ref} />
        </Box>
      )}
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default LandingPage;
