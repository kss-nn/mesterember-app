const createError = require('http-errors');
const City = require('../../models/city.model');
const cityService = require('./service');

exports.create = (req, res, next) => {
    const validationErrors = new City(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return cityService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return cityService.findAll()
        .then(cities => {
            res.json(cities);
        });
};

exports.findOne = (req, res, next) => {
    return cityService.findOne(req.params.id)
        .then(city => {
            if (!city) {
                return next(new createError.NotFound('City is not found'));
            };
            return res.json(city);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new City(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return cityService.update(req.params.id, req.body)
        .then(city => {
            res.json(city);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return cityService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
