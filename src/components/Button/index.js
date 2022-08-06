import React from "react";
import { StyledButton } from "./styles";

const ButtonComponent = ({ variant = "contained", children, onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
