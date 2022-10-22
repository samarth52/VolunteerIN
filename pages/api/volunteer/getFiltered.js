import requestWrapper from "../../../utils/middleware/wrapper";
import { getFilteredVolunteers, updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";
import { createExperience } from "../../../utils/mongodb/actions/Experience";

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
        locations: [string] | undefined,
      },
      ...
    }
  `

  const { ageMin, ageMax, yearsMin, yearsMax, interests, locations } = req.data;

  filterQuery = {
    age: {},
    years: {},
  }

  currDate = new Date();
  if (ageMin) {
    filterQuery.age["$gte"] = new Date(currDate.getFullYear() - ageMin, curr.getMonth(), curr.getDate());
  }
  if (ageMax) {
    filterQuery.age["$lte"] = new Date(currDate.getFullYear() - ageMax, curr.getMonth(), curr.getDate());
  }

  if (yearsMin) {
    filterQuery.years["$gte"] = yearsMin;
  }
  if (yearsMax) {
    filterQuery.years["$lte"] = yearsMax;
  }

  if (interest) {
    filterQuery.interests = { "$in": interests }
  }

  if (locations) {
    const regex = locations.join("|");
    filterQuery.location = {
      "$regex": regex,
      "$options": "i",
    }
  }

  const volunteers = await getFilteredVolunteers(filterQuery);
  res.status(200).json({
    success: true,
    payload: volunteers
  });
}

export default requestWrapper(handler, "GET");