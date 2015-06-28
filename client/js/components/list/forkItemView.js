define(["marionette", "hbs!components/list/fork"], function(Marionette, forkTemplate) {
  var ForkItemView;
  return ForkItemView = Marionette.ItemView.extend({
    tagName: "div",
    className: "accordion-section",
    template: forkTemplate
  });
});
