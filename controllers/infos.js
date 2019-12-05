let Info = require('../models/info');

module.exports = {
  index,
    create,
    new : newForm,
    show,
    edit,
    update
};

function index(req, res) {
    res.render('info/index',{
    user: req.user,
    name: req.query.name,
    Info: req.query.name, 
})
};


function create (req, res){
console.log(req.body)
let info = new Info(req.body);
  info.save(function(err){
      console.log(info)
        if(err) return res.render('/info');
        res.redirect('/info/new');
    })
}

function newForm(req, res) {
   Info.find({},function(err,infos){
    res.render('info/new',{
       infos,
        user: req.user,
    name: req.query.name, 
     
        });
   })
   

    }
    
    function show(req, res) {
       Info.findById(req.params.id, function(err, infos){
  res.render('info/show',{infos, user: req.user,
    name: req.query.name, });
               
            });
     }

     function edit(req, res) {
       Info.findById(req.params.id, function (err, infos) {
            res.render('info/edit', {
                user: req.user,
                infos,
             
            })
        })
    }
    function update(req, res) {
       Info.findById(req.params.id, function (err, infos) {
            infos.name = req.body.name
            infos.age = req.body.age
            infos.weight = req.body.weight
            infos.birthControl = req.body.birthControl
            infos.save(function (err) {
                if (err) return res.render('/error');
                res.render(`info/`, {
                    user: req.user,
                    infos,
               
                });
            })
        })
    }