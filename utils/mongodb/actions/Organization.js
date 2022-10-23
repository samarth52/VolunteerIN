import Organization from "../models/Organization";

const getOrganization = async (email) => {
  const organization = await Organization.findOne({ email }).populate("projects");
  return organization;
}

const getInterestedVolunteers = async (email) => {
  const organization = await Organization.findOne({ email }, "volunteers").populate("volunteers");
  return organization.volunteers;
}

const getInterestedVolunteersId = async (email) => {
  const organization = await Organization.findOne({ email }, "volunteers");
  return organization.volunteers;
}

const createOrganization = async (email) => {
  const organization = await Organization.find({ email });
  if (organization.length === 0) {
    const newOrganization = await Organization.create({ email });
    return { new: true, organization: newOrganization };
  }
  return { new: false, organization: organization[0] };
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
  getInterestedVolunteersId,
  createOrganization,
  updateOrganization,
}