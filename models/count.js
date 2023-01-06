const mongoose = require('mongoose');

const valueSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [
      'Pennies',
      'Nickels',
      'Dimes',
      'Quarters',
      'Dollars',
      'Fives',
      'Tens',
      'Large Bills',
    ],
  },
  value: {
    type: Number,
  },
  _id: false,
});

const countSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: () => {return Date.now()},
  },
  store: {
    type: String,
    enum: [
      'Quincy',
      'Colfax',
      'Northfield',
      'Fraser',
      'Nederlands',
      'Sheridan',
      'Littleton',
      'GotG',
    ],
  },
  count: [valueSchema],
});

module.exports = mongoose.model('count', countSchema);
