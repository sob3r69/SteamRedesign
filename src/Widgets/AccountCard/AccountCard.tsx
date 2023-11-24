import { ArrowDown } from '@/app/assets';
import './AccountCard.scss';
import { useEffect, useRef, useState } from 'react';

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
      <section
        className="account-settings"
        style={visibility ? { opacity: 1 } : { opacity: 0 }}
      ></section>
    </div>
  );
};

export default AccountCard;
