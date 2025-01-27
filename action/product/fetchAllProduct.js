const models = require('../../models');

async function fetchAllProduct(page = 1, pageSize = 1){

    const offset = (page -1) * pageSize;
    const limit = pageSize;  
    const { rows: product, count: total } = await models.Product.findAndCountAll({
        include: [
            {
                model: models.Category,
                as: 'category'
            },
            {
                model: models.User,
                as: 'user'
            }
        ],
        limit, offset
    });

    if(total > 0)
    {
        return {
            product,
            total,
            currentPage: page,
            totalPages: Math.ceil(total/pageSize),
            pageSize: pageSize
        };
    }

    return false;
}

module.exports = fetchAllProduct;