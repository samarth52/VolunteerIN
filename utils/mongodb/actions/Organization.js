import Organization from "../models/Organization";

const getOrganization = async (email) => {
  const organization = await Organization.find({ email }).populate("Project");
  return organization;
}

const getInterestedVolunteers = async (email) => {
  const volunteers = await Organization.find({ email }, "volunteers").populate("Volunteer");
  return volunteers;
}

const createOrganization = async (email) => {
  const newOrganization = await Organization.create({ email });
  return newOrganization;
}

const updateOrganization = async (email, details) => {
  const newOrganization = await Organization.updateOne(
    { email },
    details,
    { new: true },
  );
  return newOrganization;
}

export {
  getOrganization,
  getInterestedVolunteers,
  createOrganization,
  updateOrganization,
}