const models = require('../../models');

async function fetchAllUsers()
{
    const users = models.User.findAll();

    console.log(users);
    if(users)
    {
        return users;
    }

    return false;
}

module.exports = fetchAllUsers;