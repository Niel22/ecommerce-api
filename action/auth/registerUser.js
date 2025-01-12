const models = require("../../models");

async function registerUser(userData) {
  
  const user = await models.User.create(userData);

  if (user) {
    return true;
  }

  return false;
}

module.exports = registerUser;
