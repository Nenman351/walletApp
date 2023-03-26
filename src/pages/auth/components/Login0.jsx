import image from "../../../assets/images/svg/LoginImage.svg";
import "../../auth/styles/login0.css";
import image2 from "../../../assets/images/svg/ForgotPassword.svg";
import { LoginButton, TextInput } from "../styles/auth.styled";

function Login0() {
  return (
    <div className="page1">
      <div className="leftside">
        <img src={image} alt="loginImage" className="page1Image" />
      </div>
      <div className="rightside">
        <p className="welcome">Welcome Back!</p>
        <p className="log">Log in to your Dashboard</p>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Password"/>
        <div className="down">
          <div className="remember-div">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
          <div className="forgot-div">
            <img src={image2} alt="icon" className="p1-img2" />
            <p>Forgot Password</p>
          </div>
        </div>
        <LoginButton>Login</LoginButton>
        <div className="sign-up">
          <p className="acct">Don't have an Account?</p>
          <a href={"/signup"} className="signup">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login0;
