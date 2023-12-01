import { Link } from 'react-router-dom';
import './GameTag.scss';

type GameTagProps = {
  name: string;
};

const GameTag = ({ name }: GameTagProps) => {
  return (
    <h5 className="game-tag">
      <Link to={''}>{name}</Link>
    </h5>
  );
};

export default GameTag;
