// Dependencies
const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");


userRouter.post("/", (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
});

// New (registration page)

// Create (registration route)

// Export User Router
module.exports = userRouter;