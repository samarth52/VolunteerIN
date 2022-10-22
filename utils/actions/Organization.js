import mongoose from "mongoose";
import { INTEREST_ENUM } from "../constants";

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: String,
  logo: String,
  website: String,
  location: String,
  interests: [
    {
      type: String,
      enum: INTEREST_ENUM,
    }
  ],
})

const Organization = mongoose.models.Organization || mongoose.model("Organization", organizationSchema);
export default Organization;