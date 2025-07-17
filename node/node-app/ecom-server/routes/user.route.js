const express = require("express");
const { getUser, getAllUser, createUser } = require("../controller/user.controller");

const router = express.Router();

router.get("/all", getAllUser);

router.get("/", getUser);

router.post("/", createUser);

module.exports = router;