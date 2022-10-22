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
  dob: Date,
  description: String,
  years: Number,
  photo: String,
  location: String,
  interests: [
    {
      type: String,
      enum: INTEREST_ENUM,
    }
  ],
  organizations: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Organization",
    }
  ],
  experience: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Experience",
    },
  ],
});

volunteerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
});

const Volunteer = mongoose.models.Volunteer || mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;