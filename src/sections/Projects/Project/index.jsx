import fileIcon from "../../../img/fileIcon.svg";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import "./project.css";

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-header flex">
        <img src={fileIcon} alt="File icon" className="project_file-icon" />
        <div className="project-links">
          <a href={props.githubLink} target="_blank">
            <AiFillGithub className="github-icon" />
          </a>
          {/* <a href={props.pageLink}>
            <RxExternalLink />
          </a> */}
        </div>
      </div>
      <div className="project-info">
        <h3>{props.name}</h3>
        <div className="project-description">{props.description}</div>
      </div>
    </div>
  );
};

export default Project;
