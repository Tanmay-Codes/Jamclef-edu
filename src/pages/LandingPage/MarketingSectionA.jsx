import { Container, Stack, Typography } from "@mui/material";
import marketingAimage from "../../assets/images/marketingA.png";
const MarketingSectionA = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: 15,
      }}
    >
      <Stack
        padding={4}
        gap={7}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack>
          <img height={400} src={marketingAimage} alt="certificates" />
        </Stack>
        <Stack padding={2}>
          <Typography variant="h4" fontWeight={600}>
            Confidently prepare for global certification courses.
          </Typography>
          <Typography
            variant="body"
            marginTop={3}
            fontStyle="italic"
            marginBottom={1}
          >
            Unlock your potential with expert guidance and comprehensive
            resources.
          </Typography>
          <Typography variant="body">
            We equip you for a range of certification courses, including{" "}
            <u>Trinity</u>, <u>ABRSM</u>, and <u> Rockschool</u>.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MarketingSectionA;
