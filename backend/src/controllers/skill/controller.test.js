const { mockRequest, mockResponse } = require('jest-mock-req-res');
const skillController = require('./skill.controller');
const skillService = require('./skill.service');

jest.mock('./skill.service');

describe('skill controller', () => {
    const mockData = [{
        "_id": 1,
        "name": "Glazier"
    }, {
        "_id": 2,
        "name": "Stucco Mason"
    }, {
        "_id": 3,
        "name": "Terazzo"
    }, {
        "_id": 4,
        "name": "Boilermaker"
    }, {
        "_id": 5,
        "name": "Ironworker"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        skillService.__setMockData(mockData);
        response = mockResponse();
    });

    test('find one with valid id', () => {
        const SKILL_ID = 1;

        const request = mockRequest({
            params: {
                id: SKILL_ID
            }
        });

        return skillController.findOne(request, response, nextFunction)
            .then(() => {
                expect(skillService.findOne).toBeCalledWith(SKILL_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(skill => skill.id === SKILL_ID)
                );                
            })
    });
});
