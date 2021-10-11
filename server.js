// require dependencies
const express = require("express");
const mongoose = require("mongoose");
const userController = require("./controllers/users");
const session = require("express-session");
const sessionController = require("./controllers/sessions")

// Initialize express App
const app = express();

// Configure Settings
require("dotenv").config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// Database Configuration
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on("connected", () => {
    console.log(`Connected to MongoDB`)
});

db.on("error", (error) => {
    console.log(`An Error Occurred with MongoDB ${error.message}`)
});

// Mount Middleware
app.use(express.urlencoded({extended:false}));
app.use("/users", userController);
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use("/sessions", sessionController);




//////// ROUTES INDUCES////////


// Index route
app.get("/", (req, res) => {
    res.render("index.ejs")
});


// New Route



// Delete Route




// Update Route




// Create Route




// Edit Route





// Show Route





app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of typing on port: ${PORT}`)
});
