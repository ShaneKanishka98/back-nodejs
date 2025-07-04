const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// App Listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  try {
    console.log("Server is running on port 3001");
  } catch (error) {
    console.error("Error:", error.message);
  }
});
