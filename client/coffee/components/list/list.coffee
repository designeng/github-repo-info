define [
    "marionette"
    "./forkItemView"
    "./contributorItemView"
], (Marionette, ForkItemView, ContributorItemView) ->

    ListComponent = Marionette.CollectionView.extend

        getChildView: (item) ->
            if item.get "id"
                return ForkItemView
            else
                return ContributorItemView