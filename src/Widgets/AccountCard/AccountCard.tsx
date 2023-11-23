import { ArrowDown } from '@/app/assets';
import './AccountCard.scss';

const AccountCard = () => {
  return (
    <div className="account-container">
      <button className="account-card">
        <div className="account-avatar-placeholder"></div>
        <h5 className="account-nickName">Account</h5>
        <h5 className="account-balance">$3.22</h5>
        <img src={ArrowDown}></img>
      </button>
      <section className="account-settings"></section>
    </div>
  );
};

export default AccountCard;
