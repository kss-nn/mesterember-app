const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    user_type: {
        type: String,
        default: ''
    },
    skill: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        default: ''
    },
    phone_number: {
        type: String,
        default: ''
    },
    counties: [String],
    cities: [String],
    working_days: {
        monday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean,
        thursday: Boolean,
        friday: Boolean,
        saturday: Boolean,
        sunday: Boolean
    },
    working_hours: {
        start: Number,
        end: Number
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    role: {
        type: Number,
        required: true,
        default: 1
    },
    token: {
        type: String,
        default: ''
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);
