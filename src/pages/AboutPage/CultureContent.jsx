import { Stack, Typography } from "@mui/material";
import cultureSide from "../../assets/images/cutureSide.png";
import ImageMasonry from "./ImageMasonry";
const CultureContent = () => {
  return (
    <Stack mt={10}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        direction={{ md: "row" }}
        gap={2}
        mt={5}
      >
        <Typography sx={{ maxWidth: { md: "600px" } }}>
          At Jamclef, we cultivate a vibrant and fun learning culture that goes
          beyond just music education. Our regular jam sessions between students
          and faculty foster collaboration and creativity, allowing everyone to
          experiment and grow together. We believe in celebrating achievements,
          so after completing courses, we host social events and parties to
          bring the community closer. This lively and supportive environment
          ensures that learning is not only productive but also enjoyable, with
          plenty of opportunities to connect, perform, and have fun along the
          way.
        </Typography>
        <img src={cultureSide} width={300} />
      </Stack>
      <Stack
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={10}
      >
        <ImageMasonry />
      </Stack>
    </Stack>
  );
};

export default CultureContent;
