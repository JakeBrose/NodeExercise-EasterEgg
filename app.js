
const express = require("express");
const app = express();

//////////////
//Malcolm in the Middlewares
/////////////
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get("/chickens", (req, res) => {
  res.sendFile(__dirname + '/see-our-chickens.html');
});
app.get("/eggs", (req, res) => {
    res.sendFile(__dirname + '/see-our-eggs.html');
});
/////////////
//
/////////////
app.listen(8080)