import React from "react";
import { StyledTextField } from "./styles";

const TextField = ({
  id,
  variant = "standard",
  label,
  error,
  helperText,
  onChange,
  value,
  type
}) => {
  return (
    <StyledTextField
      id={id}
      value={value}
      onChange={onChange}
      variant={variant}
      label={label}
      error={error}
      helperText={helperText}
      type={type}
    ></StyledTextField>
  );
};

export default TextField;
