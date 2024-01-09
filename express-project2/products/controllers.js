const _ = require("lodash");
const { Product } = require("./models");

async function ProductControllerList(req, res) {
  try {
    let qSearch = {};
    const { search, limit, ...filters } = req.query;

    if (search) {
      qSearch = {
        $or: [
          { nama: { $regex: ".*" + search + ".*", $options: "i" } },
          { merk: { $regex: ".*" + search + ".*", $options: "i" } },
        ],
      };
    }

    let products = await Product.find({
      ...filters,
      ...qSearch,
    }).limit(limit ? limit : 10);

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Ups, something when wrong.",
    });
    console.log(error);
  }
}

async function ProductControllerCreate(req, res) {
  try {
    await Product.create({
      nama: req.body.nama,
      satuan: req.body.satuan,
      merk: req.body.merk,
      tipe: req.body.tipe,
      ukuran: req.body.ukuran,
      hargaBeli: req.body.hargaBeli,
      hargaJual: req.body.hargaJual,
      stok: req.body.stok,
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

async function ProductControllerDetail(req, res) {
  try {
    let product = await Product.findOne({ _id: req.params.id });

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Ups, something when wrong.",
    });

    console.log(error);
  }
}

async function ProductControllerUpdate(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: "Sukses memperbarui data" });
  } catch (error) {
    res.status(500).json({ message: "Ups, something when wrong." });
    console.log(error);
  }
}

async function ProductControllerRemove(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Sukses menghapus data" });
  } catch (error) {
    res.status(500).json({ message: "Ups, something when wrong." });
    console.log(error);
  }
}

module.exports = {
  ProductControllerList,
  ProductControllerCreate,
  ProductControllerDetail,
  ProductControllerUpdate,
  ProductControllerRemove,
};
