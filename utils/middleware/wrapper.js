import verifyToken from "../firebase/verify";

export default function requestWrapper(handler, method) {
  return async (req, res) => {
    if (req.method !== method) {
      return res.status(400).json({ message: "Request Failure: Invalid method for request" })
    }

    const { idToken } = req.headers;
    try {
      req.email = await verifyToken(idToken);
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Authentication Failure: User is not logged in" });
    };
  };
};