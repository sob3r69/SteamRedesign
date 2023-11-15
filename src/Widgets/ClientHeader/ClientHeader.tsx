import { Link } from 'react-router-dom';
import './Header.scss';
import RouteArrow from '@/app/assets/ArrowLeft.png';
import SteamLogo from '@/app/assets/SteamLogo.png';

const ClientHeader = () => {
  return (
    <header>
      <img id="arrowLeft" src={RouteArrow} />

      <img id="arrowRight" src={RouteArrow} />
      <img id="logo" width={88} height={26} src={SteamLogo} />
      <h3>
        <Link to={'/store'}>STORE</Link>
      </h3>
      <h3>
        <Link to={'/community'}>COMMUNITY</Link>
      </h3>
      <h3>
        <Link to={'/user'}>USER</Link>
      </h3>
      <h3>
        <Link to={'/library'}>LIBRARY</Link>
      </h3>
      <h3>
        <Link to={'/downloads'}>DOWNLOADS</Link>
      </h3>
    </header>
  );
};

export default ClientHeader;
