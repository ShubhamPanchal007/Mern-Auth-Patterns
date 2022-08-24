const express = require("express");
const app = express();
const PORT = 1337;

app.get("/", (_, res) => {
  res.send("you are on HomePage");
});
app.listen(PORT, () => console.log("Running on port " + PORT));
