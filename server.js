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
}

userRoute.route('/fetchUserName').get(function (req, res) {
  Users.find({username: req.query.username})
    .exec(function (err, user) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log(user.data);
      res.json(user.data);
    }
  });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
