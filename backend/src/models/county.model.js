const mongoose = require('mongoose');

const CountySchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    cities: [String]
}, {
    timeStamps: true
});

module.exports = mongoose.model('County', CountySchema);
