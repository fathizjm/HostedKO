const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json());
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const path = require("path");
const Users = require("./models/userModel");
app.use("/api/user", userRoute);

// const {MONGOURI}= require('./config/keys')
if (process.env.NODE_ENV === "production") {
  
 
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/home", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/:username", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/profile", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/templates/:id", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/Vcard", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/templates_public/:id", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/login", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/register", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
  app.get("/UserProfile", (req, res) => {
    app.use(express.static(path.resolve(__dirname, 'client','build')));
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}



app.get("/", (req, res) => res.send("Hello World!"));
// app.get("/home", (req, res) => res.sendFile(path.resolve(__dirname, 'client','build')));
// app.get("/:username", (req, res) => res.sendFile(path.resolve(__dirname, 'client','build','index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
