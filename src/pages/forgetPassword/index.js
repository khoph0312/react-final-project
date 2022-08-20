import React from "react";
import { Grid } from "@mui/material";
import { ForgetPasswordContainer, ForgetPasswordDetails } from "./styles";
import { Formik, Form } from "formik";
import { forgetPasswordValidation } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { Button, Text, TextField } from "../../components";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const onForgetPassword = async (values) => {
    try {
      // const registerResult = await registerUser({ username, password });
      // console.log(registerResult);
      alert("Password Changed");
      navigate("/login");
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
    <ForgetPasswordContainer maxWidth={false}>
      <ForgetPasswordDetails>
        <Grid container justifyContent={"center"} sx={{ textAlign: "center" }}>
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={forgetPasswordValidation}
            onSubmit={onForgetPassword}
          >
            {({ errors, touched, handleSubmit, values, handleChange }) => (
              <Form>
                <Grid item xs={12} sx={{ paddingTop: "20px" }}>
                  <Text variant={"h2"}>Forget Password</Text>
                </Grid>
                <Grid container item xs={12} sx={{ padding: "20px 0" }}>
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
                    <Button onClick={handleSubmit}>Forget Password</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </ForgetPasswordDetails>
    </ForgetPasswordContainer>
  );
};

export default ForgetPassword;
