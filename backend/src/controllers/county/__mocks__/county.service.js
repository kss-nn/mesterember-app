const countyService = jest.mock('./county.service');

let mockData;

countyService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(county => county.id === id)
));

countyService.__setMockData = data => mockData = data;

module.exports = countyService;
