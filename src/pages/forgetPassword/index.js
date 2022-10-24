import React from "react";
import { Grid } from "@mui/material";
import { ForgetPasswordContainer, ForgetPasswordDetails } from "./styles";
import { Formik, Form } from "formik";
import { forgetPasswordValidation } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { Button, Text, TextField } from "../../components";
import {performServiceCall} from '../../utils/api'

const ForgetPassword = () => {
  const navigate = useNavigate();
  const onForgetPassword = async (values) => {
    const {username, password} = values
    try {
      await performServiceCall(navigate, 'POST', 'forget', {username, password});
      alert("Password Changed");
      navigate("/");
    } catch (error) {
      alert(error)
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
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Formik
            initialValues={{ username: "", password: "", confirmPassword: "" }}
            validationSchema={forgetPasswordValidation}
            onSubmit={onForgetPassword}
          >
            {({ errors, touched, handleSubmit, values, handleChange }) => (
              <Form>
                <Grid item xs={12} sx={{ paddingTop: "20px" }}>
                  <Text variant="h2">Forget Password</Text>
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
                      type='password'
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
                      type='password'
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
