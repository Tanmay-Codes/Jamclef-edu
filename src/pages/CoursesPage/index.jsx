import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import SwiperCore from "swiper"; // Import Swiper modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import courseBannerA from "../../assets/images/courseBannerA.jpg";
import courseBannerB from "../../assets/images/courseBannerB.jpg";
import { motion } from "framer-motion";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const courses = [
  {
    title: "Guitar Mastery for Beginners",
    instructor: "John Doe",
    price: "₹3,999",
    image:
      "https://img.freepik.com/free-photo/medium-shot-sideways-father-playing-guitar_23-2148222865.jpg?t=st=1725649731~exp=1725653331~hmac=a14aa4f3abd69530ec769ee3bea0e5b039a566c7806c019fabfcd1afa61a7829&w=996",
    rating: 4.7,
    reviews: 457,
  },
  {
    title: "Piano Essentials for All Ages",
    instructor: "Jane Smith",
    price: "₹4,499",
    image:
      "https://img.freepik.com/free-photo/portrait-person-playing-music-piano_23-2151051661.jpg?t=st=1725649795~exp=1725653395~hmac=b21f6035edf116553ad5a9f3f47deff00794dd83a764cd74689a63e7935732a8&w=996",
    rating: 4.8,
    reviews: 520,
  },
  // Add more courses as needed
];

// eslint-disable-next-line react/prop-types
const CourseCard = ({ title, instructor, price, image, rating, reviews }) => (
  <Card
    sx={{
      maxWidth: 345,
      borderRadius: 2,
      boxShadow: 3,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: 6,
      },
    }}
  >
    <CardMedia
      component="img"
      height="180"
      image={image}
      alt={title}
      sx={{ borderRadius: "8px 8px 0 0" }}
    />
    <CardContent sx={{ padding: 2 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
        {instructor} | {rating} ★ ({reviews} reviews)
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "secondary.main", marginTop: 1 }}
      >
        {price}
      </Typography>
    </CardContent>
    <Button
      variant="contained"
      fullWidth
      sx={{ padding: 1, fontSize: "1rem", borderRadius: "0 0 8px 8px" }}
    >
      View Course
    </Button>
  </Card>
);

const CoursesPage = () => {
  return (
    <>
      {/* Carousel Section */}
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay added
        loop={true}
        pagination={{ clickable: true }}
        style={{
          marginBottom: "40px",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${courseBannerB})`, // Gradient overlay with the background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center",
              padding: 8,
            }}
          >
            <Stack mt={5} mb={5}>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Master Any Instrument with JamClef
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", marginTop: 2 }}>
                Discover a wide range of courses on Guitar, Piano, Violin, and
                Music Theory!
              </Typography>
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${courseBannerA})`, // Gradient overlay with the background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              textAlign: "center",
              padding: 8,
            }}
          >
            <Stack mt={5} mb={5}>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Learn Music Theory from Experts
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", marginTop: 2 }}>
                Gain deep insights into music composition, harmony, and rhythm!
              </Typography>
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Container sx={{ mb: 5 }}>
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <TextField
              label="Search courses"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ marginRight: 2, flexGrow: 1, maxWidth: 600 }}
            />
            <Select
              defaultValue="All"
              variant="outlined"
              size="small"
              sx={{ width: 200 }}
            >
              <MenuItem value="All">All Categories</MenuItem>
              <MenuItem value="Guitar">Guitar</MenuItem>
              <MenuItem value="Piano">Piano</MenuItem>
              <MenuItem value="Violin">Violin</MenuItem>
              <MenuItem value="MusicTheory">Music Theory</MenuItem>
            </Select>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Courses Section */}
          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <CourseCard {...course} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </>
  );
};

export default CoursesPage;
