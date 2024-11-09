import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import heroVideo from "../../assets/video/heroVideo.mp4";

export const HeroSectionVideo = () => {
  const items = [
    {
      title: "Learn From The Best Teachers",
      content: "Select your preferred teachers to learn from",
    },
    {
      title: "Level up your skills with our experts",
      content: "Learn your favourite songs",
    },
    {
      title: "Live The Dream",
      content: "We prepare you for global certification courses",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "60vh",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Keeps video behind other elements
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1, // Ensures overlay is above the video
        }}
      >
        {/* Carousel with text content */}
        <Carousel
          interval={3000}
          stopAutoPlayOnHover={true}
          indicators={false}
          //   navButtonsAlwaysVisible
          sx={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Extra dark overlay for text readability
          }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                // padding: "20px",
                borderRadius: "8px",
                margin: "auto",
                width: "100%", // Centers and restricts carousel width
                height: "100%",
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
      </Box>
    </Box>
  );
};
