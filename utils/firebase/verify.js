import auth from "./firebaseServer";

export default async function verifyToken(idToken) { 
  auth.verifyIdToken(idToken)
};