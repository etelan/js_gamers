var express = require('express');
var router = express.Router();

var StartController = require('../controllers/start');

router.get('/', StartController.Index);
router.get('/play', StartController.Play);





module.exports = router;
