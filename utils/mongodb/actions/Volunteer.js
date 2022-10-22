import Volunteer from "../models/Volunteer";

const createVolunteer = async (volunteer) => {
  const newVolunteer = await Volunteer.create(volunteer);
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