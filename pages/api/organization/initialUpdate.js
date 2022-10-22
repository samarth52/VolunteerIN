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
  const { organization } = req.data;

  organization.projects.forEach(async (project, i) => {
    organization.projects[i] = await createProject(project);
  })
  await updateOrganization(req.email, organization);
  
  res.status(204).json({
    success: true,
    message: "Organization has been updated",
  });
}

export default requestWrapper(handler, "PUT");