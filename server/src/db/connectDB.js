import mongoose from "mongoose"
import { config_app } from "../config/config.js"

const MONGO_URI = config_app.MONGO_URI

const connectDB = () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log(`Connected to MongoDB!`))
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err}`)
      process.exit(1)
    })
}

export default connectDB