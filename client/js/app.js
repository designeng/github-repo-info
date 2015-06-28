define(["backbone", "marionette", "components/list/index"], function(Backbone, Marionette, ListComponent) {
  var app;
  app = new Marionette.Application();
  app.addRegions({
    listRegion: "#list"
  });
  app.listRegion.show(ListComponent);
  app.on("start", function() {
    return Backbone.history.start();
  });
  return app.start();
});
