const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let infoSchema = new Schema({

     name: {
        type: String,
      },
    age: {
        type: Number,
      },
     birthControl: {
        type: String,
        enum: ['None','IUD','Pill', 'Nuvaring','Depo-Provera']
      },
      weight:{
          type: Number
      }
    })

 module.exports = mongoose.model('userInfo', infoSchema);