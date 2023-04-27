import card from "../../../assets/images/svg/Cards.svg";
import airtime from "../../../assets/images/svg/Airtime.svg";
import hand from "../../../assets/images/svg/HandMoney.svg";
import help from "../../../assets/images/svg/HelpIcon.svg";
import user from "../../../assets/images/svg/User.svg";
import next from "../../../assets/images/svg/NextArrow.svg";
import save from "../../../assets/images/svg/Save.svg";
import "../../auth/styles/dashboard.css";

function DashBoardPage() {
  return (
    <div className="container">
      <div className="middle">
        <div className="icons">
          <img src={card} alt="" className="" />
          <img src={hand} alt=""  className=""/>
          <img src={help} alt="" className="" />
          <img src={airtime} alt="" className="" />
          <img src={save} alt=""  className=""/>
          <img src={next} alt="" className="" />
        </div>
        <div className="textarea">
          <h2>Recent Transaction</h2>
          <input type="text" placeholder="Water Payment" /><br />
          <input type="text" placeholder="Airtime" /><br />
          <input type="text" placeholder="Pocket Moni" /><br />
          <input type="text" placeholder="Up-keep" />
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
