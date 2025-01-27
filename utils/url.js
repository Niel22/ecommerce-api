function url(path)
{
    if(process.env.APP_ENV === 'development')
    {

        return `${process.env.APP_URL}:${process.env.PORT}/${path}`;
    }

    return `${process.env.APP_URL}/${path}`;
}

module.exports = url;