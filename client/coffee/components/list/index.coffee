define [
    "components/list/list"
    "components/list/collections/forks"
    "components/list/collections/contributors"
], (ListCollectionView, ForksCollection, ContributorsCollection) ->

    forksList = new ListCollectionView({
        collection: ForksCollection
    })