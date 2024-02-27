import { Link } from 'react-router-dom';
import './AppTag.scss';

type AppTagProps = {
  name: string;
};

const AppTag = ({ name }: AppTagProps) => {
  return (
    <h5 className="app-tag">
      <Link to={''}>{name}</Link>
    </h5>
  );
};

export default AppTag;
