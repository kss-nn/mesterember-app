const City = require('../../models/city.model');

exports.create = cityData => {
    const city = new City(cityData);
    return city.save();
};

exports.findAll = () => City.find().populate();

exports.findOne = id => City.findById(id).populate();

exports.update = (id, updateData) => City.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => City.findByIdAndRemove(id);
