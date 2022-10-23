import requestWrapper from "../../../utils/middleware/wrapper";
import { getFilteredVolunteers, getAllVolunteers, updateVolunteer } from "../../../utils/mongodb/actions/Volunteer";
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

  if (filterQuery.age === {}) {
    delete filterQuery["age"];
  }
  if (filterQuery.years === {}) {
    delete filterQuery["years"];
  }
  console.log(filterQuery);

  const volunteers = await getFilteredVolunteers(filterQuery);
  const interestVolunteers = [];

  if (interests) {
    const allVolunteers = await getAllVolunteers();

    for (const individual of allVolunteers){
      const filteredArray = individual.interests.filter(value => interests.includes(value));

      if (filteredArray.length !== 0){
        interestVolunteers.push(individual.populate("experiences"))
      }
    }
  }
  console.log(interestVolunteers);
  const combined = [...volunteers, ...interestVolunteers];

  res.status(200).json({
    success: true,
    payload: combined
  });
}

export default requestWrapper(handler, "POST");