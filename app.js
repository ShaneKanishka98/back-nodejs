const express = require("express");
const cors = require("cors");

const sequelize = require("./src/config/dbConnect");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// App Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  try {
    console.log("Server is running on port 3001.");
    await sequelize.authenticate();
    console.log('DB Connection has been established successfully.');
  } catch (error) {
    console.error("Error:", error.message);
    console.error("Unable to connect to the database:", error);
  }
});
