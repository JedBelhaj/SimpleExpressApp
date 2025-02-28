require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
