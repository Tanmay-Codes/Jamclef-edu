import { Box, Paper, TextField, useTheme } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import CustomButton from "../../components/CustomButton";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const theme = useTheme(); // Access the theme to get primary color
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "12px",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors }) => (
            <Form>
              <Box sx={{ mb: 3 }}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.name && touched.name)}
                  helperText={<ErrorMessage name="name" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: theme.palette.background.default,
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.email && touched.email)}
                  helperText={<ErrorMessage name="email" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: theme.palette.background.default,
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.message && touched.message)}
                  helperText={<ErrorMessage name="message" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: theme.palette.background.default,
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                />
              </Box>

              <CustomButton title={"Send Message"} />
            </Form>
          )}
        </Formik>
      </Paper>
    </motion.div>
  );
};

export default ContactForm;
