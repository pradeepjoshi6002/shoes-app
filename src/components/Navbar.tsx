import "./styles/Navbar.css";
import nikeLogo from "../assets/nike.svg";

export default function Navbar() {
  return (
    <div className="navbar-cont">
      <img src={nikeLogo} className="navbar-logo" alt="nike logo" />
      <div className="navbar-options">
        <div className="menu">menu</div>
        <div className="location">location</div>
        <div className="about">about</div>
        <div className="contact">contact</div>
      </div>
      <button className="login-btn">Login</button>
    </div>
  );
}
