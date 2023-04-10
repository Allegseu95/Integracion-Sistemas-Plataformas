const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var casual = require('casual');

const ClinicModel = require('./src/models/clinic');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', async (req, res) => {
  console.log('INIT DATA');

  try {
    for (let i = 0; i < 5; i++) {
      const clinic = new ClinicModel({
        city: casual.city,
        description: casual.description,
      });
      await clinic.save();
      console.log('STORED NEW CLINIC');
    }
  } catch (err) {
    console.error(err.message);
  }
  res.status(200).json({ text: 'Hola mundo' });
});

app.get('/clinics', async (req, res) => {
  console.log('TRYING TO FETCH CLINICS');
  try {
    const clinics = await ClinicModel.find({});
    res.status(200).json({
      clinics,
    });
    console.log('FETCHED CLINICS');
  } catch (err) {
    console.error('ERROR FETCHING CLINICS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load clinics.' });
  }
});

app.post('/clinic', async (req, res) => {
  console.log('TRYING TO STORE CLINIC');
  const { city, description } = req.body;

  if (!city || city.trim().length === 0) {
    console.log('INVALID INPUT - NO CITY');
    return res.status(422).json({ message: 'Invalid clinic city.' });
  }

  if (!description || description.trim().length === 0) {
    console.log('INVALID INPUT - NO DESCRIPTION');
    return res.status(422).json({ message: 'Invalid clinic description.' });
  }

  const clinic = new ClinicModel({
    city,
    description,
  });

  try {
    await clinic.save();
    res.status(201).json({
      message: 'Clinic saved',
      clinic,
    });
    console.log('STORED NEW CLINIC');
  } catch (err) {
    console.error('ERROR FETCHING CLINICS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save clinic.' });
  }
});

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongo:27017/${process.env.MONGODB_DATABASE}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('CONNECTED TO MONGODB!!');

    app.listen(process.env.PORT || 3000, (req, res) => {
      console.log(`SERVE RUN ON PORT: ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('FAILED TO CONNECT TO MONGODB');
    console.error(err);
  });
