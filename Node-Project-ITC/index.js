"user strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 7777;

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://itc-admin:itc-admin@cluster0.tz6pisx.mongodb.net/test"
  )
  .then(() => {
    console.log("You have connected to the database...");

    app.listen(port, () => {
      console.log("Service available in the port: " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
