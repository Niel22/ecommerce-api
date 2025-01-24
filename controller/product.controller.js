const createProduct = require("../action/product/createProduct");
const deleteProduct = require("../action/product/deleteProduct");
const fetchAllProduct = require("../action/product/fetchAllProduct");
const fetchSingleProduct = require("../action/product/fetchSingleProduct");
const updateProduct = require("../action/product/updateProduct");
const { success, error } = require("../utils/apiResponse");
const {productCollection, productResource} = require('../resource/productResource');

async function index(req, res)
{
    if(product = await fetchAllProduct(req.query.page, req.query.pageSize))
    {
        return success(res, new productCollection(product));
    }

    return error(res, "No Product Found");
}

async function show(req, res)
{
    if(product  = await fetchSingleProduct(req.params.id))
    {
        return success(res, new productResource(product));
    }

    return error(res, "Product not found");
}

async function store(req, res)
{
    req.data.image = req.file.filename;
    
    if(await createProduct(req.data))
    {
        return success(res, {}, "Product Created");
    }

    return error(res, 'Cannot create product');
}

async function update(req, res)
{
    if(await updateProduct(req.params.id, req.data))
    {
        return success(res, "Product Updated");
    }

    return error(res, "Cannot update Product");
}

async function destroy(req, res)
{
    if(await deleteProduct(req.params.id))
    {
        return success(res, "Product Deleted");
    }

    return error(res, "Cannot delete Product");
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}