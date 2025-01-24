const express = require('express');

class BodyParser{

    static init(app)
    {
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
    }
}

module.exports = BodyParser;