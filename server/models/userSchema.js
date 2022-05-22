const mongoose = require('mongoose');

const userSchema = new Schema({
  name: {
    tye: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
});

//model
mongoose.model('USER', userSchema);
// module exports
module.exports = mongoose.model('USER');
