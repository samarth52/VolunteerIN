import requestWrapper from "../../../utils/middleware/wrapper";
import { getVolunteers } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `

  const volunteers = await getVolunteers(req.email);
  res.status(200).json({
    success: true,
    payload: volunteers
  });
}

export default requestWrapper(handler, "GET");