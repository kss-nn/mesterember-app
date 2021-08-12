const skillService = jest.mock('./skill.service');

let mockData;

skillService.findOne = jest.fn(id => Promise.resolve(
    mockData.find(skill => skill.id === id)
));

skillService.__setMockData = data => mockData = data;

module.exports = skillService;
