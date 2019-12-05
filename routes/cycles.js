let express = require('express');
let router = express.Router();
let cycleCtrl = require('../controllers/cycles');



router.get('/', cycleCtrl.index);
router.post('/', cycleCtrl.create);
router.get('/new', cycleCtrl.new);
module.exports = router;