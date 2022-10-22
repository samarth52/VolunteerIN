import requestWrapper from "../../../utils/middleware/wrapper";
import { createOrganization } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  const result = await createOrganization(req.email);
  res.status(201).json({
    success: true,
    payload: result,
  });
}

export default requestWrapper(handler, "POST");