define(["backbone", "marionette", "handlebars", "components/list/index"], function(Backbone, Marionette, Handlebars, ListComponent) {
  var app;
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
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
