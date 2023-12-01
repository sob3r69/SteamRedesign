import { Link } from 'react-router-dom';
import './DropdownLink.scss';

type DropdownLinkProps = {
  children: string;
  to: string;
};
const DropdownLink = ({ to, children }: DropdownLinkProps) => {
  return (
    <h5 className="dropdown-link">
      <Link to={to}>{children}</Link>
    </h5>
  );
};

export default DropdownLink;
