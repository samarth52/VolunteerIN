import requestWrapper from "../../../utils/middleware/wrapper";
import { getFilteredVolunteers, getAllVolunteers, updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";
import { getInterestedVolunteersId } from "../../../utils/mongodb/actions/Organization";
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
  const chosenVolunteersId = await getInterestedVolunteersId(req.email);
  const filterQuery = {
    dob: {},
    years: {},
    "_id": { "$nin": chosenVolunteersId },
  }

  const currDate = new Date();
  if (ageMin) {
    filterQuery.dob["$lte"] = new Date(currDate.getFullYear() - ageMin, currDate.getMonth(), currDate.getDate());
  }
  if (ageMax) {
    filterQuery.dob["$gte"] = new Date(currDate.getFullYear() - ageMax, currDate.getMonth(), currDate.getDate());
  }

  if (yearsMin) {
    filterQuery.years["$gte"] = yearsMin;
  }
  if (yearsMax) {
    filterQuery.years["$lte"] = yearsMax;
  }

  if (location) {
    filterQuery.location = {
      "$regex": location,
      "$options": "i",
    }
  }

  if (Object.keys(filterQuery.dob).length === 0) {
    delete filterQuery["dob"];
  }
  if (Object.keys(filterQuery.years).length === 0) {
    delete filterQuery["years"];
  }

  const volunteers = await getFilteredVolunteers(filterQuery);

  res.status(200).json({
    success: true,
    payload: volunteers,
  });
}

export default requestWrapper(handler, "POST");