import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/connectDB.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

// Connect Database and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running on port ${PORT}: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server due to DB connection error:", err);
  });
