const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const Cinemas = [
  { id: 1, name: "Movie1" },
  { id: 2, name: "Movie2" },
  { id: 3, name: "Movie3" },
];
app.get("/", (req, res) => {
  res.send("Hey , AVD");
});

app.get("/api/cinema", (req, res) => {
  // res.send(JSON.stringify([1, 2, 3, 4, 5]));
  res.send(JSON.stringify(Cinemas));
});

app.post("/api/cinema", (req, res) => {
  // if (!req.body.name || req.body.name.length < 5) {
  //   //400 Bad Request
  //   res.status(400).send("Name should be required with min 5 character");
  //   return;
  // }

  const { error } = validateCinema(req.body);
  if (error) {
    //400 Bad Request
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: Cinemas.length + 1,
    name: req.body.name,
  };
  Cinemas.push(course);
  res.send(course);
});

app.get("/api/cinema/:id", (req, res) => {
  const course = Cinemas.find((ele) => ele.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Not Found!");
    return;
  } else {
    res.send(course);
  }
});

app.put("/api/cinema/:id", (req, res) => {
  const result = Cinemas.find((ele) => ele.id === parseInt(req.params.id));
  if (!result) {
    res.status(404).send("Not Found! With given 'ID'");
    return;
  }
  const { error } = validateCinema(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  result.name = req.body.name;

  res.send(result);
});

app.delete("/api/cinema/:id", (req, res) => {
  const title = Cinemas.find((ele) => ele.id === parseInt(req.params.id));
  if (!title) {
    res.status(404).send("The cinema with given 'Id' , Not found!");
    return;
  }

  const index = Cinemas.indexOf(title);
  Cinemas.splice(index, 1);

  res.send(Cinemas);
});

function validateCinema(body) {
  const schema = {
    name: Joi.string().min(5).required(),
  };
  return Joi.validate(body, schema);
}

app.listen(3000, () => console.log("listening on 3000"));
