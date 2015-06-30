define(["marionette", "hbs!components/list/fork"], function(Marionette, forkTemplate) {
  var ForkItemView;
  return ForkItemView = Marionette.ItemView.extend({
    tagName: "div",
    className: "accordion-section",
    template: forkTemplate,
    templateHelpers: {
      forkedBy: function() {
        return this.full_name.split("/")[0];
      },
      originalForkName: function() {
        return this.full_name.split("/")[1];
      }
    },
    behaviors: {
      accordion: {}
    },
    getEntityType: function() {
      return "fork";
    }
  });
});
