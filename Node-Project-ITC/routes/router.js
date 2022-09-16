"use strict";

var express = require("express");
var PersonController = require("../controllers/person");
var ProductController = require("../controllers/product");
var router = express.Router();

//Middleware
var multiparty = require("connect-multiparty");
var multipartyMiddleware = multiparty({ uploadDir: "./uploads" });

// Person
router.get("/person/home", PersonController.home);
router.post("/person/test", PersonController.test);
router.post("/person/save", PersonController.savePerson);
router.get("/person/getPersonById/:id", PersonController.getPersonById);
router.post(
  "/uploadImage/:id",
  multipartyMiddleware,
  PersonController.uploadImage
);
router.get(
  "/person/getImageByFileName/:name",
  PersonController.getImageByFileName
);

// Product
router.post("/product/newProduct", ProductController.newProduct);
router.get("/product/getProductById/:id", ProductController.getProductById);
router.get(
  "/product/getProductByName/:name",
  ProductController.getProductByName
);
router.post("/product/updateProductsById/:id", ProductController.updateProduct);
router.get("/product/getProducts", ProductController.getProducts);

module.exports = router;
