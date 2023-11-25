import { ArrowDown } from '@/app/assets';
import './AccountCard.scss';
import { useEffect, useRef, useState } from 'react';
import { DropdownLink } from '@/shared';

const useOutsideClick = (callback: (value: boolean) => void) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log('render');
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
  return ref;
};

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
      <section className="account-settings" style={visibility ? { opacity: 1 } : { opacity: 0 }}>
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
