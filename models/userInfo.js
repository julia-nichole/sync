const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let infoSchema = new Schema({
  name: String,
  age: Number,
  birthControl: ['None','IUD','Pill', 'Nuvaring','Depo-Provera'],
  weight: Number
})

 module.exports = mongoose.model('userInfo', infoSchema);