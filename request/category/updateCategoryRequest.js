const Validator = require('fastest-validator');
const { validationError, error } = require('../../utils/apiResponse');
const { Op } = require('sequelize');
const models = require('../../models');

const schema = {
    title: {
        type: "string",
        optional: false,
        min: "2"
    },
    description: {
        type: "string",
        optional: false,
        min: "10"
    }
}

const v = new Validator();

async function updateCategoryRequest(req, res, next)
{
    const data = {
        title: req.body.title,
        description: req.body.description
    }

    const validated = v.validate(data, schema);

    if(validated !== true)
    {
        return validationError(res, validated);
    }

    const existingCategory = await models.Category.findOne({where: {title: data.title, id: {[Op.ne]: req.params.id}}});

    if(existingCategory)
    {
        return error(res, "This title already exist");
    }

    req.categoryData = data;
    next();
}

module.exports = updateCategoryRequest;