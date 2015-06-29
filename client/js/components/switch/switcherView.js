define(["marionette", "backbone", "hbs!components/switch/switcherView"], function(Marionette, Backbone, switcherViewTemplate) {
  var SwitcherView;
  return SwitcherView = Marionette.ItemView.extend({
    template: switcherViewTemplate,
    ui: {
      "selector": ".switch-select"
    },
    events: {
      "change @ui.selector": "onChange"
    },
    onChange: function(event) {
      return window.location.href = "#/" + event.target.value.toLowerCase();
    }
  });
});
