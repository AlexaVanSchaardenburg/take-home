import '../Header/Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" ></NavLink>
    </div>
  );
}

export default Header;