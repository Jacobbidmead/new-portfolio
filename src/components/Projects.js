import Link from "./Link";
import Git from "./Git";

const Projects = () => {
  return (
    <>
      <div className="projects-grid">
        <div className="project-box">
          <div>MediaBook AI </div>
          <p className="technologies">
            <span className="project-techs">TypeScript</span>{" "}
            <span className="project-techs">Next.js</span>{" "}
            <span className="project-techs">Tailwind</span>
            <span className="project-techs">OpenAI API</span>
          </p>
          <div className="project-link">
            <a
              href="https://movie-book-next.vercel.app/"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Link />
            </a>
            <a
              href="https://github.com/Jacobbidmead/movie-book-next"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Git />
            </a>
          </div>
        </div>
        <div className="project-box">
          <div>Memory Game</div>
          <p className="technologies">
            <span className="project-techs">TypeScript </span>{" "}
            <span className="project-techs">Next.js</span>{" "}
            <span className="project-techs">Tailwind</span>
            <span className="project-techs">DALLE-E </span>
          </p>
          <div className="project-link">
            <a
              href="https://snap-app-git-main-jacobbidmead.vercel.app/"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Link />
            </a>
            <a
              href="https://github.com/Jacobbidmead/snap-app"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Git />
            </a>
          </div>
        </div>
        <div className="project-box">
          <div>E-comm store</div>
          <p className="technologies">
            <span className="project-techs">TypeScript </span>{" "}
            <span className="project-techs">Next.js </span>{" "}
            <span className="project-techs">MUI Library </span>
            <span className="project-techs">UseContext </span>
          </p>
          <div className="project-link">
            <a
              href="https://webstore-react-app-git-main-jacobbidmead.vercel.app/
"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Link />
            </a>
            <a
              href="https://github.com/Jacobbidmead/webstore-react-app"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Git />
            </a>
          </div>
        </div>
        <div className="project-box">
          <div>Fetch Products</div>
          <p className="technologies">
            <span className="project-techs">React </span>{" "}
            <span className="project-techs">Next.js </span>{" "}
            <span className="project-techs">Tailwind </span>
          </p>
          <div className="project-link">
            <a
              href="https://get-products-app.vercel.app/

"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Link />
            </a>
            <a
              href="https://github.com/Jacobbidmead/get-products-app"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="link">
              <Git />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
