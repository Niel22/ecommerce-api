const models = require('../../models');

async function fetchAllUsers()
{
    const users = await models.User.findAll();

    if(users)
    {
        return users;
    }

    return false;
}

module.exports = fetchAllUsers;