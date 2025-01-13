const models = require('../../models');

async function fetchSingleCategory(id)
{
    const category = await models.Category.findByPk(id);

    if(category)
    {
        return category;
    }

    return false;
}

module.exports = fetchSingleCategory;