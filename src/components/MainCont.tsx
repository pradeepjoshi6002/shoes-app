import "./styles/Main.css";
import amazon from "../assets/amazon.svg";
import flipkart from "../assets/flipkart.svg";
import shoe_img from "../assets/shoe_image.svg";

export default function MainCont() {
  return (
    <div className="main-cont">
      <div className="main-left-cont">
        <div className="main-left-top-cont">YOUR FEET DESERVE THE BEST</div>
        <div className="main-left-bottom-cont">
          <div className="mlbc-1">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <div className="mlbc-2">
            <button className="shop-now-btn">Shop Now</button>
            <button className="catg-btn">Category</button>
          </div>
          <div className="mlbc-3">
            <div className="mlbc-3-1">Also Available On</div>
            <div className="mlbc-3-2">
              <img
                src={flipkart}
                alt="flipkart-logo"
                className="flipkart-logo"
              />
              <img src={amazon} alt="amazon-logo" className="amazon-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-right-cont">
        <img src={shoe_img} alt="" />
      </div>
    </div>
  );
}
