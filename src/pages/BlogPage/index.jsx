import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { gradients } from "../../theme";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Mastering Sheet Music Reading",
      description:
        "Learn to read sheet music effortlessly and improve your music theory skills.",
      imageUrl:
        "https://img.freepik.com/free-photo/young-man-sitting-spectacles-watches-grey-jacket-reading-copybook-with-notes-along-with-plant-white_140725-14761.jpg?t=st=1727014841~exp=1727018441~hmac=fff5477e5e4fc318f3a90f6bbe0db799a5f7dbf650e1581960c46898dd833886&w=900",
    },
    {
      id: 2,
      title: "Fingerpicking Techniques for Guitar",
      description:
        "Explore advanced fingerpicking methods to enhance your guitar playing.",
      imageUrl:
        "https://img.freepik.com/free-photo/low-angle-teacher-child-holding-guitar_23-2148524597.jpg?t=st=1727015546~exp=1727019146~hmac=c23cbeefeb59129baa58239080674da74919ee71a7597dc1cf61bcf18e5f68eb&w=900",
    },
    {
      id: 3,
      title: "Vocal Warm-Up Tips for Singers",
      description:
        "Discover essential vocal exercises to prepare your voice for any performance.",
      imageUrl:
        "https://img.freepik.com/free-photo/long-hair-artist-singing-stage_23-2148751582.jpg?t=st=1727015573~exp=1727019173~hmac=c8c6cb3d233cf2e8a59c4c4ac0b3b1f48387ed24b7a6a40d3d20106161300b09&w=740",
    },
    {
      id: 4,
      title: "Improvisation Skills for Jazz Musicians",
      description:
        "Unlock the secrets of jazz improvisation and take your solos to the next level.",
      imageUrl:
        "https://img.freepik.com/free-vector/set-two-horizontal-jazz-banners-with-view-classic-stage-with-red-curtains-musicians_1284-26771.jpg?t=st=1727015602~exp=1727019202~hmac=a9c2e9d9c45825dc65c691c18fbbca651be00e6ddc98f3af9685b596c1ee1817&w=740",
    },
    {
      id: 5,
      title: "Songwriting Techniques for Musicians",
      description:
        "Develop songwriting skills with practical tips and creative approaches.",
      imageUrl:
        "https://img.freepik.com/free-photo/woman-with-guitar-writing-down-notes_23-2148201728.jpg?t=st=1727015637~exp=1727019237~hmac=a44a5aeca6194c3ca389f7882034e96396335d710e3e374620bc193b0fe921e9&w=996",
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currActive, setCurrActive] = useState(0);
  const [featuredBlog, setFeaturedBlog] = useState(blogs[0]);
  useEffect(() => {
    setFeaturedBlog(blogs[currActive]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currActive]);
  const handleFeaturedBlogNext = () => {
    console.log("hit");
    if (currActive < blogs.length - 1) {
      setCurrActive((prev) => prev + 1);
    }
  };

  const handleFeaturedBlogPrev = () => {
    if (currActive > 0) {
      setCurrActive((prev) => prev - 1);
    }
  };

  return (
    <>
      <Box
        height={300}
        width={"100%"}
        sx={{ background: gradients.darkGradient }}
      ></Box>
      <Container sx={{ mt: -20 }} maxWidth="lg">
        {/* Featured Blog (Current Playing Song Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            background: gradients.vibrantGradient,
            borderRadius: "20px",
            padding: isMobile ? "1rem" : "2rem",
            marginBottom: "2rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <motion.div
            key={currActive} // This will trigger re-animation on key change (when the blog changes)
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              duration: 0.8,
            }}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: isMobile ? "0 0 auto" : "0 0 250px",
                marginBottom: isMobile ? "1rem" : 0,
              }}
            >
              <img
                src={featuredBlog.imageUrl}
                alt={featuredBlog.title}
                style={{ width: "100%", height: 200, borderRadius: "20px" }}
              />
            </Box>
            <Box
              sx={{
                ml: isMobile ? 0 : 4,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: isMobile ? "1.5rem" : "2rem",
                }}
              >
                {featuredBlog.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? "0.875rem" : "1rem",
                }}
              >
                {featuredBlog.description}
              </Typography>
              <Divider sx={{ borderColor: theme.palette.primary.main }} />
              <Stack
                direction={"row"}
                gap={4}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
              >
                <IconButton onClick={handleFeaturedBlogPrev}>
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton>
                  <PlayCircleFilledIcon />
                </IconButton>
                <IconButton onClick={handleFeaturedBlogNext}>
                  <SkipNextIcon />
                </IconButton>
                {/* <Button
                variant="contained"
                color="secondary"
                component="a"
                href={`/blog/${featuredBlog.id}`}
                sx={{ mt: 2 }}
              >
                <SkipPreviousIcon />
              </Button> */}
              </Stack>
            </Box>
          </motion.div>
        </motion.div>

        {/* Blog Playlist Section */}
        <Stack direction={{ md: "row" }} gap={2}>
          <Stack
            flex={2}
            p={2}
            sx={{
              background: theme.palette.background.paper,
              borderRadius: "10px",
              boxShadow: theme.shadows[2],
            }}
          >
            <Typography variant="h6">Heading Of Blog</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              consectetur porro totam similique! Explicabo illo fugit porro
              quidem maxime perferendis! Consequatur iste, laborum dicta quo
              consequuntur assumenda doloremque quas cumque? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quaerat sunt ullam eius
              similique voluptatibus facilis exercitationem minima itaque totam
              temporibus eaque enim laboriosam, corporis eos delectus, quas in
              illo? Vero!
            </Typography>
          </Stack>
          <Grid
            container
            spacing={1}
            sx={{
              height: 500,
              overflowY: "scroll", // Scroll on Y-axis
              flex: 1,
              border: "1px solid", // Add a border around the grid
              borderRadius: "10px", // Rounded corners for the grid
              borderColor: theme.palette.divider, // Optional: Using theme divider color
              "&::-webkit-scrollbar": {
                width: "4px", // Reduced scrollbar width
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.background.default, // Scrollbar track color
                borderRadius: "20px", // Rounded corners for the scrollbar track
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.secondary.main, // Scrollbar color
                // borderRadius: "4px", // Rounded scrollbar thumb
                // border: "2px solid", // Fine border around the thumb
                // borderColor: theme.palette.background.paper, // Match background color
              },
              scrollbarWidth: "thin", // For Firefox, makes scrollbar thinner
            }}
          >
            {blogs.map((blog) => (
              <Grid item xs={12} key={blog.id}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: blog.id * 0.2 }}
                >
                  <Box
                    onClick={() => {
                      setCurrActive(blog.id - 1);
                    }}
                    sx={{
                      display: "flex",
                      padding: "5px",
                      flexDirection: isMobile ? "column" : "row",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      position: "relative", // Important for play button positioning
                      "&:hover .imageOverlay": {
                        opacity: 1, // Make the play button visible on hover
                      },
                      "&:hover .blogImage": {
                        filter: "blur(5px)", // Apply blur on hover
                      },
                    }}
                  >
                    {/* Image with Blur effect on hover */}
                    <Box
                      sx={{
                        flex: isMobile ? "0 0 auto" : "0 0 100px",
                        marginBottom: isMobile ? "1rem" : 0,
                        position: "relative", // Required for overlay positioning
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="blogImage"
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          transition: "filter 0.3s ease", // Smooth transition for blur effect
                        }}
                      />

                      {/* Play Button Overlay */}
                      <Box
                        className="imageOverlay"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.palette.primary.main,
                        }}
                      >
                        <PlayCircleFilledIcon
                          color="secondary"
                          fontSize="large"
                        />
                      </Box>
                    </Box>

                    {/* Blog Details */}
                    <Box
                      sx={{
                        ml: isMobile ? 0 : 3,
                        textAlign: isMobile ? "center" : "left",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.primary.main,
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                        }}
                      >
                        {blog.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      margin: "5px",
                      borderColor:
                        currActive + 1 == blog.id
                          ? theme.palette.secondary.main
                          : "",
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Horizontal Scrolling Featured Blogs */}
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: theme.palette.text.primary,
            fontSize: isMobile ? "1.25rem" : "1.75rem",
          }}
        >
          Featured Blogs
        </Typography>
        <motion.div
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "2rem",
          }}
          whileTap={{ cursor: "grabbing" }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{
                minWidth: "300px",
                marginRight: "1.5rem",
                borderRadius: "15px",
                boxShadow: theme.shadows[3],
              }}
            >
              <Card
                sx={{
                  background: theme.palette.background.vibrantGradient,
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isMobile ? "1rem" : "1.25rem",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: isMobile ? "0.875rem" : "1rem",
                    }}
                  >
                    {blog.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </>
  );
};

export default BlogPage;
