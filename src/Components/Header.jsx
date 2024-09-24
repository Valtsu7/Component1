import './Header.css';
import logo from './13-3-8607284.jpg';
function Header() {
  return (
    <header className="header"> 
      <img src={logo} alt="Header logo" className="header-logo" />
      <h1 className="header-title">Welcome to product page!</h1>
    </header>
  );
}

export default Header;
