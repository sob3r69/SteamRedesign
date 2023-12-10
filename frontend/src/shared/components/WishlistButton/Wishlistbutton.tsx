import './Wishlistbutton.scss';

type WishlistButtonProps = {
  type?: 'compact' | 'large';
};

const WishlistButton = ({ type }: WishlistButtonProps = {}) => {
  return (
    <button className="wishlist_button">
      {type === 'compact' ? <h4>W</h4> : <h4>Wishlist</h4>}
    </button>
  );
};

export default WishlistButton;
