let Cycle = require('../models/cycle');

module.exports = {
    index,
    create,
  new:  newForm,
  edit,
  update,
  delete : deleteCycle
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
 function update(req, res) {
    Cycle.findById(req.params.id, function (err, cycles) {
         cycles.start = req.body.start
         cycles.end = req.body.end
         cycles.flow = req.body.flow
         cycles.save(function (err) {
             if (err) return res.render('/error');
             res.render('cycle/', {
                 user: req.user,
                cycles,
            
             });
         })
     })
 }
 function deleteCycle(req, res) {
    Cycle.findByIdAndDelete(req.params.id, function (err, cycle) {
        res.redirect('/cycle')
    });
}