import { useState } from "react";
import image from "../../../assets/images/svg/ForgotPassword2.svg";
import eye from "../../../assets/images/svg/eye.svg";
import { LoginButton, RightHalf} from "../styles/auth.styled";
import tick from "../../../assets/images/svg/TickIcon.svg";
import reset from "../../../assets/images/svg/NewPassword.svg";

function NewPasswordModal(){
    const [show, setShow] = useState(false);
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
                    <LoginButton onClick={()=>{setShow(!show)}}>Reset</LoginButton>
                </RightHalf>
                <div className="modalcontainer" style={{display: show ? "block" : "none"}}>
                    <div className="content">
                        <p className="modal2" >Success <img src={tick} alt="" className="tickimg" />
                        {/* <span className="span">
                        <a href="" className="signup">Go to Dashboard</a>
                        </span> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPasswordModal;