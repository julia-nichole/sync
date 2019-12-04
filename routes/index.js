var express = require('express');
var router = express.Router();
var infoCtrl = require('../controllers/infos');
/* GET users listing. */
router.get('/', infoCtrl.index);
module.exports = router;