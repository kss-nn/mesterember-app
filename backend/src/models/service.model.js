const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    description: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);
