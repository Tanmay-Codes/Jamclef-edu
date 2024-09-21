/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import CheckIcon from "@mui/icons-material/Check";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
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
} from "../../../data.js";

import {
  Box,
  Chip,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PricingComponent from "./PricingComponent.jsx";
import CourseHeader from "./CourseHeader.jsx";

// Dummy JSON data
const courseData = {
  topics: ["Guitar", "Beginner"],
};

export default function CourseDetailSection() {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const courseMapping = {
    guitar: guitarA,
    electricGuitar: electricGuitarCourse,
    intermediateGuitar: electricintermediateGuitarCourse,
    advancedGuitar: electricadvancedGuitarCourse,
    advancedAcousticGuitar: advancedAcousticGuitarCourse,
    intermediateAcousticGuitar: intermediateAcousticGuitarCourse,
    beginnerPiano: beginnerPianoCourse,
    intermediatePiano: intermediatePianoCourse,
    advancedPiano: advancedPianoCourse,
  };
  useEffect(() => {
    setCourse(courseMapping[id]);
    setLoading(false);
    console.log("course :", course);
  }, []);
  return (
    <>
      {!loading && <CourseHeader course={course} />}
      <Container>
        <Box sx={{ p: 4 }}>
          <Box mb={2}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              About this course
            </Typography>
            <Typography>
              {course && course?.courseDetails?.courseDescription}
            </Typography>
          </Box>
          {/* Explore Related Topics */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Explore related topics
            </Typography>
            {courseData.topics.map((topic, index) => (
              <Chip
                key={index}
                label={topic}
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>

          {/* What you'll learn */}
          <Box
            sx={{
              mb: 3,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              What you'll learn
            </Typography>
            <Grid container spacing={2}>
              {!loading &&
                course.courseCurriculum.map((point, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={point} />
                    </ListItem>
                  </Grid>
                ))}
            </Grid>
          </Box>

          {/* Course includes */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              This course includes
            </Typography>
            <Grid container spacing={2}>
              {!loading &&
                course.courseInclusions.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <LibraryMusicIcon color="inherit" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  </Grid>
                ))}
            </Grid>
          </Box>
          {/* Pricing Options */}
          {!loading && (
            <PricingComponent
              pricingOptions={course?.courseDetails.pricingOptions}
            />
          )}
        </Box>
      </Container>
    </>
  );
}
