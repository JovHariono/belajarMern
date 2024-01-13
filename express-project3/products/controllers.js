const _ = require("lodash");
const { Product } = require("./models");
const { ProductFilter } = require("./filters");
const { LibPaginationResponse } = require("../libs/paginations");
const { LibHTTPResponseException } = require("../libs/https");

async function ProductControllerList(req, res) {
  try {
    const results = Product.find(ProductFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    console.log(error);
  }
}

async function ProductControllerCreate(req, res) {
  try {
    const result = await Product.create(req.cleanedData);
    return res.status(201).json(result);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

async function ProductControllerDetail(req, res) {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) throw { status: 404, message: "Not found" };

    return res.status(200).json(product);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

async function ProductControllerUpdate(req, res) {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) throw { status: 404, message: "Not found" };

    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(product);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

async function ProductControllerRemove(req, res) {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) throw { status: 404, message: "Not found" };

    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

async function ProductControllerBulkCreate(req, res) {
  try {
    await Product.insertMany(req.body);

    res.status(201).json({
      message: "Sukses membuat bulk data",
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  ProductControllerList,
  ProductControllerCreate,
  ProductControllerDetail,
  ProductControllerUpdate,
  ProductControllerRemove,
  ProductControllerBulkCreate,
};
