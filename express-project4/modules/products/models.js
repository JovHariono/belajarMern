const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  satuan: { type: String, required: true },
  merk: { type: String, required: true },
  tipe: { type: String, required: true },
  ukuran: { type: String, required: true },
  hargaBeli: { type: Number, required: true },
  hargaJual: { type: Number, required: true },
  stok: { type: Number, required: true, default: 1 },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
};
