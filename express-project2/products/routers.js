const express = require("express");
const {
  ProductControllerList,
  ProductControllerCreate,
  ProductControllerDetail,
  ProductControllerUpdate,
  ProductControllerRemove,
} = require("./controllers");
const ProductRouter = express.Router();

ProductRouter.get("/products", ProductControllerList);
ProductRouter.post("/products", ProductControllerCreate);
ProductRouter.get("/products/:id", ProductControllerDetail);
ProductRouter.put("/products/:id", ProductControllerUpdate);
ProductRouter.delete("/products/:id", ProductControllerRemove);

module.exports = ProductRouter;
