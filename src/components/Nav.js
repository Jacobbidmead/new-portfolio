import { Link } from "react-router-dom";
import GitHubIconComponent from "./GitHub";
import SpotifyIconComponent from "./Spotify";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-icons">
          <GitHubIconComponent />
          <SpotifyIconComponent />
        </div>
        <div className="links">
          <Link to="/Projects" className="photo-link">
            {" "}
            <span className="hover-underline-animation"> PROJECTS</span>{" "}
          </Link>

          <Link to="/Photo" className="photo-link">
            <span className="hover-underline-animation"> PHOTOGRAPHY</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
