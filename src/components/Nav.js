import { Link } from "react-router-dom";
import GitHubIconComponent from "./GitHub";
import SpotifyIconComponent from "./Spotify";
import InstagramIconComponent from "./Instagram";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-icons">
          <GitHubIconComponent />
          <SpotifyIconComponent />
          <InstagramIconComponent />
        </div>
        <Link to="/Photo" className="photo-link">
          <span className="hover-underline-animation"> PHOTOGRAPHY</span>
        </Link>
      </div>
    </>
  );
};

export default Nav;
