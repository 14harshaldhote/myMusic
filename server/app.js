const express = require('express');
const app = express();

const cors=require('cors');

app.get("/",(req, res) => {
    return res.json("hello there...........")
})
app.listen(4000, ()=> console.log("Listing to the port 4000"));
