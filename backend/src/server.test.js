const app = require('./server');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');
const User = require('./models/user.model');
const logger = require('./config/logger')
const { response } = require('express');

describe('REST API integration tests', () => {
    const insertData = [
        {
            first_name: 'John',
            last_name: 'Test',
            email: 'john@test.com'
        },
        {
            first_name: 'Jane',
            last_name: 'Test',
            email: 'kate@test.com'
        }
    ];

    beforeEach(done => {
        const { username, password, host } = config.get('database');
        mongoose
            .connect(`mongodb+srv://${username}:${password}@${host}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                done();
            })
            .catch(err => {
                logger.error(err);
                process.exit();
            });
    });

    afterEach(done => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(() => done())
        });
    });

    test('GET /user', () => {
        return User.insertMany(insertData)
            .then(() => supertest(app).get('/user').expect(200))
            .then(response => {
                expect(Array.isArray(response.body)).toBeTruthy();
                expect(response.body.length).toEqual(insertData.length);

                response.body.forEach((user, index) => {
                    expect(user.first_name).toBe(insertData[index].first_name);
                    expect(user.last_name).toBe(insertData[index].last_name);
                    expect(user.email).toBe(insertData[index].email);
                });
            });
    });

    test('GET /user/:id', () => {
        let firstPostId;
        return User.insertMany(insertData)
            .then(users => {
                firstPostId = users[0]._id;
                return supertest(app).get(`/user/${firstPostId}`).expect(200);
            })
            .then(response => {
                const user = response.body;
                expect(user.first_name).toBe(insertData[0].first_name);
                expect(user.last_name).toBe(insertData[0].last_name);
                expect(user.email).toBe(insertData[0].email);
            });
    });
});
