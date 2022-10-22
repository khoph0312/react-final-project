import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContainer = styled(Container)`
  justify-content: center;
  minHeight: calc(100vh - 48px);
  background: rgb(168, 168, 168);
  background: radial-gradient(
    circle,
    rgba(168, 168, 168, 1) 0%,
    rgba(214, 214, 214, 1) 100%
  );
  padding: 16px 0;
`;

export { MainContainer };
