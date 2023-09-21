import '../Error/Error.css';
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className="Error">
      <Header />
      <p className="error-message">Oops! The page you are looking for does not exist</p>
      <NavLink to="/" className='error-to-home'>Click here to go home</NavLink>
    </div>
  );
}

export default Error;