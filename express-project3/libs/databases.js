const mongoose = require("mongoose");

function DatabaseMongoDBConnector() {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/db_sales_express`)
    .then(() => {
      console.log("Berhasil terkoneksi dengan database MongoDB.");
    })
    .catch((error) => {
      console.log("Koneksi gagal ke database.");
      console.log(error);
      process.exit(1);
    });
}

module.exports = {
  DatabaseMongoDBConnector,
};
