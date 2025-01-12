function resource(user)
{
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone_no: user.mobile,
        role: user.role
    }
}

function collection(users)
{
    return users.map(user => resource(user));
}

module.exports = {
    resource, collection
}