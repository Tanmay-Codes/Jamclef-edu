/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import Banner from "../../components/Banner";
import contactImage from "../../assets/images/contactForm.png";
import musicalNotes from "../../assets/images/musical-notes.gif";
import { gradients } from "../../theme";
const ContactPage = () => {
  return (
    <>
      {/* Full-width Banner */}
      <Banner
        title={"Connect with Jamclef"}
        bannerHeight={"300px"}
        bannerImg={gradients.darkGradient}
      />

      {/* Contact Form and Information Section */}
      <Container maxWidth="lg" sx={{ mt: 15, mb: 25 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" gutterBottom>
                Learn and Teach Music at JamClef
              </Typography>
              <Typography paragraph>
                Whether you're a student eager to learn or a teacher passionate
                about music, JamClef is the place for you! Fill out the form and
                let us know how we can help you.
              </Typography>
            </motion.div>
            <Box sx={{ position: "relative" }}>
              <img
                src={contactImage}
                alt="learn and teach music contact us"
                width={300}
              />
              <img
                src={musicalNotes}
                alt="learn and teach music contact us"
                width={50}
                style={{ position: "absolute", top: 0, left: 50 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactPage;
