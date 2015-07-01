var express = require('express');
var router  = express.Router();

var models  = require('../models');

var LikeController      = require('../controllers/like');

router.route("/likes")
    .post(LikeController.post);

router.route("/likes/:ip/:type/:id")
    .get(LikeController.isAbleToVoice);

router.route("/likes/:type/:id")
    .get(LikeController.getPublicRate);

module.exports = router;
