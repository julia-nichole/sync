let Info = require('../models/userInfo');

module.exports = {
    general,
    create

};

function general(req, res) {
    res.render('categories/general',{
    user: req.user,
    name: req.query.name})
};

function create (req, res){
    const info = new info(req.body);
    user.save(function(err){
        if(err) return res.render('/new');
        res.redirect('categories/new');
    })
}