const { mockRequest, mockResponse } = require('jest-mock-req-res');
const cityController = require('./city.controller');
const cityService = require('./city.service');

jest.mock('./city.service');

describe('city controller', () => {
    const mockData = [{
        "_id": 1,
        "name": "Győr",
        "county": "Győr-Moson-Sopron"
    }, {
        "_id": 2,
        "name": "Szeged",
        "county": "Csongrád-Csanád"
    }, {
        "_id": 3,
        "name": "Budapest",
        "county": "Pest"
    }, {
        "_id": 4,
        "name": "Pécs",
        "county": "Baranya"
    }, {
        "_id": 5,
        "name": "Kecskemét",
        "county": "Bács-Kiskun"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        cityService.__setMockData(mockData);
        response = mockResponse();
    });

    test('find one with valid id', () => {
        const CITY_ID = 1;

        const request = mockRequest({
            params: {
                id: CITY_ID
            }
        });

        return cityController.findOne(request, response, nextFunction)
            .then( () => {
                expect(cityService.findOne).toBeCalledWith(CITY_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(city => city.id === CITY_ID)
                );                
            })
    });
});
