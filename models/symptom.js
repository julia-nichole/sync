const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let symptomSchema = new Schema({
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
module.exports = mongoose.model('symptom', symptomSchema);