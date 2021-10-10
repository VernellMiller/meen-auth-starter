// require dependencies
const express = require("express");
const mongoose = require("mongoose");

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


//////// ROUTES INDUCES////////


// Index route
app.get("/", (req, res) => {
    res.send("Hello World")
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
