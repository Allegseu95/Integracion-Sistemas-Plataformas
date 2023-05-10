const {
  getRegistersService,
  createRegisterService,
} = require('../../src/services');

describe('getRegistersService', () => {
  test('should return data', async () => {
    const result = await getRegistersService();
    expect(result.length).toEqual(4);
  });
});

describe('createRegisterService', () => {
  test('should create a new register', () => {
    const body = {
      kidId: 1,
      clinicId: 1,
      date: '12/01/2023',
      time: '23:35:45',
      healthStatus: 'buena',
    };

    const result = createRegisterService(body);
    expect(result.id).toEqual(5);
  });
});
