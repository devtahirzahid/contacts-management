const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name of the contact'],
    },
    email: {
      type: String,
      required: [true, 'Please add email address of the contact'],
    },
    phone: {
      type: String,
      required: [true, 'Please add phone of the contact'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
