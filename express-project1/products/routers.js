const express = require("express");
const {
  ProductControllerList,
  ProductControllerCreate,
} = require("./controllers");
const ProductRouter = express.Router();

ProductRouter.get("/products", ProductControllerList);
ProductRouter.post("/products", ProductControllerCreate);

module.exports = ProductRouter;
