const { validationResult, matchedData, body } = require("express-validator");
const _ = require("lodash");

LibValidationGroup = (errors, field) => {
  const validators = _.mapValues(_.groupBy(errors, field), (clist) =>
    clist.map((error) => _.omit(error, field))
  );

  const results = {};

  for (const [key, value] of Object.entries(validators)) {
    results[key] = value.map(({ msg }) => msg);
  }

  return results;
};

const LibValidationExceptionMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(LibValidationGroup(errors.array(), "path"));
  }

  req.cleanedData = matchedData(req);

  return next();
};

const Field = ({
  field,
  widget,
  required = true,
  customs = [],
  sanitizers = [],
}) => {
  widget = widget ? widget : body;
  const fieldSet = widget(field);

  fieldSet.notEmpty().withMessage("This field not be blank");

  if (!required) {
    fieldSet.optional();
  }

  for (const custom of customs) {
    fieldSet.custom(custom);
  }

  for (const sanitizer of sanitizers) {
    fieldSet.customSanitizer(sanitizer);
  }

  return fieldSet;
};

const CharField = ({ minLength = 1, maxLength = 225, ...args }) => {
  const fieldSet = Field(args);
  fieldSet
    .isLength({ min: minLength, max: maxLength })
    .withMessage(
      `This field must have a minimum of ${minLength} characters and no more than ${maxLength} characters`
    );

  return fieldSet;
};

const NumberField = ({ minLength = 1, maxLength = 20000000, ...args }) => {
  const fieldSet = Field(args);
  fieldSet
    .isInt({ min: minLength, max: maxLength })
    .withMessage(`Fields must be at a minimum of ${minLength}`);

  return fieldSet;
};

const LibValidationsMiddleware = (...args) => {
  return args;
};

module.exports = {
  LibValidationExceptionMiddleware,
  LibValidationsMiddleware,
  LibValidationFields: {
    Field,
    CharField,
    NumberField,
  },
};
