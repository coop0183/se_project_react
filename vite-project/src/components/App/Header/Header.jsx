import './Header.css';
import logo from '../../../assets/logo.svg';
import avatar from '../../../assets/avatar.png';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="header logo" />
      <p className="header__date-and-location"></p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__user-name">Terrence Tegegne</p>
        <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
      </div>
    </header>
  );

function DATE(javascript) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const currentLocation = 'Enterprise, AL';
  return `${currentDate}, ${currentLocation}`;
};
}

export default Header;