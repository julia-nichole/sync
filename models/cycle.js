const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cycleSchema = new Schema({
start:{
    type: Date
},
end:{
 type: Date
},
flow:{
    enum:['light','medium','heavy']
}
})
module.exports = mongoose.model('cycle', cycleSchema);