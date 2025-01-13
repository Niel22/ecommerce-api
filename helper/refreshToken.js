const jwt = require('jsonwebtoken');

async function generateRefreshToken(user)
{
    return await jwt.sign(
        {
            userId: user.id,
        }, 
        process.env.JWT_KEY,
        { expiresIn: "3d"}
    );
}

module.exports = generateRefreshToken;