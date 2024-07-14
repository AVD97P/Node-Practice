const Joi = require("joi");
const cinemas = require("./routes/cinemas");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/cinema", cinemas);

app.get("/", (req, res) => {
  res.send("Hey , AVD");
});

app.listen(3000, () => console.log("listening on 3000"));
