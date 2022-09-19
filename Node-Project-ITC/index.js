"user strict";

require("dotenv").config();

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT;


mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_ITC)
  .then(() => {
    console.log("You have connected to the database...");

    app.listen(port, () => {
      console.log("Service available in the port: " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
