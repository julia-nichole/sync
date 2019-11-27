var express = require('express');
var router = express.Router();
var categoriesCtrl = require('../controllers/categories');
/* GET users listing. */
router.get('/',categoriesCtrl.general);


module.exports = router;
