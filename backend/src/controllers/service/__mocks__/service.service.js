const serviceService = jest.mock('./service.service');

let mockData;

serviceService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(service => service.id === id)
));

serviceService.__setMockData = data => mockData = data;

module.exports = serviceService;
