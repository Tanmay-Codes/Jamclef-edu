import { Box, Container } from "@mui/material";
import CourseHeader from "./CourseHeader";
import CourseDetailSection from "./CourseDetailSection";
const CourseDesc = () => {
  return (
    <Box>
      <CourseHeader />
      <Container>
        <CourseDetailSection />
      </Container>
    </Box>
  );
};

export default CourseDesc;
