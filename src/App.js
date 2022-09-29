import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import ForgetPassword from "./pages/forgetPassword";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
