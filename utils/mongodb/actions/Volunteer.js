import Volunteer from "../models/Volunteer";

const getFilteredVolunteers = async (email, filterQuery) => {
  const volunteers = await Volunteer.find(filterQuery, "-organizations").populate("Experience");
  return volunteers;
}

const getOrganizations = async (email) => {
  const organizations = await Volunteer.find({ email }, "organizations").populate("Organization");
  return organizations;
}

const createVolunteer = async (email) => {
  const newVolunteer = await Volunteer.create({ email });
  return newVolunteer;
}

const updateVolunteer = async (email, details) => {
  const newVolunteer = await Volunteer.updateOne(
    { email },
    details,
    { new: true },
  );
  return newVolunteer;
}

export {
  getFilteredVolunteers,
  getOrganizations,
  createVolunteer,
  updateVolunteer,
}