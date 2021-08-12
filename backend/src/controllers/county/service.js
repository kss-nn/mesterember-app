const County = require('../../models/county.model');

exports.create = countyData => {
    const county = new County(countyData);
    return county.save();
};

exports.findAll = () => County.find().populate();

exports.findOne = id => County.findById(id).populate();

exports.update = (id, updateData) => County.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => County.findByIdAndRemove(id);
