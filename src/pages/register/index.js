import React from "react";
import { Grid } from "@mui/material";
import { RegisterContainer, RegisterDetails } from "./styles";
import { Formik, Form } from "formik";
import { loginValidation } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { Button, Text, TextField } from "../../components";

const requestHeader = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  // body: JSON.stringify({ name: "test", password: "testpassword" }),
};

const Register = () => {
  const navigate = useNavigate();
  const onLogin = async (values) => {
    const { username, password } = values;
    const registerHeader = {
      ...requestHeader,
      body: JSON.stringify({ username, password }),
    };
    try {
      await fetch("http://localhost:5000/register", registerHeader).then(
        (res) =>
          res.json().then((data) => {
            console.log(data);
          })
      );
      navigate("/home");
    } catch (error) {
      console.error("Error while registering user: ", error);
      alert("Wrong username or password.");
    }
  };
  const checkError = (touched, error) => {
    if (touched && error) {
      return true;
    }
    return false;
  };
  return (
    <RegisterContainer maxWidth={false}>
      <RegisterDetails>
        <Grid container justifyContent={"center"} sx={{ textAlign: "center" }}>
          <Formik
            initialValues={{ username: "", password: "", confirmPassword: "" }}
            validationSchema={loginValidation}
            onSubmit={onLogin}
          >
            {({ errors, touched, handleSubmit, values, handleChange }) => (
              <Form>
                <Grid item xs={12} sx={{ paddingTop: "20px" }}>
                  <Text variant={"h2"}>Register</Text>
                </Grid>
                <Grid container item xs={12} sx={{ padding: "20px 0" }}>
                  <Grid item xs={12} sx={{ padding: "10px" }}>
                    <TextField
                      onChange={handleChange}
                      value={values.username}
                      id="username"
                      label="Username"
                      error={checkError(touched.username, errors.username)}
                      helperText={
                        checkError(touched.username, errors.username)
                          ? errors.username
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ padding: "10px" }}>
                    <TextField
                      onChange={handleChange}
                      value={values.password}
                      id="password"
                      label="Password"
                      error={checkError(touched.password, errors.password)}
                      helperText={
                        checkError(touched.password, errors.password)
                          ? errors.password
                          : ""
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ padding: "10px" }}>
                    <TextField
                      onChange={handleChange}
                      value={values.confirmPassword}
                      id="confirmPassword"
                      label="Confirm Password"
                      error={checkError(
                        touched.confirmPassword,
                        errors.confirmPassword
                      )}
                      helperText={
                        checkError(
                          touched.confirmPassword,
                          errors.confirmPassword
                        )
                          ? errors.confirmPassword
                          : ""
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container item xs={12} sx={{ padding: "20px 0" }}>
                  <Grid item xs={12} sx={{ padding: "10px" }}>
                    <Button onClick={handleSubmit}>Register</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </RegisterDetails>
    </RegisterContainer>
  );
};

export default Register;
