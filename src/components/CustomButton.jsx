import { Button, useTheme } from "@mui/material";

// Validation schema
// eslint-disable-next-line react/prop-types
export default function CustomButton({ title }) {
  const theme = useTheme();
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      size="large"
      sx={{
        borderRadius: "30px",
        textTransform: "none",
        fontSize: "1rem",
        boxShadow: "0px 6px 20px rgba(0, 123, 255, 0.3)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      {title}
    </Button>
  );
}
