//jshint esversion:6
const express = require("express");
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let path =require("path");
let expressLayouts =require("express-ejs-layouts");

const app = express();

app.set("views",path.join(__dirname,"views")); // set the file include ejs 
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function (req,res) {
  res.render("index",{
  });   // read ejs file
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
