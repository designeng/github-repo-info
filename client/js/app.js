define(["backbone", "marionette", "handlebars", "behaviors/index", "components/list/index"], function(Backbone, Marionette, Handlebars, Behaviors, ListComponent) {
  var app;
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  Marionette.Behaviors.behaviorsLookup = function() {
    return Behaviors;
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
