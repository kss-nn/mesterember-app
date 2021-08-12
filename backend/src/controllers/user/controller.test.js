const { mockRequest, mockResponse } = require('jest-mock-req-res');
const userController = require('./user.controller');
const userService = require('./user.service');

jest.mock('./user.service');

describe('user controller', () => {
    const mockData = [{
        "_id": 1,
        "first_name": "Béla",
        "last_name": "Kovács",
        "email": "be.kov@gmail.com",
        "password": "$2a$10$qCcDsV1BLCHBKVhaJLOLSuwZB8Q4fGxBc52IlwLSCUawomdZ4JGvq",
        "role": "3"
    }, {
        "_id": 2,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "janedoe@gmail.com",
        "password": "$2a$10$qCcDsV1BLCHBKVhaJLOLSuwZB8Q4fGxBc52IlwLSCUawomdZ4JGvq",
        "role": "3"
    }, {
        "_id": 3,
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@gmail.com",
        "password": "$2a$10$qCcDsV1BLCHBKVhaJLOLSuwZB8Q4fGxBc52IlwLSCUawomdZ4JGvq",
        "role": "2"
    }, {
        "_id": 4,
        "first_name": "Brigitta",
        "last_name": "Nagy",
        "email": "brig.nagy@gmail.com",
        "password": "$2a$10$qCcDsV1BLCHBKVhaJLOLSuwZB8Q4fGxBc52IlwLSCUawomdZ4JGvq",
        "role": "1"
    }, {
        "_id": 5,
        "first_name": "Sándor",
        "last_name": "József",
        "email": "sanyijozsi@gmail.com",
        "password": "$2a$10$qCcDsV1BLCHBKVhaJLOLSuwZB8Q4fGxBc52IlwLSCUawomdZ4JGvq",
        "role": "3"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        userService.__setMockData(mockData);
        response = mockResponse();
    });

    test('find one with valid id', () => {
        const USER_ID = 1;

        const request = mockRequest({
            params: {
                id: USER_ID
            }
        });

        return userController.findOne(request, response, nextFunction)
            .then(() => {
                expect(userService.findOne).toBeCalledWith(USER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(user => user.id === USER_ID)
                );                
            })
    });
});
