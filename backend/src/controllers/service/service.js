const Service = require('../../models/service.model');

exports.create = serviceData => {
    const service = new Service(serviceData);
    return service.save();
};

exports.findAll = () => Service.find().populate();

exports.findOne = id => Service.findById(id).populate();

exports.update = (id, updateData) => Service.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Service.findByIdAndRemove(id);
