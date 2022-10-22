import requestWrapper from "../../../utils/middleware/wrapper";
import { getInterestedVolunteers } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `

  const volunteers = await getInterestedVolunteers(req.email);
  res.status(200).json({
    success: true,
    payload: volunteers
  });
}

export default requestWrapper(handler, "GET");