define(["marionette", "./forkItemView", "./contributorItemView"], function(Marionette, ForkItemView, ContributorItemView) {
  var ListComponent;
  return ListComponent = Marionette.CollectionView.extend({
    getChildView: function(item) {
      if (item.get("id")) {
        return ForkItemView;
      } else {
        return ContributorItemView;
      }
    }
  });
});
