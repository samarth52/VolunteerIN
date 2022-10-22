import dotenv from "dotenv";
dotenv.config();

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

const FIREBASE_CLIENT_CONFIG = {
  apiKey: process.env.FIREBASE_CLIENT_API_KEY,
  authDomain: process.env.FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_CLIENT_PROJECT_ID,
  storageBucket: process.env.FIREBASE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CLIENT_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_CLIENT_APP_ID,
};

const FIREBASE_SERVER_CONFIG = {
  projectId: process.env.FIREBASE_SERVER_PROJECT_ID,
  privateKey: process.env.FIREBASE_SERVER_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_SERVER_CLIENT_EMAIL,
};

FIREBASE_SERVER_CONFIG.privateKey = FIREBASE_SERVER_CONFIG.privateKey.split("\\n").join("\n");

export {
  MONGODB_URL,
  INTEREST_ENUM,
  FIREBASE_CLIENT_CONFIG,
  FIREBASE_SERVER_CONFIG,
};