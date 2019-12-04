let Info = require('../models/info');

module.exports = {
  index,
    create,
    new : newForm,
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
    
    function update(req, res) {
       Info.findById(req.params.id, function(err, info){
            info.name = req.body.newName;
            info.save(function(err){
                if (err) return res.redirect('/info');
                res.redirect(`/info/${req.params.id}`);
            })
        })
    }