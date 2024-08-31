import {
  Box,
  Stack,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import GroupIcon from "@mui/icons-material/Group";
import CareerIcon from "@mui/icons-material/WorkOutline"; // Career-related icon
import { motion } from "framer-motion";

const features = [
  {
    icon: <MusicNoteIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Make Music Education Accessible",
    description:
      "Our platform brings music education closer to students worldwide.",
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Build a Supportive Community",
    description: "We believe in creating a strong, supportive music community.",
  },
  {
    icon: <CareerIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
    title: "Simplify Music Career Paths",
    description: "Our platform offers a simplified path to a career in music.",
  },
];

const FeatureCards = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ py: 6 }}
    >
      {features.map((feature, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={index}
          style={{ width: "100%", maxWidth: 300 }}
        >
          <Card
            sx={{
              p: 1.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              backgroundColor: theme.palette.background.paper,
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box mb={2}>{feature.icon}</Box>
            <CardContent sx={{ textAlign: "center", p: 0 }}>
              <Typography
                variant="h7"
                gutterBottom
                sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Stack>
  );
};

export default FeatureCards;
