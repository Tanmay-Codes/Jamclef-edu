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
