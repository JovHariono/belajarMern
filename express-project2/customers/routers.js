const express = require("express");
const {
  CustomerControllerList,
  CustomerControllerCreate,
  CustomerControllerDetail,
  CustomerControllerUpdate,
  CustomerControllerRemove,
} = require("./controllers");
const CustomerRouter = express.Router();

CustomerRouter.get("/customers", CustomerControllerList);
CustomerRouter.post("/customers", CustomerControllerCreate);
CustomerRouter.get("/customers/:id", CustomerControllerDetail);
CustomerRouter.put("/customers/:id", CustomerControllerUpdate);
CustomerRouter.delete("/customers/:id", CustomerControllerRemove);

module.exports = CustomerRouter;
