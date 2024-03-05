const express = require("express");
const app = express();
const port = 5100;

app.get("/", (req, res) => {
  res.send("Hello next World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
