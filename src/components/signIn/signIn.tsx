import { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import LoginPage from "../../views/loginPage/loginPage";

const SignIn = () => {
  const [password, setPassword] = useState(false);

  const togglePassword = () => {
    setPassword(!password);
  };

  const onsubmitHandler=(e:any)=>{
    else.preventDefault();
    const mobile = e.target.
  } 

  // const existedUsers = localStorage.getItem("users") || "[]";
  // console.log("existing users:", existedUsers);

  // if (existedUsers == "[]") {
  //   localStorage.setItem("users", JSON.stringify([]));
  // }

  // const submitHandler = (e: any) => {
  //   e.preventDefault();

  //   const userName = e.target.mobileNo.value;
  //   const mPin = e.target.mPin.value;

  //   const userValues = { userName, mPin };
  //   console.log("userValues", userValues);

  //   const newData = localStorage.setItem("users", JSON.parse(userValues));
  //   console.log("new data", newData);
  // };

  return (
    <div className="signIn">
      <div className="signInHead">Sign in to your account</div>
      <div className="signInForm">
        <form className="formConatiner" onSubmit={onsubmitHandler}>
          <div className="txtField">
            <input
              type="text"
              className="mobileNo"
              placeholder="Mobile Number"
              name="mobileNo"
            />
          </div>
          <div className="txtField">
            <input
              type={password ? "text" : "password"}
              className="mPin"
              placeholder="Enter Mpin"
              name="mPin"
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt=""
              className="eyeIcon"
              onClick={togglePassword}
            />
          </div>
          <div className="forgotPassword">Forgot your password?</div>
          <div>
            <button className="btnSignIn">SIGN IN</button>
          </div>
        </form>
      </div>
      <div className="registerLink">
        Don’t have a Account?{" "}
        <Link to="/signup" className="regLink">
          SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
