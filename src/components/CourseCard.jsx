/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export const CourseCard = ({
  courseId,
  courseTitle,
  basePrice,
  image,
  rating,
  reviews,
}) => (
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
      alt={courseTitle}
      sx={{ borderRadius: "8px 8px 0 0" }}
    />
    <CardContent sx={{ padding: 2 }}>
      <Typography
        variant="h7"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        {courseTitle}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
        {rating} ★ ({reviews} reviews)
      </Typography>
      <Typography
        variant="h7"
        sx={{ fontWeight: "bold", color: "secondary.main", marginTop: 1 }}
      >
        {basePrice}
      </Typography>
    </CardContent>
    <Link to={`${courseId}`}>
      <Button
        variant="contained"
        fullWidth
        sx={{ padding: 1, fontSize: "1rem", borderRadius: "0 0 8px 8px" }}
      >
        View Course
      </Button>
    </Link>
  </Card>
);
