define(["components/list/list", "components/list/collections/forks", "components/list/collections/contributors"], function(ListCollectionView, ForksCollection, ContributorsCollection) {
  var forksList;
  return forksList = new ListCollectionView({
    collection: ForksCollection
  });
});
