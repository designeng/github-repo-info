define(["components/list/list", "components/list/collections/forks", "components/list/collections/contributors"], function(ListCollectionView, ForksCollection, ContributorsCollection) {
  var forksCollection, forksList;
  forksCollection = new ForksCollection();
  forksCollection.fetch();
  forksList = new ListCollectionView({
    collection: forksCollection
  });
  return forksList;
});
