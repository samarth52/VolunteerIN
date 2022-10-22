import Experience from "../models/Experience";

const createExperience = async (details) => {
  const newExperience = await Experience.create(details);
  return newExperience._id.toString();
}

export { createExperience }