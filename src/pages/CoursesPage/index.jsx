import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import SwiperCore from "swiper"; // Import Swiper modules
import "swiper/css";
import "swiper/css/autoplay"; // Import autoplay styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import courseBannerA from "../../assets/images/courseBannerA.jpg";
import courseBannerB from "../../assets/images/courseBannerB.jpg";
import { CourseCard } from "../../components/CourseCard";
import {
  advancedAcousticGuitarCourse,
  advancedPianoCourse,
  beginnerPianoCourse,
  electricadvancedGuitarCourse,
  electricGuitarCourse,
  electricintermediateGuitarCourse,
  guitarA,
  intermediateAcousticGuitarCourse,
  intermediatePianoCourse,
} from "../../../data";
import { useState } from "react";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const courses = [
  guitarA.courseDetails,
  electricGuitarCourse.courseDetails,
  electricintermediateGuitarCourse.courseDetails,
  electricadvancedGuitarCourse.courseDetails,
  intermediateAcousticGuitarCourse.courseDetails,
  advancedAcousticGuitarCourse.courseDetails,
  beginnerPianoCourse.courseDetails,
  intermediatePianoCourse.courseDetails,
  advancedPianoCourse.courseDetails,
  // Add more courses as needed
];
const categories = [
  { value: "All", label: "All Categories" },
  { value: "Guitar", label: "Guitar" },
  { value: "Piano", label: "Piano" },
  { value: "Violin", label: "Violin" },
  { value: "MusicTheory", label: "Music Theory" },
];
// eslint-disable-next-line react/prop-types
const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.courseTag.includes(selectedCategory));

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
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="outlined"
              size="small"
              sx={{ width: 200 }}
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
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
            {filteredCourses.map((course, index) => (
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
