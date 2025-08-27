import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="header logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__menu-bar">
        <ToggleSwitch />
        <button
          onClick={onAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
      <Link to="/profile" className="header__user-link">
        <div className="header__user-container">
          <p className="header__user-name">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
