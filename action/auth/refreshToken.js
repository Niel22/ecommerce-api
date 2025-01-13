const generateWebToken = require('../../helper/jwt');
const models = require('../../models');
const jwt = require('jsonwebtoken');

async function refreshToken(cookies) 
{
  const cookie = cookies;

  if (!cookie?.refreshToken) {
    return false;
  }

  const user = await models.User.findOne({
    where: {
        refreshToken: cookie.refreshToken
    }
  });

  if(!user)
  {
    return false;
  }

  const decoded = jwt.verify(cookie.refreshToken, process.env.JWT_KEY);
  const accessToken = await generateWebToken(user);
  
  return accessToken;
  
}

module.exports = refreshToken;
