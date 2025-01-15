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
    return products.map(product => productResource(product));
}

module.exports = {
    productResource, productCollection
}