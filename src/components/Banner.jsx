import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { gradients } from "../theme";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          height: "300px",
          backgroundImage: gradients.darkGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Connect with JamClef
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Banner;
