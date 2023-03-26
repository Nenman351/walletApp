import "../styles/otp.css";
import "../styles/login0.css";
import image from "../../../assets/images/svg/OTPInputImage.svg";
import { LoginButton } from "../styles/auth.styled";
import { useState } from "react";

function OTPInput() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="page1">
        <div className="p4-leftside">
          <img src={image} alt="otpImage" className="page1Image" />
        </div>
        <div className="rightside">
          <p className="log">Enter your OTP number</p>
          <div className="otp-div">
            <input type="text" className="otp-input" placeholder="." />
            <input type="text" className="otp-input" placeholder="." />
            <input type="text" className="otp-input" placeholder="." />
            <input type="text" className="otp-input" placeholder="." />
          </div>
          <LoginButton
            onClick={() => {
              setShow(!show);
            }}
          >
            Continue
          </LoginButton>
        </div>
      </div>
      <div
        className="modalcontainer"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="content">
          <p className="acctmodal">
            Your Account has been Successfully Verified
            <span className="span">
              <a href="" className="signup">
                continue
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default OTPInput;
