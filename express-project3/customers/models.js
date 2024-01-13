const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  nama_customer: { type: String, required: true },
  alamat_customer: { type: String, required: true },
  telepon_customer: { type: String, required: true },
  fax_customer: { type: String, required: true },
  email_customer: { type: String, required: true },
  website_customer: { type: String, required: true },
  nama_bank_customer: { type: String, required: true },
  norek_customer: { type: String, required: true },
  pic_customer: { type: String, required: true },
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = {
  Customer,
};
