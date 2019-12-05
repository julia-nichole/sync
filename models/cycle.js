const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cycleSchema = new Schema({
start:{
    type: Date,
    default: function () {
        return new Date().getDate();
  }
},
end:{
 type: Date,
 default: function () {
    return new Date().getDate();
}
},

flow:{
    type:String,
    enum:['light','medium','heavy']
}
})
module.exports = mongoose.model('cycle', cycleSchema);