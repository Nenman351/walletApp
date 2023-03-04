import image from "../../../assets/images/svg/SignUpImage.svg";
import { TextInput,LoginButton } from "../styles/auth.styled";
import "../styles/login0.css";

function SignUp(){
    return(
        <div className="page1">
            <div className="leftside">
                <img src={image} alt="signUpImage" className="leftImage" />
            </div>
            <div className="rightside">
                <p className="welcome">Welcome!</p>
                <p className="log">Sign up by entering the information below</p>
                <TextInput placeholder="first Name:"/>
                <TextInput placeholder="last Name:"/>
                <TextInput placeholder="Email:"/>
                <TextInput placeholder="Password:"/>
                <div className="sign-up">
                    <p className="acct">Already have an Account?</p>
                    <a href="" className="signup">Login</a>
                </div>
                <LoginButton>Sign Up</LoginButton>
            </div>
        </div>
    )
}

export default SignUp;