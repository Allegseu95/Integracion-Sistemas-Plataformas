const express = require('express');
const cors = require('cors');
const { Router } = require('express');
const { home } = require('../utils');

const {
  getRegistersController,
  createRegisterController,
} = require('../controllers');

const router = Router();

router.use(express.json()).use(cors());
router.get('/', (req, res) => res.send(home));
router.get('/registers', getRegistersController);
router.post('/registers', createRegisterController);

module.exports = {
  router,
};
