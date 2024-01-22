import { ProgressBar } from '..';

type NavDotsProps = {
  onClick: () => void;
  time: number;
  isActive: boolean;
};

const NavDots = ({ onClick, time, isActive }: NavDotsProps) => {
  return (
    <button className="slider_button" onClick={onClick}>
      <ProgressBar isActive={isActive} autoPlayTime={time} />
    </button>
  );
};

export default NavDots;
