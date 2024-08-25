import { Box, Container, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box height={"100Vh"}>
      <Container>
        <Box sx={{ marginTop: 10 }}>
          <Typography variant="h3">About</Typography>
        </Box>
      </Container>
    </Box>
  );
}
