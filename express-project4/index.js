require("dotenv").config();

const fs = require("fs");
const express = require("express");
const { DatabaseMongoDBConnector } = require("./libs/databases");
const { LibModuleRegister } = require("./libs/modules");
const { ProductRouter } = require("./modules/products/routers");
const { UserRouter } = require("./modules/users/routers");
const app = express();

DatabaseMongoDBConnector();

app.use(express.json());

LibModuleRegister(app, "products", ProductRouter);
LibModuleRegister(app, "users", UserRouter);

app.listen(process.env.APP_PORT, function () {
  console.log(`Server berjalan di port ${process.env.APP_PORT}.`);
});
