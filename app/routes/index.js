var express = require('express');
var router  = express.Router();

var models  = require('../models');

var LikeController      = require('../controllers/like');

router.route("/likes")
    .post(LikeController.post)
    .get(LikeController.get);

module.exports = router;
