"use strict";

var get_ip = require('ipware')().get_ip;
var models  = require('../models');

var LikeController = {

    post: function(req, res) {
            var ip_info = get_ip(req);

            console.log("ip_info", ip_info);

            var ip = ip_info.clientIp;
            var entityTYPE  = req.param('entityTYPE');
            var entityID    = req.param('entityID');
            var like        = req.param('like');

            models.Like.create({
                ip: ip,
                entityTYPE: entityTYPE,
                entityID: entityID,
                like: like
            }).then(
                function() {
                    res.json({ message: 'Like record with values IP: ' + ip + ' and entityTYPE ' + entityTYPE + ' and entityID ' + entityID + ' and LIKE:' + like + ' created!' });
                },
                function(error) {
                    res.json({ error: error});
                }
            );
        },

    get: function(req, res) {
            models.Like.findAll().then(function(likes) {
                res.json({ likes: likes });
            });
        }
}

module.exports = LikeController;