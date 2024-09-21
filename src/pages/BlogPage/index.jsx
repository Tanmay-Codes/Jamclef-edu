import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BlogPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Exploring Quantum Tech",
      description: "Quantum computing is the future...",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "AI SaaS Development Tips",
      description: "Building scalable SaaS apps with AI...",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Investment Strategies in the NSE",
      description: "Understanding the Indian stock market...",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Nanotechnology in the Modern World",
      description: "Tiny tech, huge impact...",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  const featuredBlog = blogs[0];

  return (
    <Container maxWidth="lg">
      {/* Featured Blog (Current Playing Song Layout) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: theme.palette.background.gradient,
          borderRadius: "20px",
          padding: isMobile ? "1rem" : "2rem",
          marginBottom: "2rem",
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
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Box>
        <Box
          sx={{ ml: isMobile ? 0 : 4, textAlign: isMobile ? "center" : "left" }}
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
              fontSize: isMobile ? "0.875rem" : "1rem",
            }}
          >
            {featuredBlog.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component="a"
            href={`/blog/${featuredBlog.id}`}
            sx={{ mt: 2 }}
          >
            Read Now
          </Button>
        </Box>
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
            consectetur porro totam similique! Explicabo illo fugit porro quidem
            maxime perferendis! Consequatur iste, laborum dicta quo consequuntur
            assumenda doloremque quas cumque? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat sunt ullam eius similique
            voluptatibus facilis exercitationem minima itaque totam temporibus
            eaque enim laboriosam, corporis eos delectus, quas in illo? Vero!
          </Typography>
        </Stack>
        <Grid
          container
          spacing={1}
          sx={{ height: 500, overflow: "scroll", flex: 1 }}
        >
          {blogs.map((blog) => (
            <Grid item xs={12} key={blog.id}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: blog.id * 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      flex: isMobile ? "0 0 auto" : "0 0 100px",
                      marginBottom: isMobile ? "1rem" : 0,
                    }}
                  >
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Box>
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
                  <Button>read</Button>
                </Box>
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
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
  );
};

export default BlogPage;
