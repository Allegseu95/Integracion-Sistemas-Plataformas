const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clinicSchema = new Schema({
  city: String,
  description: String,
});

const ClinicModel = mongoose.model('Clinic', clinicSchema);

module.exports = ClinicModel;
