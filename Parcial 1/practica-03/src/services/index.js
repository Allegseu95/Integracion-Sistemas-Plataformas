const { data } = require('../data');

const getRegistersService = async () => {
  return data;
};

const createRegisterService = body => {
  let register = data.slice(-1)[0];
  body.id = register.id + 1;
  data.push(body);
  return data.slice(-1)[0];
};

module.exports = {
  getRegistersService,
  createRegisterService,
};
