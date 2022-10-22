import Organization from "../models/Organization";

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
  createOrganization,
  updateOrganization,
}