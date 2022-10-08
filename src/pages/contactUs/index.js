import React from "react";
import { Typography, Box } from "@mui/material";
import ContactForm from "./contactForm";

const ContactUs = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, alignItems: "center", flexDirection: 'column', padding: '16px' }}>
      <Typography variant="h3">Contact Us</Typography>
      <Typography variant='h5'>
        If you have any questions or suggestion for our website, leave a message
        here. We will get back to you shortly.
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default ContactUs;
