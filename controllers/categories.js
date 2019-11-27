let Info = require('../models/userInfo');

module.exports = {
    general

}

function general(req, res) {
    res.render('categories/general',{
    user: req.user,
    name: req.query.name})
};