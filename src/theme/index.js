// src/theme.js

import { createTheme } from "@mui/material/styles";

export const customShadows = [
  "none",
  "0px 2px 4px rgba(0, 0, 0, 0.2)", // Soft shadow for buttons
  "0px 5px 10px rgba(0, 0, 0, 0.3)", // Album cards and elements
  "0px 10px 20px rgba(0, 0, 0, 0.4)", // Deeper for prominent sections
  "0px 15px 30px rgba(0, 0, 0, 0.5)", // For headers or important sections
  "0px 20px 40px rgba(0, 0, 0, 0.6)", // Strong shadows for footer
  "0px 8px 24px rgba(0,0,0,0.2)",
  "0px 10px 30px rgba(0, 0, 0, 0.1)",
];

// Gradient options for more modern feel
export const gradients = {
  lightGradient: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)", // Soft pink to light blue
  darkGradient: "linear-gradient(135deg, #1E1E1E 0%, #3A3A3A 100%)", // Subtle dark shades
  vibrantGradient: "linear-gradient(135deg, #FF5722 0%, #FF9800 100%)", // Orange gradients for accent
  softGrayGradient: "linear-gradient(135deg, #E0E0E0 0%, #F0F0F0 100%)", // Soft gray for light sections
  blueAccentGradient: "linear-gradient(135deg, #89CFF0 0%, #4682B4 100%)", // Light blue to steel blue
  mixedGradient:
    "linear-gradient(135deg, #333333 0%, #FF5722 50%, #ffffff 100%)", // Dark, orange, and white blend
  sunsetGradient: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)", // Peachy pink to soft orange
  forestGradient: "linear-gradient(135deg, #5A9216 0%, #96C93D 100%)", // Earthy green shades
  oceanGradient: "linear-gradient(135deg, #2BC0E4 0%, #EAECC6 100%)", // Aqua to soft yellow
  midnightGradient: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)", // Dark blue to cyan
  purpleDream: "linear-gradient(135deg, #C33764 0%, #1D2671 100%)", // Dark pink to deep purple
  flamingoGradient: "linear-gradient(135deg, #F54EA2 0%, #FF7676 100%)", // Hot pink to soft red
  emeraldGradient: "linear-gradient(135deg, #3D9970 0%, #2ECC71 100%)", // Deep green to emerald green
  sunriseGradient: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)", // Red-orange to deep magenta
  spaceGradient:
    "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)", // Dark spacey purple-blue tones
  rainbowGradient:
    "linear-gradient(135deg, #FF5F6D 0%, #FFC371 25%, #47A1F9 50%, #9B65DE 75%, #F57B42 100%)", // Vibrant rainbow
  duskGradient: "linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)", // Red to light blue soft dusk
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333333", // Darker tones for text and prominent elements
      contrastText: "#ffffff", // White text on dark backgrounds
    },
    secondary: {
      main: "#FF5722", // Vibrant orange accent for buttons and icons
      contrastText: "#ffffff", // White text on orange buttons
    },
    background: {
      default: "#f0f0f0", // Light gray background for the overall app
      paper: "#ffffff", // White cards and elements
      gradient: gradients.lightGradient, // Light gradient for sections
      vibrantGradient: gradients.vibrantGradient,
      blueAccentGradient: gradients.blueAccentGradient,
      mixedGradient: gradients.mixedGradient,
      lightGray: "#e0e0e0", // Lighter gray for secondary sections
      offWhite: "#fafafa", // Very light background for subtle highlights
      accent: "#B5FFFC", // Soft accent color for light-themed highlights
      blueGray: "#f2f4f7", // Blue-gray for subtle section backgrounds
    },
    text: {
      primary: "#000000", // Black text for primary content
      secondary: "#666666", // Lighter gray for secondary text
    },
  },
  typography: {
    fontFamily: "'Poppins', Arial, sans-serif", // Bold, modern sans-serif font
    h1: {
      fontWeight: 700, // Bold headers
      fontSize: "2.5rem", // Larger header size
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase", // Buttons have uppercase bold text
    },
  },
  shadows: customShadows,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // White text on dark backgrounds
      contrastText: "#000000",
    },
    secondary: {
      main: "#FF5722", // Orange accent for dark mode
      contrastText: "#ffffff", // White text on orange buttons
    },
    background: {
      default: "#121212", // Dark background for the app
      paper: "#1e1e1e", // Slightly lighter cards for contrast
      gradient: gradients.darkGradient, // Dark gradient for sections
      darkGray: "#1b1b1b", // Darker gray for accent backgrounds
      deepBlack: "#0f0f0f", // Deep black for dark sections
      accentDark: "#FF9800", // Accent orange for highlights in dark mode
      blueAccentDark: "#263238", // Dark blue-gray for section highlights
    },
    text: {
      primary: "#ffffff", // White text for primary content
      secondary: "#bbbbbb", // Gray for secondary text
    },
  },
  typography: {
    fontFamily: "'Poppins', Arial, sans-serif", // Same bold, modern font
    h1: {
      fontWeight: 700, // Bold headers in dark mode
      fontSize: "2.5rem",
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff",
    },
    button: {
      fontWeight: 600,
      textTransform: "uppercase", // Bold uppercase buttons
    },
  },
  shadows: customShadows,
});

export { lightTheme, darkTheme };
