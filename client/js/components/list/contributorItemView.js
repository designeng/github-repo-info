define(["jquery", "underscore", "marionette", "hbs!components/list/contributor"], function($, _, Marionette, contributorTemplate) {
  var ContributorItemView;
  return ContributorItemView = Marionette.ItemView.extend({
    tagName: "div",
    className: "accordion-section",
    template: contributorTemplate,
    templateHelpers: {
      avatarSmall: function() {
        return this.author.avatar_url + "&s=50";
      },
      avatarBig: function() {
        return this.author.avatar_url + "&s=150";
      },
      additions: function() {
        return _.reduce(this.weeks, function(result, obj) {
          return result = +result + obj.a;
        }, 0);
      },
      deletions: function() {
        return _.reduce(this.weeks, function(result, obj) {
          return result = +result + obj.d;
        }, 0);
      }
    },
    behaviors: {
      accordion: {}
    }
  });
});
