import { ArrowDown } from '@/app/assets';
import './AccountCard.scss';
import { useState } from 'react';
import { DropdownLink } from '@/shared/components';
import { useOutsideClick } from '@/shared/hooks';

const AccountCard = () => {
  const [visibility, setVisibility] = useState(false);
  const handleClickOutside = () => setVisibility(false);

  const cardRef = useOutsideClick(handleClickOutside);

  return (
    <div className="account-container">
      <button className="account-card" ref={cardRef} onClick={() => setVisibility(!visibility)}>
        <div className="account-avatar-placeholder"></div>
        <h5 className="account-nickName">Account</h5>
        <h5 className="account-balance">$3.22</h5>
        <img src={ArrowDown} />
      </button>
      <section
        className="account-settings"
        style={visibility ? { display: 'block' } : { display: 'none' }}
      >
        <DropdownLink to="/">Account Details</DropdownLink>
        <DropdownLink to="/">Wallet</DropdownLink>
        <DropdownLink to="/">Settings</DropdownLink>
        <DropdownLink to="/">Client Updates</DropdownLink>
        <DropdownLink to="/">Go Offline</DropdownLink>
        <DropdownLink to="/">Change Account</DropdownLink>
        <DropdownLink to="/">Sign Out</DropdownLink>
        <DropdownLink to="/">Exit</DropdownLink>
      </section>
    </div>
  );
};

export default AccountCard;
