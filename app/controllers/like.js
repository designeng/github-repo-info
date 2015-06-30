"use strict";

var models  = require('../models');

var LikeController = {

    post: function(req, res) {
            var ip          = req.param('clientIP');
            var entityTYPE  = req.param('entityTYPE');
            var entityID    = req.param('entityID');
            var like        = req.param('like');

            models.Like.findAll({where: {ip: ip, entityTYPE: entityTYPE, entityID: entityID}}).then(function(likes) {
                if(likes.length === 0){
                    models.Like.create({
                        ip: ip,
                        entityTYPE: entityTYPE,
                        entityID: entityID,
                        like: like
                    }).then(
                        function() {
                            res.json({ message: 'Thank you for your voice. Like record with values IP: ' + ip + ' and entityTYPE ' + entityTYPE + ' and entityID ' + entityID + ' and LIKE:' + like + ' created!' });
                        },
                        function(error) {
                            res.json({ error: error});
                        }
                    );
                } else {
                    res.json({ message: "Voiced"});
                }
            });
        },

    get: function(req, res) {
            models.Like.findAll().then(function(likes) {
                res.json({ likes: likes });
            });
        },

    isAbleToVoice: function(req, res) {
            models.Like.findAll({where: {ip: req.params.ip, entityTYPE: req.params.type, entityID: req.params.id}}).then(function(likes) {
                if(likes.length === 0){
                    res.json({ voicable: true });
                } else {
                    res.json({ voicable: false });
                }
            });
        },

    getPublicRate: function(req, res) {
            models.Like.findAll({where: {entityTYPE: req.params.type, entityID: req.params.id}}).then(function(likes) {
                res.json({ likes: likes });
            });
        }
}

module.exports = LikeController;