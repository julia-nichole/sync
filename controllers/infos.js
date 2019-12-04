let Info = require('../models/info');

module.exports = {
  index,
    create,
    new : newForm

};

function index(req, res) {
    res.render('info/index',{
    user: req.user,
    name: req.query.name})
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
    res.render('info/new',{
        user: req.user,
    name: req.query.name
        });

    }