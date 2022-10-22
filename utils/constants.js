import dotenv from "dotenv";
dotenv.config()

const { MONGODB_URL } = process.env
const EXPERIENCE_ENUM = [
  "Aid",
  "Design",
  "Distribution",
  "Education",
  "Fundraising",
  "Logistics",
  "Management",
  "Operations",
  "Software Engineering",
  "Volunteer",
  "General/Other",
]

export {
  MONGODB_URL,
  EXPERIENCE_ENUM,
}