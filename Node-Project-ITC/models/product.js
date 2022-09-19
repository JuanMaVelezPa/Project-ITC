"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = Schema({
  name: String,
  description: String,
  value: String,
  year: String,
  image: String,
  imageFile: String,
});

module.exports = mongoose.model("Product", ProductSchema);
