const { MONGODB_URL } = process.env;

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
];

const FIREBASE_SERVER_CONFIG = {
  projectId: process.env.FIREBASE_SERVER_PROJECT_ID,
  clientEmail: process.env.FIREBASE_SERVER_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_SERVER_PRIVATE_KEY.split("\\n").join("\n"),
};

export {
  MONGODB_URL,
  INTEREST_ENUM,
  FIREBASE_SERVER_CONFIG,
};