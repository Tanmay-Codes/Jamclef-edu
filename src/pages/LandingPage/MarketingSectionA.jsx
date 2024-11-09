import { Container, Stack, Typography } from "@mui/material";
import marketingAimage from "../../assets/images/marketingA.png";
import { customShadows } from "../../theme";
const MarketingSectionA = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 10,
      }}
    >
      <Stack
        gap={7}
        width="100%"
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack>
          <img
            height={400}
            width={300}
            src={marketingAimage}
            style={{ filter: `drop-shadow(${customShadows[4]})` }}
            alt="certificates"
          />
        </Stack>
        <Stack width={{ xs: "100%", md: "500px" }}>
          <Typography variant="h4" fontWeight={600}>
            Confidently prepare for global certification courses.
          </Typography>
          <Typography
            variant="body"
            sx={{ marginTop: 3 }}
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
