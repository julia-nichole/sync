const User = require('../models/user');

module.exports = {
 index
};
function index(req, res) {
 res.render('/index', {
      
   user: req.user,
   name: req.query.name
 });
}