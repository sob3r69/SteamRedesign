import './SocialButton.scss';

type SocialButtonProps = {
  iconSrc: string;
};

const SocialButton = ({ iconSrc }: SocialButtonProps) => {
  return (
    <button className="socialButton">
      <img src={iconSrc} />
    </button>
  );
};

export default SocialButton;
