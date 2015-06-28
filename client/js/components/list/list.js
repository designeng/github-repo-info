define(["marionette", "./forkItemView", "./contributorItemView"], function(Marionette, ForkItemView, ContributorItemView) {
  var ListCollectionView;
  return ListCollectionView = Marionette.CollectionView.extend({
    tagName: "div",
    className: "accordion",
    getChildView: function(item) {
      if (item.get("id")) {
        return ForkItemView;
      } else {
        return ContributorItemView;
      }
    },
    onRender: function() {
      return console.debug("ListCollectionView rendered");
    }
  });
});
