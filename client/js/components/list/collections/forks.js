define(["backbone"], function(Backbone) {
  var Fork, ForksCollection;
  Fork = Backbone.Model.extend({});
  return ForksCollection = Backbone.Collection.extend({
    url: "https://api.github.com/repos/marionettejs/backbone.marionette/forks",
    model: Fork
  });
});
