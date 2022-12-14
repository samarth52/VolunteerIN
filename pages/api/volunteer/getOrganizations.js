import requestWrapper from "../../../utils/middleware/wrapper";
import { getInterestedOrganizations } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `

  const organizations = await getInterestedOrganizations(req.email);
  res.status(200).json({
    success: true,
    payload: organizations,
  });
}

export default requestWrapper(handler, "GET");