let express = require('express');
let router = express.Router();
let infoCtrl = require('../controllers/infos');

/* GET users listing. */
//user info//
router.get('/',infoCtrl.index);
router.post('/', infoCtrl.create);
router.get('/new', infoCtrl.new)
router.get('/:id', infoCtrl.show)
router.get('/:id/edit', infoCtrl.edit);
router.put('/:id', infoCtrl.update)
module.exports = router;
