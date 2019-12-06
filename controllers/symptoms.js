let Symptom = require('../models/symptom');

module.exports = {
  index,
   create,
   new: newForm
 
};


function index(req, res) {
    res.render('symptoms/index',{
    user: req.user,
    name: req.query.name, 
})
};
function create (req, res){
  console.log(req.body)
  let symptom = new Symptom(req.body);
    symptom.save(function(err){
          if(err) return res.render('/symptoms');
          res.redirect('/symptoms/new');
      })
  }
  function newForm(req, res) {
    Symptom.find({},function(err,symptoms){
       res.render('symptoms/new',{
          symptoms,
           user: req.user,
       name: req.query.name, 
        
           });
      })
}