// Dependencies
const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user.js");


userRouter.post("/", (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(rea.body, (error, createdUser) => {

        res.redirect("/");
    });
});

// New (registration page)
userRouter.get("/new", (req, res) => {
    res.render("users/new.ejs", {
      currentUser: req.session.currentUser,
    })
  })

// Create (registration route)

// Export User Router
module.exports = userRouter;