var _ = require("lodash");

var app     = require('./app/app');
var models  = require("./app/models");

app.set('port', process.env.PORT || 8080);

var startServer = function(){
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });
}

models.sequelize.sync().then(function () {
    startServer()
});