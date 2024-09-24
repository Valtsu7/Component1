// Components/Header.jsx

import './Header.css';
import logo from './13-3-8607284.jpg';
function Header() {
  return (
    <header>
      <img src={logo} alt="Header logo" className="header-logo" />
      <h1 className="header-title">Hello there</h1>
    </header>
  );
}

export default Header;
