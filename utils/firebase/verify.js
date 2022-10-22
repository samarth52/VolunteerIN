import auth from "./firebaseServer";

const decodeIdToken = async (idToken) => {
  const decodedToken = await auth.verifyIdToken(idToken);
  console.log(decodedToken);
  return decodedToken.email;
};

export default decodeIdToken;