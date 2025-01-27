const url = require("./url");

function link(name, currentPage, totalPages)
{
    const route = url(name);
    return {
        first: `${route}?page=${1}`,
        last: `${route}?page=${totalPages}`,
        prev: `${route}?page=${currentPage > 1 ? currentPage - 1 : 1}`,
        next: `${route}?pages=${currentPage < totalPages ? parseInt(currentPage) + 1 : totalPages}`
    }
}

module.exports = link;