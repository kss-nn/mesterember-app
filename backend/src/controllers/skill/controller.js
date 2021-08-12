const createError = require('http-errors');
const Skill = require('../../models/skill.model');
const skillService = require('./service');

exports.create = (req, res, next) => {
    const validationErrors = new Skill(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return skillService.create(req.body)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return skillService.findAll()
        .then(skills => {
            res.json(skills);
        });
};

exports.findOne = (req, res, next) => {
    return skillService.findOne(req.params.id)
        .then(skill => {
            if (!skill) {
                return next(new createError.NotFound('Skill is not found'));
            };
            return res.json(skill);
        });
};

exports.update = (req, res, next) => {
    const validationErrors = new Skill(req.body).validateSync();

    if (validationErrors) {
        return next(new createError.BadRequest(validationErrors));
    };

    return skillService.update(req.params.id, req.body)
        .then(skill => {
            res.json(skill);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return skillService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
