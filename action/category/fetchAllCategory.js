const models = require('../../models');

async function fetchAllCategory(page = 1, pageSize = 10)
{
    offset = (page -1) * pageSize;
    limit = pageSize;

    const { rows: category, count: total} = await models.Category.findAndCountAll();
    
    if(total > 0)
    {
        return {
            category,
            total,
            currentPage: page,
            totalPages: Math.ceil(total/pageSize),
            pageSize: pageSize
        };
    }

    return false;
}

module.exports = fetchAllCategory;