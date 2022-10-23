import Volunteer from "../models/Volunteer";

const getVolunteer = async (email) => {
  const volunteer = await Volunteer.findOne({ email }).populate("experiences");
  return volunteer;
}

const getFilteredVolunteers = async (filterQuery) => {
  const volunteers = await Volunteer.find(filterQuery, "-organizations").populate("experiences");
  return volunteers;
}

const getInterestedOrganizations = async (email) => {
  const organizations = await Volunteer.findOne({ email }, "organizations").populate("organizations");
  return organizations;
}

const createVolunteer = async (email) => {
  const volunteer = await Volunteer.find({ email });
  if (volunteer.length === 0) {
    const newVolunteer = await Volunteer.create({ email });
    return { new: true, volunteer: newVolunteer };
  }
  return { new: false, volunteer: volunteer[0] };
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
  getVolunteer,
  getFilteredVolunteers,
  getInterestedOrganizations,
  createVolunteer,
  updateVolunteer,
}