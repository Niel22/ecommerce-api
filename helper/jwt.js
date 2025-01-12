const jwt = require('jsonwebtoken');

async function generateWebToken(user)
{
    return await jwt.sign(
        {
            userId: user.id,
            email: user.email
        }, 
        process.env.JWT_KEY,
        { expiresIn: "3d"}
    );
}

module.exports = {
    generateWebToken
}