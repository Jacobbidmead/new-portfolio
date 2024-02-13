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
          <Link to="/Photo" className="photo-link">
            <span className="hover-underline-animation"> Photos</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
