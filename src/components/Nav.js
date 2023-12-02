import { Link } from "react-router-dom";
import GitHubIconComponent from "./GitHub";
import SpotifyIconComponent from "./Spotify";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-icons">
          <GitHubIconComponent className="github-icon" />
          <SpotifyIconComponent className="spotify-icon" />
        </div>
        <div className="links">
          <Link to="/Projects" className="photo-link">
            {" "}
            <span className="hover-underline-animation"> Projects</span>{" "}
          </Link>

          <Link to="/Photo" className="photo-link">
            <span className="hover-underline-animation"> Photography</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
