"use strict";

var Person = require("../models/person");
var fileSystem = require("fs");
var path = require("path");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Home",
    });
  },

  test: function (req, res) {
    return res.status(200).send({
      message: "Test",
    });
  },

  savePerson: function (req, res) {
    var person = new Person();

    person.firstName = req.body.firstName;
    person.lastName = req.body.lastName;
    person.address = req.body.address;
    person.phone = req.body.phone;
    person.birthDate = req.body.birthDate;

    person.save((error, personaStored) => {
      if (error)
        return res.status(500).send({
          message: "You have error stored the person.",
        });

      if (!personaStored)
        return res.status(404).send({
          message: "Dont have stored the person",
        });

      console.log(personaStored._id);
      return res.status(200).send({
        person: personaStored,
      });
    });
  },

  getPersonById: function (req, res) {
    var personId = req.params.id;

    Person.findById(personId, (error, person) => {
      if (error) {
        return res.status(500).send({
          message: "You have error finding the person with id " + personId,
        });
      }

      if (!person) {
        return res.status(204).send({
          message: "I didn't find the person with this id " + personId,
        });
      }

      return res.status(200).send({
        person,
      });
    });
  },

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
