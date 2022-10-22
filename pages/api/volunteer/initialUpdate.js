import requestWrapper from "../../../utils/middleware/wrapper";
import { createExperience } from "../../../utils/mongodb/actions/Experience";
import { updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      data: {
        volunteer: {
          firstName: string,
          lastName: string,
          dob: date,
          description: string,
          years: int,
          photo: string,
          location: string,
          interests: [string],
          experiences: {
            [{
              title: string,
              organization: string,
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
  const { volunteer } = req.data;

  volunteer.experiences.forEach(async (experience, i) => {
    volunteer.experiences[i] = await createExperience(experience);
  })
  await updateVolunteer(req.email, volunteer);
  
  res.status(204).json({
    success: true,
    message: "Volunteer has been updated",
  });
}

export default requestWrapper(handler, "PUT");