import requestWrapper from "../../../utils/middleware/wrapper";
import { updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  await updateVolunteer(req.email, req.data.payload);
  res.status(204).json({ message: "Volunteer has been updated" });
}

export default requestWrapper(handler, "PUT");