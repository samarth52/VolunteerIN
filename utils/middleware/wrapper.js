import verifyToken from "../firebase/verify";

export default function requestWrapper(handler, method) {
  return async (req, res) => {
    if (req.method !== method) {
      return res.status(400).send("Request Failure: Invalid method for request")
    }

    const { idToken } = req.headers;
    try {
      const user = await verifyToken(idToken);
      req.user = user;
      return handler(req, res);
    } catch (error) {
      return res.status(401).send("Authentication Failure: User is not logged in");
    };
  };
};