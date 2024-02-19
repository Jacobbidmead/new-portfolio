import { ReactComponent as Icon } from "../icons/camera.svg";
import { Link } from "react-router-dom";

const CameraIcon = () => {
  return (
    <Link to="/Photo">
      <Icon />
    </Link>
  );
};

export default CameraIcon;
