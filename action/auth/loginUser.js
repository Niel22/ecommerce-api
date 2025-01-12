const models = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('../../helper/jwt');

async function loginUser(userData)
{
    const user = await models.User.findOne({
        where: {
            email: userData.email
        }
    });

    if(await user?.comparePassword(userData.password))
    {
        const token = await jwt.generateWebToken(user);
        data = {
            user: user,
            token: token
        }

        return data;
    }

    return false;
}

module.exports = loginUser;