import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import ForgetPassword from "./pages/forgetPassword";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
