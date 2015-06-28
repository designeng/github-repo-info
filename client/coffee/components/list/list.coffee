define [
    "marionette"
    "./forkItemView"
    "./contributorItemView"
], (Marionette, ForkItemView, ContributorItemView) ->

    ListCollectionView = Marionette.CollectionView.extend

        tagName: "div"
        className: "accordion"

        getChildView: (item) ->
            if item.get "id"
                return ForkItemView
            else
                return ContributorItemView

        onRender: ->
            console.debug "ListCollectionView rendered"