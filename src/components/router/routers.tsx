import { Routes, Route } from "react-router-dom";
import LoginPage from "../../views/loginPage/loginPage";
import RegisterPage from "../../views/registerPage/registerPage";

import SignUp from "../signUp/signUp";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default Routers;
