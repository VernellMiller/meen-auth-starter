const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
    res.send("Hello World")
});

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of typing on port: ${PORT}`)
});