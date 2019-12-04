const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
  }, {
    timestamps: true
  });
  module.exports = mongoose.model('User', userSchema);