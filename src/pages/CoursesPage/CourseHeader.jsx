import GradeIcon from "@mui/icons-material/Grade";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Button, Stack, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import { gradients } from "../../theme";
import guitarImg from "../../assets/images/guitarCourseA.png";
import { guitarA } from "../../../data.js";

const CourseHeader = () => {
  return (
    <Box>
      <Banner bannerHeight={"70px"} bannerImg={gradients.darkGradient} />
      <Stack
        direction={{ md: "row" }}
        gap={5}
        p={15}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"70vh"}
        sx={{ backgroundImage: gradients.vibrantGradient }}
      >
        <Stack>
          <Typography
            variant="h3"
            fontWeight={600}
            color={"primary.contrastText"}
          >
            {guitarA.courseDetails.courseTitle}
          </Typography>
          <Typography color={"primary.contrastText"} variant="h6">
            {guitarA.courseDetails.courseTitle}
          </Typography>
          <Stack direction={"row"} gap={5} alignItems={"center"} mt={4}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
            >
              <SchoolIcon />
              <Typography color={"primary.contrastText"}>
                100+ Students
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
            >
              <GradeIcon />
              <Typography color={"primary.contrastText"}>
                4.9 (250 reviews)
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 10, width: 200 }}
          >
            Register Now
          </Button>
        </Stack>
        <Stack>
          <img src={guitarImg} alt="Guitar" width={600} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CourseHeader;
