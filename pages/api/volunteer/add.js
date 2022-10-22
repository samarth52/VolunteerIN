import requestWrapper from "../../../utils/middleware/wrapper";
import { createVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  const result = await createVolunteer(req.email);
  res.status(201).json({
    success: true,
    payload: result,
  });
}

export default requestWrapper(handler, "POST");