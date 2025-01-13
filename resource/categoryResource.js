function categoryResource(category)
{
    return {
        title: category.title,
        slug: category.slug,
        description: category.description
    }
}

function categoryCollection(categories)
{
    return categories.map(category => categoryResource(category));
}

module.exports = {
    categoryCollection,
    categoryResource
}