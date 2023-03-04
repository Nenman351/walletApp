import image from "../../../assets/images/svg/ForgotPassword2.svg";
import reset from "../../../assets/images/svg/reset-two.svg"
import { RightHalf,LoginButton } from "../styles/auth.styled";
import "../styles/login0.css";
import "../styles/otp.css";


function OTPINPUT(){
    return(
        <div className="page1">
            <div className="leftside">
                <img src={image} alt="" className="page1Image" />
            </div>
            <RightHalf>
                <div className="reset-image">
                    <img src={reset} alt="" className="image-two" />
                </div>
                <p className="text-">Enter your OTP number</p>
                <div className="otp-div">
                <input type="text"  className="otp-input2" placeholder="."/>
                <input type="text"  className="otp-input2" placeholder="."/>
                <input type="text"  className="otp-input2" placeholder="."/>
                <input type="text"  className="otp-input2" placeholder="."/>
                </div>
                <LoginButton>Continue</LoginButton>
                <a href="" className="next">cancel</a>
            </RightHalf>
        </div>
    )
}

export default OTPINPUT;