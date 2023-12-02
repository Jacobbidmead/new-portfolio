import { ReactComponent as Icon } from "../icons/github.svg";

const GitHubIconComponent = () => {
  return (
    <div>
      <a
        href="https://github.com/Jacobbidmead"
        target="_blank"
        rel="noreferrer"
      >
        <Icon className="github-icon" />
      </a>
    </div>
  );
};

export default GitHubIconComponent;
