const express = require("express");
const User = require("../models/userModel");
const app = express.Router();

// app.use(cors({origin:"http://localhost:5000"}));
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Allow', 'Post');
  next();
}


app.use(allowCrossDomain);
app.post("/register", async (req, res) => {
  try {
    const newuser = new User(req.body);
    await newuser.save();

    res.send("Registration Successfull");
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(400).json("Login failed");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/:username", async (req, res) => {
  try {
    const result1 = await User.findOne({
      username: req.body.username,
      
    });

    if (result1) {
      res.send(result1);
    } else {
      res.status(400).json("No user found");
    }
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
    
  }
});





module.exports = app;