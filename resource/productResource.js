function productResource(product)
{
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category.title,
        quantity: product.quantity,
        color: product.color,
        brand: product.brand,
        postedBy: product.user.firstName +' '+ product.user.lastName
    }
}

function productCollection(products)
{
    return {
        data: products.product.map(product => productResource(product)),
        meta: {
            total: products.total,
            currentPage: products.currentPage,
            totalPages: products.totalPages,
            pageSize: products.pageSize

        }
    };
}

module.exports = {
    productResource, productCollection
}