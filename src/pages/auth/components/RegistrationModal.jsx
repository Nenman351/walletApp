import image from "../../../assets/images/svg/CompleteReg.svg";
import { LoginButton, RightHalf, TextInput } from "../styles/auth.styled";
import "../styles/login0.css";
import "../styles/completeReg.css";
import { useState } from "react";

function RegistrationModal() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="page1">
        <div className="leftside">
          <img src={image} alt="" className="page1Image" />
        </div>
        <RightHalf>
          <div className="header">
            <button className="top-button">2 of 3</button>
            <p className="text">More Details about You!</p>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="kyc">
            <p className="bvn">Next of kin</p>
          </div>
          <TextInput placeholder="Full Name" />
          <TextInput placeholder="Email Address" />
          <TextInput placeholder="Phone Number" />
          <TextInput placeholder="Relationship" />
          <div className="hr">
            <hr />
          </div>
          <div className="kyc">
            <p className="bvn">BVN</p>
          </div>
          <TextInput placeholder="BVN" />
          <LoginButton
            onClick={() => {
              setShow(!show);
            }}
          >
            Continue
          </LoginButton>
          <a href={"/registration"} className="prev">
            prev
          </a>
        </RightHalf>
      </div>
      <div className="modalcontainer" style={{display: show ? "block" : "none"}}>
        <div className="content">
            <TextInput>Drivers Licence</TextInput>
            <TextInput>Voters card</TextInput>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
