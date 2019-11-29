var express = require('express');
var router = express.Router();
var categoriesCtrl = require('../controllers/categories');
/* GET users listing. */
router.get('/',categoriesCtrl.general);
router.post('/', categoriesCtrl.create);

module.exports = router;
