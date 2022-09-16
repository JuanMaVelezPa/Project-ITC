"user strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var projectRoutes = require("./routes/router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/api", projectRoutes);

module.exports = app;

// app.get("/test", (req, res) => {
//   res.status(200).send({ message: "this is a test with NodeJS" });
// });

// app.get("", (req, res) => {
//   res.status(200).send({ message: "this is a other test with NodeJS" });
// });

// app.post("/test/:key", (req, res) => {
//   console.log(req.body.firstName);
//   console.log(req.body.lastName);
//   console.log(req.query.id);
//   console.log(req.params.key);
//   res.status(200).send({
//     message: "Post service",
//   });
// });
