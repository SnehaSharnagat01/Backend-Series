// In this file I am creating server and configurations

let express = require("express");

let app = express();
app.use(express.json());

let users = [];

// Creating user
app.post("/getUsers", (req, res) => {
  users.push(req.body);
  console.log(users);
  return res.status(201).json({
    message: "user created successfully",
    users,
  });
});

// read user
app.get("/users", (req, res) => {
  return res.status(200).json({
    message: "user is created",
    users,
  });
});

// Updated User
app.patch("/users/update/:index", (req, res) => {
  let { index } = req.params;
  let { age } = req.body;
  users[index].age = age;
  return res.status(200).json({
    message: "user is updated",
    users,
  });
});

// delete user

app.delete("/users/delete/:index", (req, res) => {
  let { index } = req.params;
  console.log(index);
  users.splice(index, 1);

  return res.status(200).json({
    message: "user is deleted successfully",
    users,
  });
});

module.exports = app;
