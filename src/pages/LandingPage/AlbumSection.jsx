import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export const AlbumSection = () => {
  const theme = useTheme();
  const albums = [
    { title: "Guitar", image: "https://via.placeholder.com/300x300" },
    { title: "Singing", image: "https://via.placeholder.com/300x300" },
    { title: "Keyboard", image: "https://via.placeholder.com/300x300" },
    { title: "Music Theory", image: "https://via.placeholder.com/300x300" },
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
                    <Typography gutterBottom variant="h6" component="div">
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
                    backgroundColor: theme.palette.primary.main,
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
                  <CardContent>
                    <Typography variant="h6" component="div" align="center">
                      More info about {album.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
