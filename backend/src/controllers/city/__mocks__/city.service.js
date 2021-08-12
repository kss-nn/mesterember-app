const cityService = jest.mock('./city.service');

let mockData;

cityService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(city => city.id === id)
));

cityService.__setMockData = data => mockData = data;

module.exports = cityService;
