import image from "../../../assets/images/svg/ForgotPassword2.svg";
import { LoginButton, RightHalf, TextInput } from "../styles/auth.styled";
import reset from "../../../assets/images/svg/Reset.svg";
import  "../styles/login0.css";
import "../styles/completeReg.css";

function ForgotPasswordTwo(){
    return(
        <div className="page1">
            <div className="leftside">
                <img src={image} alt="" className="page1Image"/>
            </div>
            <RightHalf>
                <div className="head">
                    <p className="reset">Reset Password</p>
                </div>
                <div className="reset-image">
                <img src={reset} alt="" className="image" />
                </div>
                <p className="text-two">Enter Email Address to reset Password</p>
               <TextInput placeholder="Email Address"/>
               <LoginButton>Next</LoginButton>
               <a href="" className="next">cancel</a>
            </RightHalf>
        </div>
    )
}

export default ForgotPasswordTwo;