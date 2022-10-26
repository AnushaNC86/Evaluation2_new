import { Routes, Route } from "react-router-dom";
import DashBoard from "../../views/dashboard/dasboard";
import LoginPage from "../../views/loginPage/loginPage";
import RegisterPage from "../../views/registerPage/registerPage";

const Routers = () => {
  return (
    <div className="login1">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default Routers;
