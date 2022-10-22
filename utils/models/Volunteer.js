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
  email: {
    type: String,
    required: true,
  },
  interests: [
    {
      type: String,
      enum: INTEREST_ENUM,
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