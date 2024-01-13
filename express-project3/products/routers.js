const express = require("express");
const {
  ProductControllerList,
  ProductControllerCreate,
  ProductControllerDetail,
  ProductControllerUpdate,
  ProductControllerRemove,
  ProductControllerBulkCreate,
} = require("./controllers");
const {
  ProductMiddlewareCreate,
  ProductMiddlewareUpdate,
} = require("./middlewares");
const ProductRouter = express.Router();

ProductRouter.get("/products", ProductControllerList);
ProductRouter.post(
  "/products",
  ProductMiddlewareCreate,
  ProductControllerCreate
);
ProductRouter.post("/products/bulks", ProductControllerBulkCreate);
ProductRouter.get("/products/:id", ProductControllerDetail);
ProductRouter.put(
  "/products/:id",
  ProductMiddlewareUpdate,
  ProductControllerUpdate
);
ProductRouter.delete("/products/:id", ProductControllerRemove);

module.exports = ProductRouter;
