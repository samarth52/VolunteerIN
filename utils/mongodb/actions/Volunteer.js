import Volunteer from "../models/Volunteer";

const createVolunteer = async (email) => {
  const newVolunteer = await Volunteer.create({ email });
  return newVolunteer;
}

const updateVolunteer = async (email, volunteer) => {
  const newVolunteer = await Volunteer.updateOne(
    { email },
    volunteer,
    { new: true },
  );
  return newVolunteer;
}

export {
  createVolunteer,
  updateVolunteer,
}