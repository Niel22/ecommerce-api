const Validator = require('fastest-validator');
const { validationError } = require('../utils/apiResponse');

const schema = {
    email: {
        type: "email",
        optional: false,
    },
    password: {
        type: "string",
        optional: false
    }
}

const v = new Validator();

async function loginRequest(req, res, next)
{
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    const validated = v.validate(data, schema);

    if(validated !== true)
    {
        return validationError(res, validated);
    }

    req.userData = data;
    next();
}

module.exports = loginRequest;