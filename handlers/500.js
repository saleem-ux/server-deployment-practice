'use strict';

module.exports = (error, req, res, next) => {
    res.status(500).send({
        error: 500,
        route: req.body,
        message: `Something went bad - ${error}`
    });
}