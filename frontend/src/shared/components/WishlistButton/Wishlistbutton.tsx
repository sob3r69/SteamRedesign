import { useState } from 'react';
import './Wishlistbutton.scss';
import { WishlistLogo, WishlistLogoSelected } from '@/app/assets';

type WishlistButtonProps = {
  type?: 'compact' | 'large';
};

const WishlistButton = ({ type }: WishlistButtonProps = {}) => {
  const [selected, setSelected] = useState(false);
  return (
    <button className="wishlist_button">
      {type === 'compact' ? (
        <img
          src={selected ? WishlistLogoSelected : WishlistLogo}
          onClick={() => setSelected(!selected)}
        />
      ) : (
        <h4>Wishlist</h4>
      )}
    </button>
  );
};

export default WishlistButton;
