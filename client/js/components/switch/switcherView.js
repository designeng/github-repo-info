define(["marionette", "hbs!components/switch/switcherView"], function(Marionette, switcherViewTemplate) {
  var SwitcherView;
  return SwitcherView = Marionette.ItemView.extend({
    template: switcherViewTemplate
  });
});
