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
  createOrganization,
  updateOrganization,
}