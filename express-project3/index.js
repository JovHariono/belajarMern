const express = require("express");
const ProductRouter = require("./products/routers");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const CustomerRouter = require("./customers/routers");
const app = express();

DatabaseMongoDBConnector();

app.use(express.json());

// /api/products
app.use("/api", ProductRouter);

// /api/customer
app.use("/api", CustomerRouter);

app.listen(4000, function () {
  console.log(`Server berjalan di port 4000.`);
});
