define(["backbone", "moment"], function(Backbone, moment) {
  var Fork, ForksCollection;
  Fork = Backbone.Model.extend({});
  return ForksCollection = Backbone.Collection.extend({
    url: "https://api.github.com/repos/marionettejs/backbone.marionette/forks",
    model: Fork,
    comparator: function(a, b) {
      return moment(a.attributes.created_at).unix() < moment(b.attributes.created_at).unix();
    }
  });
});
