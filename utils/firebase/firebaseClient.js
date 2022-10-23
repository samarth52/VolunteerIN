import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import FIREBASE_CLIENT_CONFIG from "../clientConstants";

let app;
if (getApps().length === 0) {
  app = initializeApp(FIREBASE_CLIENT_CONFIG);
} else {
  app = getApp();
}

const auth = getAuth(app);
export default auth;