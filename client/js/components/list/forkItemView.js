define(["marionette", "moment"], function(Marionette, moment) {
  var ForkItemView;
  return ForkItemView = Marionette.ItemView.extend({
    template: "#fork-item-view-template",
    templateHelpers: {
      unix: function() {
        return moment(this.created_at).unix();
      }
    }
  });
});
