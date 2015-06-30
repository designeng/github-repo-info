define(["backbone", "marionette", "handlebars", "meld", "behaviors/index", "components/switch/index", "components/list/list", "components/preloader/index"], function(Backbone, Marionette, Handlebars, meld, Behaviors, switchComponent, ListCollectionView, preloaderComponent) {
  var AppRouterController, app, appRouter, hidePreloader, loadInstance, showPreloader;
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  Marionette.Behaviors.behaviorsLookup = function() {
    return Behaviors;
  };
  hidePreloader = function() {
    return preloaderComponent.hide();
  };
  showPreloader = function() {
    return preloaderComponent.show();
  };
  loadInstance = function(ViewClass, beforeRenderCallback, afterRenderCallback) {
    beforeRenderCallback();
    return new ViewClass({
      onRenderCallback: afterRenderCallback
    });
  };
  app = new Marionette.Application();
  app.addRegions({
    preloaderRegion: "#preloader",
    switchRegion: "#switch",
    listRegion: "#list"
  });
  app.preloaderRegion.show(preloaderComponent);
  app.switchRegion.show(switchComponent);
  AppRouterController = Marionette.Object.extend({
    _populateList: function(collectionMode) {
      return this.listComponent.setCollection(collectionMode);
    },
    initialize: function() {
      var _this = this;
      meld.before(this, "_populateList", function() {
        app.listRegion.empty();
        return _this.listComponent = loadInstance(ListCollectionView, showPreloader, hidePreloader);
      });
      return meld.after(this, "_populateList", function() {
        return setTimeout(function() {
          return app.listRegion.show(_this.listComponent, {
            forceShow: true
          });
        }, 100);
      });
    },
    showContributorsList: function() {
      this._populateList("contributors");
      return switchComponent.setSwitcherState("contributors");
    },
    showForksList: function() {
      this._populateList("forks");
      return switchComponent.setSwitcherState("forks");
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
    Backbone.history.start();
    if (Backbone.history.getFragment() !== "forks") {
      return appRouter.navigate("#/contributors");
    }
  });
  return app;
});
