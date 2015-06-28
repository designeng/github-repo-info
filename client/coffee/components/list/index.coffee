define [
    "components/list/list"
    "components/list/collections/forks"
    "components/list/collections/contributors"
], (ListCollectionView, ForksCollection, ContributorsCollection) ->

    forksCollection = new ForksCollection()
    forksCollection.fetch()

    forksList = new ListCollectionView({
        collection: forksCollection
    })

    return forksList

    # contributorsCollection = new ContributorsCollection()
    # contributorsCollection.fetch()

    # contributorsList = new ListCollectionView({
    #     collection: contributorsCollection
    # })

    # return contributorsList