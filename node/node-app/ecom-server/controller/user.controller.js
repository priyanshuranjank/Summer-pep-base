// const express = require("express")
// const user = require("../models/user.models")
// const router = express.Router();

// router.get("/",(req, res) => {
//   res.status(200).send("this is the user router.")
// })

// module.exports = router;
//event loop
//threading
//react hooks
//custom hooks
//async await
//promises
//callbacks
//mongoose commnads and differentions
//rendering virtual dom


const User = require("../models/user.models");

function getUser(req, res) {
  res.status(200).send("This is a user router");
}
function getAllUser(req, res) {
  res.status(200).send("This is a user router");
}
async function createUser(req, res) {
  const { name, email, password } = req.body;
  const userRes = await User.create({
    name,
    email,
    password
  });

  console.log(`User Created: `, JSON.stringify(userRes));
  res.status(200).send("This is a user post router");
}

module.exports = { getUser, getAllUser, createUser };