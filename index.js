const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "abcd" },
  { id: 2, name: "pqrs" },
  { id: 3, name: "lmno" },
];
app.get("/", (req, res) => {
  res.send("Hey , AVD");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify([1, 2, 3, 4, 5]));
});

app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((ele) => ele.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Not Found!");
  } else {
    res.send(course);
  }
});

app.listen(3000, () => console.log("listening on 3000"));
