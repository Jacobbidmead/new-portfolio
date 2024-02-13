import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="name">jacobbidmead.com.</div>
        <div className="nav-icons">
          <Link to="/Photo" className="photo-link">
            <span className="hover-underline-animation"> Photos</span>
          </Link>
          <div className="photo-link">
            <a
              href="https://github.com/Jacobbidmead"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="hover-underline-animation"
                style={{ color: "rgb(198, 198, 198)" }}
              >
                Github
              </span>
            </a>
          </div>

          <div className="photo-link">
            <a
              href="https://open.spotify.com/playlist/3ieBiYfA1DqQMTOq2vpB0u?si=1780efef079247b1"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="hover-underline-animation"
                style={{ color: "rgb(198, 198, 198)" }}
              >
                Spotify
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
