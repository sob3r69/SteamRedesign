import { ProgressBar } from '..';

type NavDotProps = {
  onClick: () => void;
  time: number;
  isActive: boolean;
};

const NavDot = ({ onClick, time, isActive }: NavDotProps) => {
  return (
    <button className="slider_button" onClick={onClick}>
      <ProgressBar isActive={isActive} autoPlayTime={time} />
    </button>
  );
};

export default NavDot;
