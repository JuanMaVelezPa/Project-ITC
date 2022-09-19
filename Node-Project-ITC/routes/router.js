"use strict";

var express = require("express");
var ProductController = require("../controllers/product");
var router = express.Router();

//Middleware
var multiparty = require("connect-multiparty");
var multipartyMiddleware = multiparty({ uploadDir: "./uploads" });

// Product
router.post("/product/newProduct", ProductController.newProduct);

router.get("/product/getProductById/:id", ProductController.getProductById);

router.get(
  "/product/getProductByName/:name",
  ProductController.getProductByName
);

router.get("/product/getProducts", ProductController.getProducts);

router.post(
  "/product/uploadImage/:id",
  multipartyMiddleware,
  ProductController.uploadImage
);

router.get(
  "/product/getImageByFileName/:name",
  ProductController.getImageByFileName
);

router.post("/product/updateProductsById/:id", ProductController.updateProduct);

module.exports = router;
