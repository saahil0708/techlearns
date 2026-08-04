import app from "./src/app.js";
import connectDB from "./src/db/connectDB.js";
import { config_app } from "./src/config/config.js";
import http from "http"

const Server = http.createServer(app)
const PORT = config_app.PORT

Server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
