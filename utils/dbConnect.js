import mongoose from "mongoose";
import { MONGODB_URL } from "./constants";

const mongoConnect = async () => mongoose.connect(MONGODB_URL);