const { mockRequest, mockResponse } = require('jest-mock-req-res');
const countyController = require('./county.controller');
const countyService = require('./county.service');

jest.mock('./county.service');

describe('county controller', () => {
    const mockData = [{
        "_id": 1,
        "name": "Győr-Moson-Sopron",
        "cities": ["Győr", "Sopron"]
    }, {
        "_id": 2,
        "name": "Csongrád-Csanád",
        "cities": ["Szeged", "Makó"]
    }, {
        "_id": 3,
        "name": "Pest",
        "cities": ["Budapest", "Gyál"]
    }, {
        "_id": 4,
        "name": "Baranya",
        "cities": ["Pécs"]
    }, {
        "_id": 5,
        "name": "Bács-Kiskun",
        "cities": ["Kecskemét"]
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        countyService.__setMockData(mockData);
        response = mockResponse();
    });

    test('find one with valid id', () => {
        const COUNTY_ID = 1;

        const request = mockRequest({
            params: {
                id: COUNTY_ID
            }
        });

        return countyController.findOne(request, response, nextFunction)
            .then(() => {
                expect(countyService.findOne).toBeCalledWith(COUNTY_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(county => county.id === COUNTY_ID)
                );                
            })
    });
});
