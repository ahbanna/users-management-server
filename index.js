const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Hamida", email: "hamida@gmail.com" },
  { id: 2, name: "Jaifa", email: "jaifa@gmail.com" },
  { id: 3, name: "Raida", email: "raida@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  console.log("post api hitting");
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
