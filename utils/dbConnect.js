import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConstants";

const mongoConnect = async () => mongoose.connect(MONGODB_URL);
export default mongoConnect;