const models = require('../../models');

async function fetchAllCategory()
{
    const category = await models.Category.findAll();
    
    if(category.length !== 0)
    {
        return category;
    }

    return false;
}

module.exports = fetchAllCategory;