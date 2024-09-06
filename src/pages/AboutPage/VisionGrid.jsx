/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
import {
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import WorkIcon from "@mui/icons-material/Work";
import MoodIcon from "@mui/icons-material/Mood";

// Updated array with visionTitle and visionDescription
export const vision = [
  {
    visionTitle: "Develop Musical Talents",
    visionDescription:
      "Empowering everyone to discover and cultivate their musical abilities",
  },
  {
    visionTitle: "Vibrant Music Community",
    visionDescription:
      "Building a network where musicians inspire and support each other",
  },
  {
    visionTitle: "Accessible Music Education",
    visionDescription:
      "Providing high-quality education to help individuals express themselves through music",
  },
  {
    visionTitle: "One-Stop Music Platform",
    visionDescription:
      "Offering comprehensive resources for all a musician’s needs",
  },
  {
    visionTitle: "Successful Music Career",
    visionDescription:
      "Simplifying the path to a rewarding and successful career in music",
  },
  {
    visionTitle: "Joyful Learning Experience",
    visionDescription:
      "Making the music learning process enjoyable and impactful",
  },
];

// Same icon map
const iconMap = [
  <MusicNoteIcon />,
  <PeopleIcon />,
  <SchoolIcon />,
  <LibraryMusicIcon />,
  <WorkIcon />,
  <MoodIcon />,
];

const VisionGrid = () => {
  return (
    <Stack mt={10}>
      <Typography variant="h6" fontWeight={600} mb={4}>
        Our Vision
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {vision.map((vis, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card elevation={0}>
              <CardHeader
                avatar={<IconButton color="secondary">{iconMap[i]}</IconButton>}
                title={vis.visionTitle} // Using visionTitle for card title
                titleTypographyProps={{ fontWeight: 600 }}
              />
              <CardContent>
                <Typography variant="body2">{vis.visionDescription}</Typography>{" "}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default VisionGrid;
