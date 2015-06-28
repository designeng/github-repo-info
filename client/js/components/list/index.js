define(["components/list/list", "components/list/collections/forks", "components/list/collections/contributors"], function(ListCollectionView, ForksCollection, ContributorsCollection) {
  var contributorsCollection, contributorsList;
  contributorsCollection = new ContributorsCollection();
  contributorsCollection.fetch();
  contributorsList = new ListCollectionView({
    collection: contributorsCollection
  });
  return contributorsList;
});
