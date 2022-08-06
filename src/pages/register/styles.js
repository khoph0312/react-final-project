import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const RegisterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegisterDetails = styled(Container)`
  width: 50vw;
  height: 50vh;
  border-radius: 16px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export { RegisterContainer, RegisterDetails };
