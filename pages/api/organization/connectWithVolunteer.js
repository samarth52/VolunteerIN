import requestWrapper from "../../../utils/middleware/wrapper";
import { createProject } from "../../../utils/mongodb/actions/Project";
import { getOrganization, updateOrganization } from "../../../utils/mongodb/actions/Organization";
import { getVolunteerById, updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
  `
  const organization = await getOrganization(req.email)
  const volunteerId = req.body.volunteer;
  const volunteer = await getVolunteerById(volunteerId);

  organization.volunteers.push(volunteerId);
  await updateOrganization(req.email, organization);

  volunteer.organizations.push(organization._id);
  await updateVolunteer(volunteer.email, volunteer)

  res.status(203).json({
    success: true,
    message: "Volunteer/Organization Association Has Been Created",
  });
}

export default requestWrapper(handler, "PUT");