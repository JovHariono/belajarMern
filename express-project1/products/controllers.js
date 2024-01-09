const { Product } = require("./models");

function ProductControllerList(req, res) {
  const products = {
    results: [
      {
        _id: "90sid9i-0i8-0di0298",
        name: "Product 1",
        price: 4500,
        stock: 10,
      },
      {
        id: 2,
        name: "Product 2",
        price: 5900,
        stock: 19,
      },
    ],
  };
  res.status(200).json(products);
}

async function ProductControllerCreate(req, res) {
  try {

    await Product.create({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    });

    res.status(201).json({
      message: "Sukses membuat data",
    });
  } catch (error) {
    res.status(500).json({
      message: "Ups, something when wrong.",
    });

    console.log(error);
  }
}

module.exports = {
  ProductControllerList,
  ProductControllerCreate,
};

// 1. siapkan sebuah file models [ok]
// 2. Jalankan mongodb nya [ok]
// 3. Buat koneksi ke databasenya (mongoose) [ok]
// 4. Buat modelnya [ok]
// 5. Gunakan modelnya [ok]
