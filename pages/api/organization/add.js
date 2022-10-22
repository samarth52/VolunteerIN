import requestWrapper from "../../../utils/middleware/wrapper";
import { createOrganization } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  await createOrganization(req.email);
  res.status(201).json({ message: "Organization has been created" });
}

export default requestWrapper(handler, "POST");