import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { RouteArrow, SteamLogo, FriendsIcon, NotificationIcon } from '@/app/assets';
import { SocialButton } from '@/shared';

const ClientHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="nav">
        <div className="clientHeader-arrows">
          <img onClick={() => navigate(-1)} id="arrowLeft" src={RouteArrow} />
          <img onClick={() => navigate(1)} id="arrowRight" src={RouteArrow} />
        </div>
        <img id="logo" width={88} height={26} src={SteamLogo} />
        <div className="clientHeader-navigation">
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
        </div>
      </div>
      <div className="clientHeader-userInfo">
        <SocialButton iconSrc={FriendsIcon} />
        <SocialButton iconSrc={NotificationIcon} />
      </div>
    </header>
  );
};

export default ClientHeader;
