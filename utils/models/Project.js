import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;