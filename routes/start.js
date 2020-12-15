var express = require('express');
var router = express.Router();

var StartController = require('../controllers/start');

router.get('/', StartController.Index);
router.get('/play', StartController.Play);
router.get('/leaderboard', StartController.Leaderboard);
router.get('/death', StartController.Death);
router.get('/level2', StartController.Level2);
router.get('/level3', StartController.Level3);
router.get('/shamarni_lvl', StartController.Shamarni_lvl);






module.exports = router;
