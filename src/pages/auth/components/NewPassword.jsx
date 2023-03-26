import image from "../../../assets/images/svg/ForgotPassword2.svg";
import eye from "../../../assets/images/svg/eye.svg";
import { LoginButton, RightHalf, TextInput } from "../styles/auth.styled";
import reset from "../../../assets/images/svg/NewPassword.svg";

function NewPassword(){
    return(
        <div>
            <div className="page1">
                <div className="leftside">
                    <img src={image}  alt="" className="page1Image" />
                </div>
                <RightHalf>
                    <div className="reset-image">
                        <img src={reset} alt="" className="image-two"/>
                    </div>
                    <p className="text-">Enter new password</p>
                    {/* <button className="button">New password <span className="span-eye"><img src={eye} alt="" className="eye"/></span></button> */}
                    <label>
                    <input className="button" placeholder="New Password"/>
                    <img src={eye} alt=""  className="span-eye"/>
                    </label>
                    <LoginButton>Reset</LoginButton>
                </RightHalf>
            </div>
        </div>
    )
}

export default NewPassword;