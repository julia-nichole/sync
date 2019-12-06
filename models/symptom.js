const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let symptomSchema = new Schema({

    sexualActivity: {
       type: String,
       enum:["protected","unprotected","none"]
     },
    skin:{
       type: String,
       enum:["great","break-outs","oily","dry"]
     },
   mood: {
       type: String,
       enum: ['happy', 'sad','sensitive','irritable']
     },
    pain:{
       type: Number,
     enum:[1,2,3,4,5]

         
     }
   })


module.exports = mongoose.model('symptom', symptomSchema);