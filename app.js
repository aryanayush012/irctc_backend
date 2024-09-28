const express = require("express");
const authRoutes = require("./routes/authRoutes.js");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
