define [
    "marionette"
    "./forkItemView"
    "./contributorItemView"
    "components/list/collections/forks"
    "components/list/collections/contributors"
], (Marionette, ForkItemView, ContributorItemView, ForksCollection, ContributorsCollection) ->

    ListCollectionView = Marionette.CollectionView.extend

        tagName: "div"
        className: "accordion"

        getChildView: (item) ->
            if item.get "id"
                return ForkItemView
            else
                return ContributorItemView

        collectionEvents:
            "sync": "render"

        onRender: ->
            console.debug "RENDERED"

        setCollection: (mode) ->
            if mode is "contributors"
                @.collection = new ContributorsCollection()
                @collection.fetch()
            if mode is "forks"
                @.collection = new ForksCollection()
                @collection.fetch()