const models = require("../../models");
const bcrypt = require("bcryptjs");
const generateWebToken = require("../../helper/jwt");
const generateRefreshToken = require("../../helper/refreshToken");

async function loginUser(userData) {
  const user = await models.User.findOne({
    where: {
      email: userData.email,
    },
  });

  if (await user?.comparePassword(userData.password)) {
    const token = await generateWebToken(user);
    const refreshToken = await generateRefreshToken(user);

    const [updateUser] = await models.User.update(
      {
        refreshToken: refreshToken,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    if(updateUser)
    {
        data = {
            user: user,
            token: token,
            refreshToken: refreshToken
        };
    }

    return data;
  }

  return false;
}

module.exports = loginUser;
