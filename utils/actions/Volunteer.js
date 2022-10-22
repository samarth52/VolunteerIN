import mongoose from "mongoose";
import { EXPERIENCE_ENUM } from "../constants";

const volunteerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  experiences: [
    {
      type: String,
      enum: EXPERIENCE_ENUM,
    }
  ],
  years: Number,
  description: String,
  photo: String,
  location: String,
  dob: Date,
})

const Volunteer = mongoose.models.Volunteer || mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;