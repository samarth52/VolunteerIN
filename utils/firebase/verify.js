import auth from "./firebaseServer";

export default async function verifyToken(idToken) { 
  const user = await auth.verifyIdToken(idToken);
  return user.email;
};