import "./project.css";

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-img-container flex">
      </div>
      <div className="project-info">
        <h3>{props.name}</h3>
        <div className="project-description">{props.description}</div>
      </div>
    </div>
  );
};
export default Project;
