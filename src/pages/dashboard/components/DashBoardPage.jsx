import image from "../../../assets/images/svg/DashBoardBackground.svg";
import logo from "../../../assets/images/svg/DashBoardImage.svg";
import card from "../../../assets/images/svg/Cards.svg";
import airtime from "../../../assets/images/svg/Airtime.svg";
import hand from "../../../assets/images/svg/HandMoney.svg";
import help from "../../../assets/images/svg/HelpIcon.svg";
import user from "../../../assets/images/svg/User.svg";
import next from "../../../assets/images/svg/NextArrow.svg";
import save from "../../../assets/images/svg/Save.svg";
import { Container } from "../../auth/styles/auth.styled";

function DashBoardPage(){
    return(
        <div className="container">
            <div className="background">
            <img src={image} alt="" className="image"/>
            <img src={logo} alt="" className="background_logo" />
            </div>
            <div className="icons">
            <img src={card} alt="" />
            <img src={hand} alt="" />
            <img src={help} alt="" />
            <img src={airtime} alt="" />
            <img src={save} alt="" />
            <img src={next} alt="" />
            </div>
            <div className="textarea">
                <h2>Recent Transaction</h2>
                <input type="text" placeholder="Water Payment" />
                <input type="text" placeholder="Airtime" />
                <input type="text" placeholder="Pocket Moni" />
                <input type="text" placeholder="Up-keep" />
            </div>
        </div>
    )
}

export default DashBoardPage;