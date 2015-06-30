require(["jquery", "app", "utils/clientip/index", "utils/storage/index"], function($, app, clientIp, storage) {
  return $.when(clientIp).then(function(result) {
    storage.clientIp = result.ip;
    return app.start();
  });
});
