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
  ProductMiddlewareList,
} = require("./middlewares");
const ProductRouter = express.Router();

ProductRouter.get("", [ProductMiddlewareList], ProductControllerList);
ProductRouter.post("", ProductMiddlewareCreate, ProductControllerCreate);
ProductRouter.post("/bulks", ProductControllerBulkCreate);
ProductRouter.get("/:id", ProductControllerDetail);
ProductRouter.put("/:id", ProductMiddlewareUpdate, ProductControllerUpdate);
ProductRouter.delete("/:id", ProductControllerRemove);

module.exports = {
  ProductRouter,
};
