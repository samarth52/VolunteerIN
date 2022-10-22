import dotenv from "dotenv";
dotenv.config()

const { MONGODB_URL } = process.env

export {
  MONGODB_URL,
}