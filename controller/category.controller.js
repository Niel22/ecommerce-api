const createCategory = require("../action/category/createCategory");
const fetchAllCategory = require("../action/category/fetchAllCategory");
const fetchSingleCategory = require("../action/category/fetchSingleCategory");
const updateCategory = require("../action/category/updateCategory");
const { success, error } = require("../utils/apiResponse");
const { categoryCollection, categoryResource } = require('../resource/categoryResource');
const deleteCategory = require("../action/category/deleteCategory");

async function index(req, res) {
  if ((category = await fetchAllCategory())) {

    return success(res, categoryCollection(category));
  }

  return error(res, "No Category found");
}
async function store(req, res) 
{
    if(await createCategory(req.categoryData))
    {
        return success(res, {}, "Category Created");
    }

    return error(res, "Cannot create Category");
}

async function show(req, res) {

  if ((category = await fetchSingleCategory(req.params.id))) {
    return success(res, categoryResource(category));
  }

  return error(res, "Category not found");
}

async function update(req, res)
{
  if(await updateCategory(req.params.id, req.categoryData))
  {
    return success(res, {}, "Category Updated");
  }

  return error(res, "Category cannot be updated");
}
async function destroy(req, res)
{
  if(await deleteCategory(req.params.id))
  {
    return success(res, "Category Deleted");
  }

  return error('Cannot Delete');
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};
