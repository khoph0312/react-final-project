import React from "react";
import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import { contactUsValidation } from "../../utils/validation";
import { Button, TextField } from "../../components";

const ContactForm = () => {
  const checkError = (touched, error) => {
    return touched && error;
  };

  const onSubmitForm = () => {};
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "0 32px",
      }}
    >
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={contactUsValidation}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched, handleSubmit, values, handleChange }) => (
          <Form style={{ flex: 1 }}>
            <Grid container item xs={12}>
              <Grid item xs={6} sx={{ padding: "10px" }}>
                <TextField
                  onChange={handleChange}
                  value={values.name}
                  id="name"
                  label="Name*"
                  error={checkError(touched.name, errors.name)}
                  helperText={
                    checkError(touched.name, errors.name) ? errors.name : ""
                  }
                />
              </Grid>
              <Grid item xs={6} sx={{ padding: "10px" }}>
                <TextField
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                  label="Email*"
                  error={checkError(touched.email, errors.email)}
                  helperText={
                    checkError(touched.email, errors.email) ? errors.email : ""
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ padding: "10px" }}>
              <TextField
                onChange={handleChange}
                value={values.subject}
                id="subject"
                label="Subject"
              />
            </Grid>
            <Grid container item xs={12} sx={{ padding: "10px" }}>
              <TextField
                onChange={handleChange}
                value={values.message}
                id="message"
                label="Message*"
                error={checkError(touched.message, errors.message)}
                helperText={
                  checkError(touched.message, errors.message)
                    ? errors.message
                    : ""
                }
              />
            </Grid>
            <Grid container item xs={12} sx={{ padding: "20px 0" }}>
              <Grid item xs={12} sx={{ padding: "10px" }}>
                <Button onClick={handleSubmit}>Submit Form</Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default ContactForm;
