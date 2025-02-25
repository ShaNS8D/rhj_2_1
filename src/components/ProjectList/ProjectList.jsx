const ProjectList = ({ projects }) => {
  const date = new Date();
  const nowDate = date.getTime();

  return (
    <div className="projectList">
      {projects.map((item, index) => (
        <img 
        key={`${nowDate}-${index}`}
        src={item.img}
        alt=""
        className="projectList-item"
        />
      ))}
    </ div>
  );
}

export default ProjectList;