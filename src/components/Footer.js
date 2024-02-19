import { Link } from "react-router-dom";
import Git from "./Git";
import SpotifyIconComponent from "./Spotify";
import CameraIcon from "./Camera";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="name">jacobbidmead.com.</div>
        <div className="nav-icons">
          <div className="photo-link">
            {" "}
            <span>
              <CameraIcon />
            </span>
          </div>

          <div className="photo-link">
            <a
              href="https://github.com/Jacobbidmead"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ color: "rgb(198, 198, 198)" }}>
                <Git />
              </span>
            </a>
          </div>

          <div className="photo-link">
            <a
              href="https://open.spotify.com/playlist/3ieBiYfA1DqQMTOq2vpB0u?si=1780efef079247b1"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ color: "rgb(198, 198, 198)" }}>
                <SpotifyIconComponent />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
