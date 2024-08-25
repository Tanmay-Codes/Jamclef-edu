import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import guitar from "../../assets/images/guitar.jpg";
import vocals from "../../assets/images/vocals.jpg";
import piano from "../../assets/images/piano.jpg";
import musicTheory from "../../assets/images/musicTheory.jpg";
export const AlbumSection = () => {
  const theme = useTheme();
  const albums = [
    {
      title: "Guitar",
      image: guitar,
      content:
        "Master the guitar and express your unique musical voice with our expertly guided course, perfect for all levels",
    },
    {
      title: "Vocals",
      image: vocals,
      content:
        "Enhance your vocal prowess across diverse genres with our Western Vocals course, tailored to bring out the best in your voice",
    },
    {
      title: "Piano",
      image: piano,
      content:
        "Unlock your potential with our piano course, where you will learn to play and create music with confidence and finesse",
    },
    {
      title: "Music Theory",
      image: musicTheory,
      content:
        "Deepen your understanding of music with our comprehensive Music Theory course, designed to elevate your musicianship",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: theme.palette.background.offWhite,
        justifyContent: "center",
        alignItems: "center",
        perspective: "1000px", // Add perspective for the 3D effect
        paddingTop: 10, // Increase padding at the top
        paddingBottom: 18, // Increase padding at the bottom
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="inherit"
          mb={10}
        >
          Popular Courses
        </Typography>
        <Grid container spacing={4}>
          {albums.map((album, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "280px", // Specify a fixed height for the card
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  "&:hover": {
                    transform: "rotateY(180deg)", // Flip the card on hover
                  },
                }}
              >
                {/* Front of the card */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden", // Hide back face when not flipped
                    borderRadius: "16px",
                  }}
                  elevation={2}
                >
                  <CardMedia
                    component="img"
                    image={album.image}
                    alt={album.title}
                    sx={{ height: "100%", borderRadius: "16px 16px 0 0" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3">
                      {album.title}
                    </Typography>
                  </CardContent>
                </Card>

                {/* Back of the card */}
                <Card
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundImage: theme.palette.background.gradient,
                    color: theme.palette.primary.contrastText,
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden", // Hide front face when flipped
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  elevation={2}
                >
                  <CardContent sx={{ padding: 2 }}>
                    <Stack>
                      <Typography variant="h6" color={"primary"}>
                        {album.content}
                      </Typography>
                      <Button color="secondary" sx={{ marginTop: 1 }}>
                        Learn More
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                {album.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
