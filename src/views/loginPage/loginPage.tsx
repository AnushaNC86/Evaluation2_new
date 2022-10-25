import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="loginPageContainer">
        <div className="logo">
          <Logo />
        </div>
        <div className="signupForm">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
