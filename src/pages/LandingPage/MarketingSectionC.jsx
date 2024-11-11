// import { useTheme } from "@emotion/react";
// import PhoneIcon from "@mui/icons-material/Phone";
// import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import { useState } from "react";

// const MarketingSectionC = () => {
//   const theme = useTheme();
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [error, setError] = useState("");

//   const handlePhoneNumberChange = (event) => {
//     const value = event.target.value;
//     setPhoneNumber(value);

//     // Regex for validating phone numbers (simple example, adjust as needed)
//     const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[0-9\s.-]{3,}$/;
//     if (!phoneNumberRegex.test(value)) {
//       setError("Please enter a valid phone number.");
//     } else {
//       setError("");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         height: "100%",
//         backgroundImage: theme.palette.background.gradient,
//         paddingTop: 20,
//         paddingBottom: 20,
//       }}
//     >
//       <Container
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" fontWeight={600} gutterBottom>
//           New to Music learning? Talk to our Experts
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             gap: 2,
//             alignItems: "center",
//             mt: 4,
//           }}
//         >
//           <Box sx={{ position: "relative", flexGrow: 1 }}>
//             <TextField
//               label="Enter your phone number"
//               variant="outlined"
//               size="small"
//               type="tel"
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               InputProps={{
//                 startAdornment: (
//                   <PhoneIcon
//                     sx={{ color: theme.palette.text.primary, height: "20px" }}
//                   />
//                 ),
//               }}
//               fullWidth
//               error={!!error}
//             />
//             {error && (
//               <Typography
//                 variant="caption"
//                 sx={{
//                   color: "error.main",
//                   position: "absolute",
//                   bottom: -20,
//                   left: 0,
//                 }}
//               >
//                 {error}
//               </Typography>
//             )}
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: { xs: 2, sm: 0 } }}
//           >
//             Get a Call Now
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default MarketingSectionC;

import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import PhoneIcon from "@mui/icons-material/Phone";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toastify

const MarketingSectionC = () => {
  const theme = useTheme();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);

    // Simple regex to validate phone numbers
    const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[0-9\s.-]{3,}$/;
    if (!phoneNumberRegex.test(value)) {
      setError("Please enter a valid phone number.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!error && phoneNumber) {
      try {
        // Create templateParams for the email
        const templateParams = {
          phone_number: phoneNumber, // Pass phone number to the email template
        };

        // Send email using EmailJS
        await emailjs.send(
          import.meta.env.VITE_SERVICE_KEY, // Use VITE_ prefix for environment variables
          import.meta.env.VITE_TEMPLATE_ID, // Template ID
          {
            to_name: "Your Name",
            from_name: "website-call",
            from_email: "none",
            message: `Please contact for the potential query at ph no. ${templateParams.phone_number}`,
          }, // Template parameters (phone_number)
          import.meta.env.VITE_EJS_PUBLICKEY // User public key for EmailJS
        );

        // Show success toast notification
        toast.success("We'll be in touch with you soon!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      } catch (err) {
        // Show error toast notification
        toast.error("Something went wrong, please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    } else {
      // Show validation error toast
      toast.error("Please enter a valid phone number.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: theme.palette.background.gradient,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          New to Music learning? Talk to our Experts
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box sx={{ position: "relative", flexGrow: 1 }}>
            <TextField
              label="Enter your phone number"
              variant="outlined"
              size="small"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              InputProps={{
                startAdornment: (
                  <PhoneIcon
                    sx={{ color: theme.palette.text.primary, height: "20px" }}
                  />
                ),
              }}
              fullWidth
              error={!!error}
            />
            {error && (
              <Typography
                variant="caption"
                sx={{
                  color: "error.main",
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                }}
              >
                {error}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: { xs: 2, sm: 0 } }}
            onClick={handleSubmit} // Trigger email sending
          >
            Get a Call Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketingSectionC;
