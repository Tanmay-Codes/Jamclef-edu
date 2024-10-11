import { Box } from "@mui/material";
import LoginSignUpCard from "./LoginSignUpCard";
import "./pattern.css";
import jamclef from "../../assets/images/aboutBanner.jpg";
const Signup = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "auto",
        display: "flex",
      }}
    >
      {/* <div className="pattern"></div> */}
      <Box
        flex={1}
        sx={{
          backgroundImage: `url(${jamclef})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <LoginSignUpCard />
      </Box>
    </Box>
  );
};

export default Signup;
