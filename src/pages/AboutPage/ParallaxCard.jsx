import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Container,
  Stack,
} from "@mui/material";

const ParallaxCard = () => {
  const [scrollY, setScrollY] = useState(0);
  const theme = useTheme();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax offset for the card (faster than the banner)
  const cardParallaxOffset = -scrollY * 0.5; // Faster scroll

  return (
    <Box
      sx={{
        position: "relative",
        top: `calc(-100px + ${cardParallaxOffset}px)`, // Move faster with scroll
        zIndex: 1,
        transition: "top 0.1s ease-out",
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
            <Stack>
              <Typography
                variant="body1"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Jamclef is a premier music education platform dedicated to
                nurturing and honing the talents of aspiring musicians. Founded
                on the belief that music is a universal language that everyone
                can speak, Jamclef offers a range of expertly crafted courses
                designed to meet the needs of learners at every stage of their
                musical journey. Whether you’re picking up an instrument for the
                first time or looking to refine your technique, Jamclef provides
                a supportive environment where passion meets purpose, helping
                you unlock your full potential.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ParallaxCard;
