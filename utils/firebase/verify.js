import auth from "./firebaseServer";

const decodeIdToken = async (idToken) => {
  const decodedToken = await auth.verifyIdToken(idToken);
  return decodedToken.email;
};

export default decodeIdToken;