import Project from "../models/Project";

const createProject = async (details) => {
  const newProject = await Project.create(details);
  return newProject._id.toString();
}

export { createProject }