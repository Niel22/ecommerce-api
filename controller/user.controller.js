const registerUser = require("../action/auth/registerUser");
const loginUser = require("../action/auth/loginUser");
const { success, error } = require("../utils/apiResponse");

async function register(req, res) {
  const user = await registerUser(req.userData);

  if (user) {
    return success(res, {}, "User Created");
  }

  return error(res, "User cannot be created");
}

async function login(req, res)
{
  const user = await loginUser(req.userData);

  if(user)
  {
    return success(res, user, "User logged in");
  }

  return error(res, "Innvalid credentials");
}

module.exports = {
  register,
  login
};
