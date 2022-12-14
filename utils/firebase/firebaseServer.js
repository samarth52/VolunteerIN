import { credential } from "firebase-admin";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FIREBASE_SERVER_CONFIG } from "../serverConstants";

let app;
if (getApps().length === 0) {
  app = initializeApp({ credential: credential.cert(FIREBASE_SERVER_CONFIG) });
} else {
  app = getApp();
}

const auth = getAuth(app);
export default auth;