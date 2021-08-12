const Skill = require('../../models/skill.model');

exports.create = skillData => {
    const skill = new Skill(skillData);
    return skill.save();
};

exports.findAll = () => Skill.find().populate();

exports.findOne = id => Skill.findById(id).populate();

exports.update = (id, updateData) => Skill.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = id => Skill.findByIdAndRemove(id);
