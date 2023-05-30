const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

// crate a route
app.get("/", (req, res) => {
  res.send("hello from the server");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
