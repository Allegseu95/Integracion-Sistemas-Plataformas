const { getRegistersService, createRegisterService } = require('../services');

const getRegistersController = async (req, res) => {
  const data = await getRegistersService();
  res.status(200).send(data);
};

const createRegisterController = async (req, res) => {
  const { body } = req;
  const data = await createRegisterService(body);
  res.status(201).send(data);
};

module.exports = {
  getRegistersController,
  createRegisterController,
};
