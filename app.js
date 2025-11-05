const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello, testing automic deployment");
});
module.exports = app;

// test: trigger CI workflow 
