// import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../../../assets/images/svg/SignUpImage.svg";
import { TextInput, LoginButton } from "../styles/auth.styled";
import "../styles/login0.css";

function AccountVerification() {
  const[show, setShow] = useState(false);
  
  return (
    <div>
    <div className="page1">
      <div className="leftside">
        <img src={image} alt="signUpImage" className="leftImage" />
      </div>
      <div className="rightside">
        <p className="welcome">Welcome!</p>
        <p className="log">Sign up by entering the information below</p>
        <TextInput placeholder="first Name:" />
        <TextInput placeholder="last Name:" />
        <TextInput placeholder="Email:" />
        <TextInput placeholder="Password:" />
        <div className="sign-up">
          <p className="acct">Already have an Account?</p>
          <a href={"/"} className="signup">Login</a>
        </div>
        <LoginButton onClick={()=>{setShow(!show)}}>Sign up</LoginButton>
      </div>
    </div>
    <div className="modalcontainer" style={{display: show ? "block" : "none"}}>
      <div className="content">
        <p className="modal">
          Kindly check your mail to see your OTP number   <span className="modalspan">for Account Verification</span>
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default AccountVerification;

