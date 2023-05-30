const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3001;

// crate a route
app.get("/api", (req, res) => {
  // res.send("heeeeelo");
  res.json({ users: ["user1", "user2", "user3"] });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
