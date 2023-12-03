import './BuyButton.scss';

type BuyButtonProps = {
  text?: string;
};
const BuyButton = ({ text }: BuyButtonProps) => {
  return (
    <button className="buy_button">
      <h4>{text ? text : 'Add to cart'}</h4>
    </button>
  );
};

export default BuyButton;
