import Volunteer from "../models/Volunteer";

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
  createVolunteer,
  updateVolunteer,
}