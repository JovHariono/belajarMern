const _ = require("lodash");
const { Customer } = require("./models");

async function CustomerControllerList(req, res) {
  try {
    let qSearch = {};
    const { search, limit, ...filters } = req.query;

    if (search) {
      qSearch = {
        $or: [
          { nama_customer: { $regex: ".*" + search + ".*", $options: "i" } }          
        ],
      };
    }

    let customers = await Customer.find({
      ...filters,
      ...qSearch,
    }).limit(limit ? limit : 10);

    return res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({
      message: "Ups, something when wrong.",
    });
    console.log(error);
  }
}

async function CustomerControllerCreate(req, res) {
  try {
    await Customer.create({
        nama_customer: req.body.nama_customer,
        alamat_customer: req.body.alamat_customer,
        telepon_customer: req.body.telepon_customer,
        fax_customer: req.body.fax_customer,
        email_customer: req.body.email_customer,
        website_customer: req.body.website_customer,
        nama_bank_customer: req.body.nama_bank_customer,
        norek_customer: req.body.norek_customer,
        pic_customer: req.body.pic_customer,
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

async function CustomerControllerDetail(req, res) {
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

async function CustomerControllerUpdate(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: "Sukses memperbarui data" });
  } catch (error) {
    res.status(500).json({ message: "Ups, something when wrong." });
    console.log(error);
  }
}

async function CustomerControllerRemove(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Sukses menghapus data" });
  } catch (error) {
    res.status(500).json({ message: "Ups, something when wrong." });
    console.log(error);
  }
}

module.exports = {
  CustomerControllerList,
  CustomerControllerCreate,
  CustomerControllerDetail,
  CustomerControllerUpdate,
  CustomerControllerRemove,
};
