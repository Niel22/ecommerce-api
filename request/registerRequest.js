const Validator = require("fastest-validator");
const models = require("../models");
const {
  error,
  validationError,
} = require("../utils/apiResponse");

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
  email: {
    type: "email",
    optional: false,
  },
  mobile: {
    type: "string",
    min: "10", 
    optional: false
  },
  password: {
    type: "string",
    min: "8",
    optional: false,
  },
};

const v = new Validator();

async function registerRequest(req, res, next) {
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  };

  const validated = v.validate(data, schema);

  if (validated !== true) {
    return validationError(res, validated);
  }

  const existingUser = await models.User.findOne({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    return error(res, "User with this email already exist");
  }

  req.userData = data;
  next();
}

module.exports = registerRequest;
