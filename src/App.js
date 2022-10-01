import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { CustomDrawer } from "./components";
import { MainContainer } from "./utils/baseStyles";

// pages
import Login from "./pages/login";
import Register from "./pages/register";
import ForgetPassword from "./pages/forgetPassword";
import Home from "./pages/home";
import Leaderboard from "./pages/leaderboard";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";

function App() {
  const drawer = (Element) => (
    <Box sx={{ display: "flex" }}>
      <CustomDrawer />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: "48px" }}>
        <MainContainer disableGutters maxWidth={false}>
          <Element />
        </MainContainer>
      </Box>
    </Box>
  );
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="home" element={drawer(Home)} />
      <Route path="leaderboard" element={drawer(Leaderboard)} />
      <Route path="about-us" element={drawer(AboutUs)} />
      <Route path="contact-us" element={drawer(ContactUs)} />
    </Routes>
  );
}

export default App;
