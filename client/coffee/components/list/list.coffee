define [
    "marionette"
    "./forkItemView"
    "./contributorItemView"
], (Marionette, ForkItemView, ContributorItemView) ->

    ListCollectionView = Marionette.CollectionView.extend

        getChildView: (item) ->
            if item.get "id"
                return ForkItemView
            else
                return ContributorItemView

        onRender: ->
            console.debug "ListCollectionView rendered"