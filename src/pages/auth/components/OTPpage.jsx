import "../styles/otp.css";
import "../styles/login0.css"
import image from "../../../assets/images/svg/OTPInputImage.svg"
import { LoginButton } from "../styles/auth.styled";

 function OTP(){
    return(
        <div className="page1">
            <div className="p4-leftside">
                <img src={image} alt="otpImage" />
            </div>
            <div className="rightside">
                <p className="log">Enter your OTP number</p>
                <div className="otp-div">
                    <input type="text"  className="otp-input" placeholder="-"/>
                    <input type="text"  className="otp-input" placeholder="-"/>
                    <input type="text"  className="otp-input" placeholder="-"/>
                    <input type="text"  className="otp-input" placeholder="-"/>
                </div>
                <LoginButton>Continue</LoginButton>
            </div>
        </div>
    )
 }
 export default OTP;