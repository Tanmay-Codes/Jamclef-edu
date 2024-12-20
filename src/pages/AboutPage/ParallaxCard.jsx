import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import founderImg from "../../assets/images/founderImg.jpg";
import pianoImg from "../../assets/images/pianoImg.jpg";
import sam from "../../assets/images/sam.png";
import trinity from "../../assets/images/trinityLogo.jpeg";
import FeatureCards from "./FeatureCards";

import { customShadows } from "../../theme";
import BannerSection from "./BannerSection";
import CultureContent from "./CultureContent";
import VisionGrid from "./VisionGrid";
const ParallaxCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        top: "-50px",
      }}
    >
      <Container>
        <Card
          sx={{
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            borderRadius: "16px",
            backgroundColor: theme.palette.background.paper,
            p: 3,
          }}
        >
          <CardContent>
            <Stack
              direction={{ md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
            >
              <Stack>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  What We Are?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    minWidth: 300,
                    maxWidth: 600,
                  }}
                >
                  <b>Jamclef</b> is a premier music education platform dedicated
                  to nurturing and honing the talents of aspiring musicians.
                  Founded on the belief that music is a universal language that
                  everyone can speak, Jamclef offers a range of expertly crafted
                  courses designed to meet the needs of learners at every stage
                  of their musical journey. Whether you’re picking up an
                  instrument for the first time or looking to refine your
                  technique, Jamclef provides a supportive environment where
                  passion meets purpose, helping you unlock your full potential.
                </Typography>
              </Stack>
              <img src={pianoImg} width={320} />
            </Stack>
            <Stack mt={10}>
              <Typography variant="h6" fontWeight={600}>
                Our Mission
              </Typography>
              <FeatureCards />
            </Stack>
            {/* About founder */}
            <Stack mt={10}>
              <Typography variant="h6" fontWeight={600} mb={4}>
                About The Founder
              </Typography>
              <Stack direction={{ md: "row" }} gap={2} alignItems={"center"}>
                <img
                  src={founderImg}
                  width={300}
                  alt="Founder images"
                  style={{ boxShadow: customShadows[2], borderRadius: 15 }}
                />
                <Card
                  sx={{ borderRadius: 3, p: 2, boxShadow: customShadows[7] }}
                >
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        minWidth: 300,
                        maxWidth: 600,
                      }}
                    >
                      <b>Sambhav Jain</b>, the visionary behind Jamclef, is a
                      seasoned guitarist with over{" "}
                      <b>10 years of music industry experience</b>, including
                      performing, working with bands, and composing. He holds a{" "}
                      <b>
                        Diploma in Music Performance from Swarnabhoomi Academy
                        of Music and a Grade 8 Certification in Rock & Pop
                        Guitar from Trinity College, London.
                      </b>{" "}
                      Mentored by esteemed teachers like Alexandre De Orio and
                      Denis Stern, Sambhav is passionate about making complex
                      musical concepts accessible and enjoyable.
                      <b>
                        {" "}
                        His mission in founding Jamclef is to simplify and
                        enrich the lives of musicians.
                      </b>
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Stack>
            {/* Logos */}
            <Stack
              direction={"row"}
              gap={2}
              justifyContent={"center"}
              mt={3}
              mb={2}
            >
              <img src={trinity} alt="trinity college of london" width={120} />
              <img src={sam} alt="SAM univ logo" width={120} />
            </Stack>
            <VisionGrid />
            <BannerSection />
            <CultureContent />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ParallaxCard;
