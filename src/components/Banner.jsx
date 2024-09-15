import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, bannerHeight, bannerImg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          height: `${bannerHeight}`,
          backgroundImage: bannerImg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Banner;
