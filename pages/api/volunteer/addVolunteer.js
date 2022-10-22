import requestWrapper from "../../../utils/middleware/wrapper";
import { createVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  await createVolunteer(req.email);
  res.status(201).json({ message: "Volunteer has been created" });
}

export default requestWrapper(handler, "GET");