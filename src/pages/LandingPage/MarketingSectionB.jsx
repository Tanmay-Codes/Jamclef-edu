import { Container, Stack, Typography } from "@mui/material";
import marketingBimage from "../../assets/images/marketingB.png";
const MarketingSectionB = () => {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingBottom: 15,
      }}
    >
      <Stack
        gap={7}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        paddingBottom={4}
      >
        <Stack>
          <Typography variant="h4" fontWeight={600}>
            We have got the ideal teacher to guide you every step of the way!
          </Typography>
          <Typography
            variant="body"
            marginTop={3}
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
        <Stack>
          <img height={380} src={marketingBimage} alt="certificates" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default MarketingSectionB;
