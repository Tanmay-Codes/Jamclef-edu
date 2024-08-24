import Navbar from "../../components/Navbar";
import { AlbumSection } from "./AlbumSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";

// Hero section with carousel images, autoplay added

// Album Cards Section

// Footer Component - Refactored based on the new image

// Main Landing Page Component
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AlbumSection />
      <Footer />
    </>
  );
};

export default LandingPage;
