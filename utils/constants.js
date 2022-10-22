import dotenv from "dotenv";
dotenv.config()

const { MONGODB_URL } = process.env
const INTEREST_ENUM = [
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
  INTEREST_ENUM,
}