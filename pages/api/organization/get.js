import requestWrapper from "../../../utils/middleware/wrapper";
import { getOrganization } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  const organization = await getOrganization(req.email);
  res.status(200).json({
    success: true,
    payload: organization,
  });
}

export default requestWrapper(handler, "GET");