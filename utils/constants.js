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
  apiKey: "AIzaSyCGg-Bl_M6gQH9K09v7t_YqqLcsOv6bjN0",
  authDomain: "volunteerin-21e5b.firebaseapp.com",
  projectId: "volunteerin-21e5b",
  storageBucket: "volunteerin-21e5b.appspot.com",
  messagingSenderId: "421343336848",
  appId: "1:421343336848:web:8b1a838513f8e45199fb15",
};

const FIREBASE_SERVER_CONFIG = {
  projectId: process.env.FIREBASE_SERVER_PROJECT_ID,
  clientEmail: process.env.FIREBASE_SERVER_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_SERVER_PRIVATE_KEY
};

export {
  MONGODB_URL,
  INTEREST_ENUM,
  FIREBASE_CLIENT_CONFIG,
  FIREBASE_SERVER_CONFIG,
};