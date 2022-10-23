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

  const { ageMin, ageMax, yearsMin, yearsMax, interests, location } = req.body;

  const filterQuery = {
    age: {},
    years: {},
  }

  const currDate = new Date();
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

  if (location) {
    filterQuery.location = {
      "$regex": regex,
      "$options": "i",
    }
  }

  if (Object.keys(filterQuery.age).length === 0) {
    delete filterQuery["age"];
  }
  if (Object.keys(filterQuery.years).length === 0) {
    delete filterQuery["years"];
  }

  const volunteers = await getFilteredVolunteers(filterQuery);
  console.log(volunteers);

  if (interests) {
    filterQuery.interests = { "$in": interests }
  }

  res.status(200).json({
    success: true,
    payload: volunteers
  });
}

export default requestWrapper(handler, "POST");