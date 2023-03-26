import image from "../../../assets/images/svg/CompleteReg.svg";
import { TextInput } from "../styles/auth.styled";
import "../styles/login0.css";
import "../styles/completeReg.css";

function CompleteReg() {
  return (
    <div className="page1">
      <div className="leftside">
        <img src={image} alt="" className="page1Image" />
      </div>
      <div className="rightside">
        <div className="header">
          <button className="top-button">1 0f 3</button>
          <p className="text">Kindly Complete Your Registration</p>
        </div>
        <div className="hr">
        <hr />
        </div>
        <div className="kyc">
        <p>KYC</p>
        </div>
        <div className="card">
        <p>Select a form of identification</p>
        </div>
        <TextInput placeholder="NIN" />
        <TextInput placeholder="Home Address" />
        <div className="hr">
        <hr />
        </div>
        <div className="cards">
        <p className="kyc">Add Cards</p>
        <p>+</p>
        </div>
        <TextInput placeholder="Card Name" />
        <TextInput placeholder="Card Number" />
        <TextInput placeholder="Expiry Date" />
        <TextInput placeholder="cvv" />
        <a href={"/reg"} className="next">Next</a>
      </div>
    </div>
  );
}

export default CompleteReg;
