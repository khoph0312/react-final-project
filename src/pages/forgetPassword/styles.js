import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const ForgetPasswordContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1060&t=st=1660976541~exp=1660977141~hmac=b9138c00ea2b87351e1be558c1d05df645985fb0c7089bd117093d9beec8be9f");
  background-size: cover;
`;

const ForgetPasswordDetails = styled(Container)`
  width: 50vw;
  height: 50vh;
  border-radius: 16px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: white;
`;

export { ForgetPasswordContainer, ForgetPasswordDetails };
