define(["backbone", "marionette", "handlebars", "meld", "behaviors/index", "components/switch/index", "components/list/list"], function(Backbone, Marionette, Handlebars, meld, Behaviors, switchComponent, ListCollectionView) {
  var AppRouterController, app, appRouter;
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  Marionette.Behaviors.behaviorsLookup = function() {
    return Behaviors;
  };
  app = new Marionette.Application();
  app.addRegions({
    switchRegion: "#switch",
    listRegion: "#list"
  });
  app.switchRegion.show(switchComponent);
  AppRouterController = Marionette.Object.extend({
    initialize: function() {
      var _this = this;
      meld.before(this, "_populateList", function() {
        app.listRegion.empty();
        return _this.listComponent = new ListCollectionView();
      });
      return meld.after(this, "_populateList", function() {
        return app.listRegion.show(_this.listComponent);
      });
    },
    _populateList: function(collectionMode) {
      return this.listComponent.setCollection(collectionMode);
    },
    showContributorsList: function() {
      return this._populateList("contributors");
    },
    showForksList: function() {
      return this._populateList("forks");
    }
  });
  appRouter = new Marionette.AppRouter({
    controller: new AppRouterController,
    appRoutes: {
      "contributors": "showContributorsList",
      "forks": "showForksList"
    }
  });
  app.on("start", function() {
    return Backbone.history.start();
  });
  return app.start();
});
