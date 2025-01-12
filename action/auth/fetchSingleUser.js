const models = require('../../models');

async function fetchSingleUser(id)
{
    const user = await models.User.findByPk(id);

    if(user)
    {
        return user;
    }

    return false;
}

module.exports = fetchSingleUser;