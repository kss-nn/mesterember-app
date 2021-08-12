const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    county: {
        type: String,
        default: ''
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('City', CitySchema);
