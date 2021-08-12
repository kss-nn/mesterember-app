const createError = require('http-errors');
const County = require('../../models/county.model');
const countyService = require('./service');

exports.create = (req, res, next) => {
    const validationErrors = new County(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return countyService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return countyService.findAll()
        .then(counties => {
            res.json(counties);
        });
};

exports.findOne = (req, res, next) => {
    return countyService.findOne(req.params.id)
        .then(county => {
            if (!county) {
                return next(new createError.NotFound('County is not found'));
            };
            return res.json(county);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new County(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return countyService.update(req.params.id, req.body)
        .then(county => {
            res.json(county);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return countyService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
