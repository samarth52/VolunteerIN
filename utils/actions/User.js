import mongoose from "mongoose";
import { EXPERIENCE_ENUM } from "../constants";

const userSchema = new mongoose.Schema({
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

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;