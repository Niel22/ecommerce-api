const Validator = require("fastest-validator");
const models = require("../../models");
const {
  error,
  validationError,
} = require("../../utils/apiResponse");

const schema = {
  firstName: {
    type: "string",
    optional: false,
    min: "3",
  },
  lastName: {
    type: "string",
    optional: false,
    min: "3",
  },
  mobile: {
    type: "string",
    min: "10", 
    optional: false
  },
};

const v = new Validator();

async function validateInput(req, res, next) {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
  };

  const validated = v.validate(data, schema);

  if (validated !== true) {
    return validationError(res, validated);
  }


  req.userData = data;
  next();
}

module.exports = { validateInput };
