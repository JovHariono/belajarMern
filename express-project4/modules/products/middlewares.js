const { LibsAuthenticationsMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
} = require("../../libs/validations");
const { ProductValidatorHargaBeli } = require("./validators");

const ProductMiddlewareList = [LibsAuthenticationsMiddleware];

const ProductMiddlewareCreate = [
  LibsAuthenticationsMiddleware,
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "merk" }),
  LibValidationFields.CharField({ field: "satuan" }),
  LibValidationFields.CharField({ field: "ukuran" }),
  LibValidationFields.CharField({ field: "tipe" }),
  LibValidationFields.NumberField({ field: "hargaBeli" }),
  LibValidationFields.NumberField({
    field: "hargaJual",
    customs: [ProductValidatorHargaBeli],
  }),
  LibValidationExceptionMiddleware,
];

const ProductMiddlewareUpdate = [
  LibsAuthenticationsMiddleware,
  LibValidationFields.CharField({ field: "nama", required: false }),
  LibValidationFields.CharField({ field: "merk", required: false }),
  LibValidationFields.CharField({ field: "satuan", required: false }),
  LibValidationFields.CharField({ field: "ukuran", required: false }),
  LibValidationFields.CharField({ field: "tipe", required: false }),
  LibValidationFields.NumberField({ field: "hargaBeli", required: false }),
  LibValidationFields.NumberField({
    field: "hargaJual",
    required: false,
    customs: [ProductValidatorHargaBeli],
  }),
  LibValidationExceptionMiddleware,
];

module.exports = {
  ProductMiddlewareCreate,
  ProductMiddlewareUpdate,
  ProductMiddlewareList,
};
