import { Box, Container, Stack, Typography } from "@mui/material";
import disc2 from "../../assets/images/disc2.png";
import marketingBimage from "../../assets/images/marketingB.png";
import { customShadows } from "../../theme";
const MarketingSectionB = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingBottom: 15,
        paddingTop: 25,
      }}
    >
      <Stack
        gap={7}
        width="100%"
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        paddingBottom={4}
      >
        <Stack width={{ xs: "100%", md: "500px" }}>
          <Typography variant="h4" fontWeight={600}>
            We have got the ideal teacher to guide you every step of the way!
          </Typography>
          <Typography
            variant="body"
            sx={{ marginTop: 3 }}
            fontStyle="italic"
            marginBottom={1}
          >
            Personalized lessons tailored to your needs, ensuring you achieve
            your goals faster.
          </Typography>
          <Typography variant="body">
            Whether you are preparing for an event,{" "}
            <u>diving into music theory</u>, or <u>refining your skills</u>, we
            have got you covered.
          </Typography>
        </Stack>
        <Stack sx={{ marginTop: 15 }}>
          <Box sx={{ position: "relative" }}>
            <img
              height={300}
              src={marketingBimage}
              alt="certificates"
              style={{
                filter: `drop-shadow(${customShadows[4]})`,
              }}
            />
            <img
              style={{
                position: "absolute",
                left: 0,
                top: "-90px",
                zIndex: -1,
                filter: `drop-shadow(${customShadows[4]})`,
              }}
              height={220}
              src={disc2}
              alt="disc"
              className="rotating-element"
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MarketingSectionB;
