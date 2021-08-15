const { mockRequest, mockResponse } = require('jest-mock-req-res');
const serviceController = require('./service.controller');
const serviceService = require('./service.service');

jest.mock('./service.service');

describe('service controller', () => {
    const mockData = [{
        "_id": 1,
        "description": "Lorem ipsum dolor sit amet",
        "category": "Category 1",
        "price": 8000
    }, {
        "_id": 2,
        "description": "Consectetur adipiscing elit",
        "category": "Category 2",
        "price": 12000
    }, {
        "_id": 3,
        "description": "Sed do eiusmod tempor incididunt",
        "category": "Category 3",
        "price": 5600
    }, {
        "_id": 4,
        "description": "Ut labore et dolore magna aliqua",
        "category": "Category 4",
        "price": 80000
    }, {
        "_id": 5,
        "description": "Ut enim ad minim veniam",
        "category": "Category 5",
        "price": 24000
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        serviceService.__setMockData(mockData);
        response = mockResponse();
    });

    test('find one with valid id', () => {
        const SERVICE_ID = 1;

        const request = mockRequest({
            params: {
                id: SERVICE_ID
            }
        });

        return serviceController.findOne(request, response, nextFunction)
            .then( () => {
                expect(serviceService.findOne).toBeCalledWith(SERVICE_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(service => service.id === SERVICE_ID)
                );                
            })
    });
});
