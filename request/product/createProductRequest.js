const Validator = require('fastest-validator');
const { validationError, error } = require('../../utils/apiResponse');
const models = require('../../models');

const schema = {
    title: {
        type: "string",
        optional: false,
        min: 3
    },
    description: {
        type: "string",
        optional: false,
        min: 10
    },
    price: {
        type: "string",
        optional: false,
        min: 1
    },
    categoryId: {
        type: "string",
        optional: false,
        min: 1
    },
    quantity: {
        type: "string",
        optional: false,
        min: 1
    },
    color: {
        type: "enum",
        values: ['Black', 'Red'],
        optional: false,
        min: 1
    },
    brand: {
        type: "enum",
        values: ['Apple', 'Samsung', 'Lenovo'],
        optional: false,
        min: 1,
    },
}

const v = new Validator();

async function createProductRequest(req, res, next)
{
    const data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.categoryId,
        quantity: req.body.quantity,
        color: req.body.color,
        brand: req.body.brand,
    }

    const validated = v.validate(data, schema);

    if(validated !== true)
    {
        return validationError(res, validated);
    }

    const category = await models.Category.findByPk(data.categoryId);

    if(!category)
    {
        return error(res, 'Category selected does not exist');
    }

    const productExist = await models.Product.findOne({where: {title: data.title}});

    if(productExist)
    {
        return error(res, "Product with this title already exist");
    }

    data.postedBy = req.userData.id;
    req.data = data;
    next();

}

module.exports = createProductRequest;