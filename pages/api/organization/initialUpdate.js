import requestWrapper from "../../../utils/middleware/wrapper";
import { createProject } from "../../../utils/mongodb/actions/Project";
import { updateOrganization } from "../../../utils/mongodb/actions/Organization";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      data: {
        volunteer: {
          name: string,
          hrEmail: string,
          description: string,
          logo: string,
          website: string,
          location: string,
          interests: [string],
          projects: {
            [{
              name: string,
              location: string,
              startDate: string,
              endDate: string,
              description: string,
            }],
          }
        }  
      },
      ...
    }
  `
  const { organization } = req.body;

  if (organization.projects) {
    for (let i = 0; i < organization.projects.length; i++) {
      organization.projects[i] = await createProject(organization.projects[i]);
    }
  }

  await updateOrganization(req.email, organization);
  
  res.status(203).json({
    success: true,
    message: "Organization has been updated",
  });
}

export default requestWrapper(handler, "PUT");