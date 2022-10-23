import mongoConnect from "../dbConnect";
import verifyToken from "../firebase/verify";

export default function requestWrapper(handler, method) {
  return async (req, res) => {
    if (req.method !== method) {
      return res.status(400).json({
        success: false,
        message: "Request Failure: Invalid method for request",
      });
    }
    
    const idToken = req.headers.idtoken;
    try {
      req.email = await verifyToken(idToken);
      await mongoConnect();
      req.body = JSON.parse(req.body);
      return handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: false,
        message: "Authentication Failure: User is not logged in",
      });
    };
  };
};