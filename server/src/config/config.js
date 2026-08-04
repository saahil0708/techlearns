import dotenv from "dotenv"
dotenv.config()

export const config_app = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  NODE_ENV: process.env.NODE_ENV
}