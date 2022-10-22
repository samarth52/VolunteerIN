import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  organization: {
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

const Experience = mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;