import requestWrapper from "../../../utils/middleware/wrapper";
import { getVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  const volunteer = await getVolunteer(req.email);
  res.status(200).json({
    success: true,
    payload: volunteer,
  });
}

export default requestWrapper(handler, "GET");