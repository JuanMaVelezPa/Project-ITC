"use strict";

var Product = require("../models/product");
var fileSystem = require("fs");
var path = require("path");

var controller = {
  newProduct: function (req, res) {
    var product = new Product();
    var request = req.body;

    product.name = req.body.name;
    product.description = request.description;
    product.value = request.value;
    product.year = request.year;
    product.image = request.image;
    product.imageFile = request.imageFile;

    product.save((error, productStored) => {
      if (error)
        return res.status(500).send({
          message: "You have error stored the person.",
        });

      if (!productStored)
        return res.status(404).send({
          message: "Dont have stored the person",
        });

      console.log(productStored._id);
      return res.status(200).send({
        product: productStored,
      });
    });
  },

  getProductById: function (req, res) {
    var productId = req.params.id;

    Product.findById(productId, (error, product) => {
      if (error) {
        return res.status(500).send({
          message: "You have error finding the product with id " + productId,
        });
      }

      if (!product) {
        return res.status(204).send({
          message: "I didn't find the product with this id " + productId,
        });
      }

      return res.status(200).send({
        product,
      });
    });
  },

  getProductByName: function (req, res) {
    var productName = req.params.name;

    Product.find({ name: productName }).exec((error, product) => {
      if (error) {
        return res.status(500).send({
          message: "You have error finding the product with id " + productId,
        });
      }

      if (!product) {
        return res.status(204).send({
          message: "I didn't find the product with this id " + productId,
        });
      }

      return res.status(200).send({
        product,
      });
    });
  },

  getProducts: function (req, res) {
    Product.find((error, products) => {
      if (error) {
        return res.status(500).send({
          message: "You have error finding the products",
        });
      }

      if (!products) {
        return res.status(204).send({
          message: "I didn't find the products ",
        });
      }
      return res.status(200).send({
        products,
      });
    });
  },

  uploadImage: function (req, res) {
    var productId = req.params.id;

    if (req.files) {
      var path = req.files.imageFile.path;
      var pathSplit = path.split("\\");
      var fileName = pathSplit[1];
      console.log("Path: " + path);
      console.log("FileName: " + fileName);

      Product.findByIdAndUpdate(
        productId,
        { imageFile: fileName },
        (error, productUpdated) => {
          if (error) {
            return res.status(500).send({
              message: "Error with update for productId" + productId,
            });
          }

          if (!productUpdated) {
            return res.status(204).send({
              message: "Product with id " + productId + " not exist.",
            });
          }

          return res.status(200).send({
            message:
              "Product with id " +
              productId +
              " was updated with imageFile " +
              fileName,
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
    console.log("filename :" + fileName);
    var pathFile = "./uploads/" + fileName;
    console.log(pathFile);

    fileSystem.exists(pathFile, (exists) => {
      // console.log(path);
      // console.log(exists);
      if (exists) {
        console.log(exists);
        console.log("return: " + res.sendFile(path.resolve(pathFile)));
        return res.sendFile(path.resolve(pathFile));
      } else {
        return res.status(204).send({
          message: "ImageFile not exist.",
        });
      }
    });
  },

  updateProduct: function (req, res) {
    var productId = req.params.id;
    console.log(req.body);
    Product.findByIdAndUpdate(productId, req.body, (error, product) => {
      if (error)
        return res.status(500).send({
          message: "Ha ocurrido un error editando el product",
        });
      if (!product)
        return res.status(204).send({
          message: "No se pudo editar el product con este id" + productId,
        });
      return res.status(200).send({
        message: "Product editado exitosamente",
      });
    });
  },

  deleteProduct: function (req, res) {
    var productId = req.params.id;
    console.log(req.body);

    Product.deleteOne({ _id: productId }, (error, product) => {
      if (error)
        return res.status(500).send({
          message: "Ha ocurrido un error eliminando el product",
        });
      if (product.deletedCount == 0)
        return res.status(204).send({
          message: "No se pudo eliminar el product con este id" + productId,
        });
      return res.status(200).send({
        message: "Product eliminado exitosamente",
      });
    });
  },
};

module.exports = controller;
