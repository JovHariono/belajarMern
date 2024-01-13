const { body } = require("express-validator");
const { LibValidationExceptionMiddleware } = require("../libs/validations");

const ProductMiddlewareCreate = [
  body("nama")
    .notEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage(
      "Panjang nama tidak boleh kurang 3 dan lebih dari 20 karakter"
    ),
  body("merk")
    .notEmpty()
    .withMessage("Merk tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage("Panjang merk tidak boleh kurang 1 dan lebih dari 7 karakter"),
  body("satuan")
    .notEmpty()
    .withMessage("Satuan tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage(
      "Panjang satuan tidak boleh kurang 1 dan lebih dari 7 karakter"
    ),
  body("ukuran")
    .notEmpty()
    .withMessage("Satuan tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage(
      "Panjang satuan tidak boleh kurang 1 dan lebih dari 7 karakter"
    ),
  body("tipe")
    .notEmpty()
    .withMessage("Tipe tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage("Panjang tipe tidak boleh kurang 1 dan lebih dari 7 karakter"),
  body("hargaBeli")
    .notEmpty()
    .withMessage("Harga beli tidak boleh kosong")
    .isInt({
      min: 10000,
      max: 10_000_000,
    })
    .withMessage("Minimal harga beli adalah 10000 dan maksimal 10 Juta."),
  body("hargaJual")
    .notEmpty()
    .withMessage("Harga jual tidak boleh kosong")
    .isInt({
      min: 10000,
      max: 10_000_000,
    })
    .withMessage("Minimal harga jual adalah 10000 dan maksimal 10 Juta.")
    .custom((value, { req }) => {
      if (value <= req.body.hargaBeli) {
        throw new Error(
          "Nilai harga jual tidak boleh lebih kecil dari harga beli"
        );
      }
      return value;
    }),
  LibValidationExceptionMiddleware,
];

const ProductMiddlewareUpdate = [
  body("nama")
    .optional()
    .notEmpty()
    .withMessage("Nama tidak boleh kosong")
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage(
      "Panjang nama tidak boleh kurang 3 dan lebih dari 20 karakter"
    ),
  body("merk")
    .optional()
    .notEmpty()
    .withMessage("Merk tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage("Panjang merk tidak boleh kurang 1 dan lebih dari 7 karakter"),
  body("satuan")
    .optional()
    .notEmpty()
    .withMessage("Satuan tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage(
      "Panjang satuan tidak boleh kurang 1 dan lebih dari 7 karakter"
    ),
  body("ukuran")
    .optional()
    .notEmpty()
    .withMessage("Satuan tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage(
      "Panjang satuan tidak boleh kurang 1 dan lebih dari 7 karakter"
    ),
  body("tipe")
    .optional()
    .notEmpty()
    .withMessage("Tipe tidak boleh kosong")
    .isLength({
      max: 7,
    })
    .withMessage("Panjang tipe tidak boleh kurang 1 dan lebih dari 7 karakter"),
  body("hargaBeli")
    .optional()
    .notEmpty()
    .withMessage("Harga beli tidak boleh kosong")
    .isInt({
      min: 10000,
      max: 10_000_000,
    })
    .withMessage("Minimal harga beli adalah 10000 dan maksimal 10 Juta."),
  body("hargaJual")
    .optional()
    .notEmpty()
    .withMessage("Harga jual tidak boleh kosong")
    .isInt({
      min: 10000,
      max: 10_000_000,
    })
    .withMessage("Minimal harga jual adalah 10000 dan maksimal 10 Juta.")
    .custom((value, { req }) => {
      if (value <= req.body.hargaBeli) {
        throw new Error(
          "Nilai harga jual tidak boleh lebih kecil dari harga beli"
        );
      }
      return value;
    }),
  LibValidationExceptionMiddleware,
];

module.exports = {
  ProductMiddlewareCreate,
  ProductMiddlewareUpdate,
};
