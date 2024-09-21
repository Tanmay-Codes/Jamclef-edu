/* eslint-disable react/prop-types */
import GradeIcon from "@mui/icons-material/Grade";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Button, Stack, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import { gradients } from "../../theme";

const CourseHeader = ({ course }) => {
  console.log("Course : ", course);
  return (
    <Box>
      {/* Banner */}
      <Banner bannerHeight={"70px"} bannerImg={gradients.darkGradient} />

      {/* Main Stack */}
      <Stack
        direction={{ xs: "column", md: "row" }} // Responsive direction: column on small screens, row on medium and larger screens
        gap={{ xs: 3, md: 5 }} // Adjust gap based on screen size
        p={{ xs: 4, md: 15 }} // Responsive padding
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"auto"} // Remove fixed height for better responsiveness
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${course.courseDetails.image})`, // Gradient overlay with the background image
          backgroundSize: "cover", // Ensure the background covers the area
          backgroundPosition: "center", // Center the background image
        }}
      >
        {/* Text Stack */}
        <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"primary.contrastText"}
            textAlign={{ xs: "center", md: "left" }} // Center on small screens, left-align on larger screens
          >
            {course.courseDetails?.courseTitle}
          </Typography>

          <Typography
            color={"primary.contrastText"}
            variant="h6"
            textAlign={{ xs: "center", md: "left" }} // Responsive text alignment
          >
            {course.courseDetails?.courseSubtitle}
          </Typography>

          {/* Icon Stats */}
          <Stack
            direction={"row"}
            gap={5}
            alignItems={"center"}
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={4}
          >
            {/* Students Icon */}
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <SchoolIcon />
              <Typography color={"primary.contrastText"}>
                {course.courseDetails?.rating + " ratings"}
              </Typography>
            </Stack>

            {/* Reviews Icon */}
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <GradeIcon />
              <Typography color={"primary.contrastText"}>
                {course.courseDetails?.reviews + " reviews"}
              </Typography>
            </Stack>
          </Stack>

          {/* Register Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 5, width: { xs: "100%", sm: 200 } }} // Full-width button on small screens, fixed width on medium+
          >
            Register Now
          </Button>
        </Stack>

        {/* Image Stack */}
        {/* <Stack>
          <img
            src={guitarImg}
            alt="Guitar"
            style={{
              width: "100%", // 100% width on smaller screens
              maxWidth: 600, // Set a max width for larger screens
              height: "auto", // Maintain aspect ratio
            }}
          />
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default CourseHeader;
