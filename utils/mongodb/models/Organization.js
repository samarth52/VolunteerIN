import mongoose from "mongoose";
import { INTEREST_ENUM } from "../../serverConstants";

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  hrEmail: {
    type: String,
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
  volunteers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Volunteer",
    }
  ],
  projects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Project",
    },
  ]
});

organizationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
});

const Organization = mongoose.models.Organization || mongoose.model("Organization", organizationSchema);
export default Organization;