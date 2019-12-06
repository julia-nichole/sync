let express = require('express');
let router = express.Router();
let symptomCtrl = require('../controllers/symptoms');


router.get('/', symptomCtrl.index);
router.post('/', symptomCtrl.create);
router.get('/new', symptomCtrl.new);
module.exports = router;
