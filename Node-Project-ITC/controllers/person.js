"use strict";

var Person = require("../models/person");
var fileSystem = require("fs");
var path = require("path");

var controller = {
  
  uploadImage: function (req, res) {
    var personId = req.params.id;

    if (req.files) {
      var path = req.files.image.path;
      var pathSplit = path.split("\\");
      var fileName = pathSplit[1];
      console.log("Path: " + path);
      console.log("FileName: " + fileName);

      Person.findByIdAndUpdate(
        personId,
        { imageFile: fileName },
        (error, personUpdated) => {
          if (error) {
            return res.status(500).send({
              message: "Error with update for PersonId" + personId,
            });
          }

          if (!personUpdated) {
            return res.status(204).send({
              message: "Person with id " + personId + " not exist.",
            });
          }

          return res.status(200).send({
            message: "Person with id " + personId + " was updated",
          });
        }
      );
    } else {
      return res.status(202).send({
        message: "Processing the request",
      });
    }
  },

  getImageByFileName: function (req, res) {
    var fileName = req.params.name;
    console.log(fileName);
    var pathFile = "./uploads/" + fileName;

    console.log(pathFile);

    fileSystem.exists(pathFile, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(pathFile));
      } else {
        return res.status(204).send({
          message: "ImageFile not exist.",
        });
      }
    });
  },
};

module.exports = controller;
