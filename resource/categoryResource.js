function categoryResource(category)
{
    return {
        id: category.id,
        title: category.title,
        slug: category.slug,
        description: category.description,
    }
}

function categoryCollection(categories)
{
    return {
        data: categories.category.map(category => categoryResource(category)),
        meta: {
            total: categories.total,
            currentPage: categories.currentPage,
            totalPages: categories.totalPages,
            pageSize: categories.pageSize
        }
    };
}

module.exports = {
    categoryCollection,
    categoryResource
}