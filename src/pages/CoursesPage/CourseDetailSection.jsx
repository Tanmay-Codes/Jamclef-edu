/* eslint-disable react/no-unescaped-entities */
import CheckIcon from "@mui/icons-material/Check";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { guitarA } from "../../../data.js";

import {
  Box,
  Chip,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// Dummy JSON data
const courseData = {
  topics: ["Guitar", "Beginner"],
};

export default function CourseDetailSection() {
  return (
    <Box sx={{ p: 4 }}>
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
        <Typography variant="h6" gutterBottom>
          What you'll learn
        </Typography>
        <Grid container spacing={2}>
          {guitarA.courseCurriculum.map((point, index) => (
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
          {guitarA.courseInclusions.map((item, index) => (
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
    </Box>
  );
}
