import requestWrapper from "../../../utils/middleware/wrapper";
import { createExperience } from "../../../utils/mongodb/actions/Experience";
import { updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  const { volunteer } = req.data;

  volunteer.experiences.forEach(async (experience, i) => {
    volunteer.experiences[i] = await createExperience(experience);
  })
  await updateVolunteer(req.email, volunteer);
  
  res.status(204).json({ message: "Volunteer has been updated" });
}

export default requestWrapper(handler, "PUT");