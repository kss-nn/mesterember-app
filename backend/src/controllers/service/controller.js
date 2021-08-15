const createError = require('http-errors');
const Service = require('../../models/service.model');
const serviceService = require('./service');

exports.create = (req, res, next) => {
    const validationErrors = new Service(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return serviceService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return serviceService.findAll()
        .then(services => {
            res.json(services);
        });
};

exports.findOne = (req, res, next) => {
    return serviceService.findOne(req.params.id)
        .then(service => {
            if (!service) {
                return next(new createError.NotFound('Service is not found'));
            };
            return res.json(service);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Service(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return serviceService.update(req.params.id, req.body)
        .then(service => {
            res.json(service);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return serviceService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
