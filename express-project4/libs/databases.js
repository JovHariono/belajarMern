const mongoose = require("mongoose");

function DatabaseMongoDBConnector() {
  mongoose
    .connect(
      `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
    )
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
