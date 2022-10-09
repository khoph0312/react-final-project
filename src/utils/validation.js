import * as yup from "yup";

const password = yup.string().required("Password is required");
const confirmPassword = yup
  .string()
  .required("Password is required")
  .oneOf([yup.ref("password"), null], "Passwords must match");

const loginValidation = yup.object().shape({
  username: yup.string().required("Username is required"),
  password,
});

const registerValidation = yup.object().shape({
  username: yup.string().required("Username is required"),
  password,
  confirmPassword,
});

const forgetPasswordValidation = yup.object().shape({
  password,
  confirmPassword,
});

const contactUsValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

export { loginValidation, forgetPasswordValidation, contactUsValidation, registerValidation };
