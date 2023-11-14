import { Link } from 'react-router-dom';
import './Header.scss';

const ClientHeader = () => {
  return (
    <header>
      <h3>
        <Link to={'/store'}>STORE</Link>
      </h3>
      <h3>
        <Link to={'/store'}>COMMUNITY</Link>
      </h3>
      <h3>
        <Link to={'/store'}>USER</Link>
      </h3>
      <h3>
        <Link to={'/store'}>DOWNLOADS</Link>
      </h3>
    </header>
  );
};

export default ClientHeader;
