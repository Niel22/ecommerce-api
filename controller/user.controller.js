const fetchAllUser = require('../action/user/fetchAllUser');
const fetchSingleUser = require('../action/user/fetchSingleUser');
const deleteUser = require('../action/user/deleteUser');
const updateUser = require('../action/user/updateUser');
const userResource = require('../resource/userResource');
const blockUser = require("../action/user/blockUser");
const unblockUser = require("../action/user/unblockUser");
const { success, error } = require("../utils/apiResponse");

async function index(req, res)
{
  
  if(users = await fetchAllUser())
    {
    return success(res, userResource.collection(users));
  }

  return error(res, 'Users not found');
}

async function show(req, res)
{
  if(user = await fetchSingleUser(req.params.id))
  {
    return success(res, userResource.resource(user));
  }

  return error(res, "User not found");
}

async function update(req, res)
{
  if(await updateUser(req.params.id, req.userData))
  {
    return success(res, {}, "User Updated");
  }

  return error(res, "Cannot update user");
}

async function destroy(req, res)
{
  if(await deleteUser(req.params.id))
  {
    return success(res, {}, "User deleted");
  }

  return error(res, "Cannot delete user");
}

async function block(req, res)
{
  if(await blockUser(req.params.id))
  {
    return success(res, {}, "User Blocked");
  }

  return error(res, 'Cannot block user');
}

async function unblock(req, res)
{
  if(await unblockUser(req.params.id))
  {
    return success(res, {}, "User UnBlocked");
  }

  return error(res, 'Cannot unblock user');
}

module.exports = {
    index,
    show,
    update,
    destroy,
    block,
    unblock,
  };