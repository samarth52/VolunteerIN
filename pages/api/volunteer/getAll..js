import requestWrapper from "../../../utils/middleware/wrapper";
import { getFilteredVolunteers } from "../../../utils/mongodb/actions/Volunteer";
import { createExperience } from "../../../utils/mongodb/actions/Experience";
import { updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      data: {
        ageMin: int | undefined,
        ageMax: int | undefined,
        yearsMin: int | undefined,
        yearsMax: int | undefined,
        interests: [string] | undefined,
      },
      ...
    }
  `

  const { ageMin, ageMax, yearsMin, yearsMax, interests } = req.data;

  filterQuery = {
    age: {},
    years: {},
  };

  currDate = new Date();
  if (ageMin) {
    filterQuery.age["$gte"] = new Date(currDate.getFullYear() - ageMin, curr.getMonth(), curr.getDate());
  };
  if (ageMax) {
    filterQuery.age["$lte"] = new Date(currDate.getFullYear() - ageMax, curr.getMonth(), curr.getDate());
  };

  if (yearsMin) {
    filterQuery.years["$gte"] = yearsMin;
  };
  if (yearsMax) {
    filterQuery.years["$lte"] = yearsMax;
  };

  if (interest) {
    filterQuery.interests["$in"] = interests;
  };

  const volunteers = await getFilteredVolunteers(req.email, filterQuery);
  res.status(200).json({ payload: volunteers });
}

export default requestWrapper(handler, "GET");