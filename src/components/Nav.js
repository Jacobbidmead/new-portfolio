import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-icons">SVG icons</div>
        <Link to="/Photo" className="photo-link">
          <span className="hover-underline-animation"> PHOTOGRAPHY</span>
        </Link>
      </div>
    </>
  );
};

export default Nav;
