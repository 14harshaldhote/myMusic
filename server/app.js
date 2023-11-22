const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
const mongoose = require('mongoose');

app.get("/", (req, res) => {
    return res.json("Hello there...........");
});

//user authentication route





mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", (error) => console.error("Error connecting to MongoDB:", error));

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
