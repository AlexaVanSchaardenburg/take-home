import '../Header/Header.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <NavLink to="/" ><img className='header-img' src={`${process.env.PUBLIC_URL}/logo_header.png`} /></NavLink>
    </div>
  );
}

export default Header;