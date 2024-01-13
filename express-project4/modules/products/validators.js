const { body } = require("express-validator");

const ProductValidatorHargaBeli = (value, { req }) => {
  if (value <= req.body.hargaBeli) {
    throw new Error("Nilai harga jual tidak boleh lebih kecil dari harga beli");
  }
  return value;
};

module.exports = {
  ProductValidatorHargaBeli,
};
