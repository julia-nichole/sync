let Cycle = require('../models/cycle');

module.exports = {
    index,
    create,
  new:  newForm,
  edit
}
 
function index(req, res) {
    res.render('cycle/index',{
    user: req.user,
    name: req.query.name, 
})
};
function create (req, res){
    console.log(req.body)
    let cycle = new Cycle(req.body);
      cycle.save(function(err){
          console.log(cycle)
            if(err) return res.render('/cycle');
            res.redirect('/cycle/new');
        })
    }
    function newForm(req, res) {
        Cycle.find({},function(err,cycles){
         res.render('cycle/new',{
            cycles,
             user: req.user,
         name: req.query.name, 
          
             });
        })
 }

 function edit(req, res) {
    Cycle.findById(req.params.id, function (err, cycles) {
         res.render('cycle/edit', {
             user: req.user,
             cycles,
          
         })
     })
 }
 