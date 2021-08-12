const fsp = require('fs').promises;
const User = require('../models/user.model');
const City = require('../models/city.model');
const County = require('../models/county.model');
const Skill = require('../models/skill.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {limit: 100});
        }
    }
};

(async () => {

    try {
        await User.db.dropCollection('users');
    } catch(e) {
        console.log('USERS NOT FOUND');
    }

    seedCollection(User, 'users');
    seedCollection(City, 'cities');
    seedCollection(County, 'counties');
    seedCollection(Skill, 'skills');
})();
