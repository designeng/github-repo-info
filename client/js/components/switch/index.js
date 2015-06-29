define(["marionette", "./switcherView", "hbs!components/switch/switchLayout"], function(Marionette, SwitcherView, switchLayoutTemplate) {
  var SwitchLayout, switchComponent, switcherView;
  switcherView = new SwitcherView();
  SwitchLayout = Marionette.LayoutView.extend({
    template: switchLayoutTemplate,
    regions: {
      selectControlRegion: "#selectControl"
    },
    onRender: function() {
      return this.selectControlRegion.show(switcherView);
    }
  });
  switchComponent = new SwitchLayout({});
  return switchComponent;
});
