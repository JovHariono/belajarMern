const { validationResult, matchedData } = require("express-validator");
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

module.exports = {
  LibValidationExceptionMiddleware,
};
