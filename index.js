const express = require("express");
const app = express();

app.use(express.json());

const Cinema = [
  { id: 1, name: "Movie1" },
  { id: 2, name: "Movie2" },
  { id: 3, name: "Movie3" },
];
app.get("/", (req, res) => {
  res.send("Hey , AVD");
});

app.get("/api/cinema", (req, res) => {
  res.send(JSON.stringify([1, 2, 3, 4, 5]));
});

app.post("/api/cinema", (req, res) => {
  const course = {
    id: Cinema.length + 1,
    name: req.body.name,
  };
  Cinema.push(course);
  res.send(course);
});

app.get("/api/cinema/:id", (req, res) => {
  const course = Cinema.find((ele) => ele.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Not Found!");
  } else {
    res.send(course);
  }
});

app.listen(3000, () => console.log("listening on 3000"));
