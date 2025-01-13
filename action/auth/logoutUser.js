const models = require('../../models');

async function logoutUser(cookies) {
  const cookie = cookies;

  if (!cookie?.refreshToken) {
    return false;
  }

  const user = await models.User.findOne({
    where: {
      refreshToken: cookie.refreshToken,
    },
  });

  if(!user)
  {
    return false;
  }

  const result = await models.User.update({refreshToken: null}, {where: {refreshToken: cookie.refreshToken}});
  if(result)
  {
    return true;
  }

}

module.exports = logoutUser;