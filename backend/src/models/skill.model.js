const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    }
}, {
    timeStamps: true
});

module.exports = mongoose.model('Skill', SkillSchema);
