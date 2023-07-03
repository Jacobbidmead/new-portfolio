import { ReactComponent as Icon } from "../icons/arrow.svg";
import { Link } from "react-router-dom";
import "../styles/Photo.css";

const ArrowIconComponent = () => {
  return (
    <Link to="/" className="arrow-icon">
      <Icon />
    </Link>
  );
};

export default ArrowIconComponent;
