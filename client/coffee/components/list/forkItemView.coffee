define [
    "marionette"
    "moment"
], (Marionette, moment) ->

    ForkItemView = Marionette.ItemView.extend
        template: "#fork-item-view-template"

        templateHelpers:
            unix: () ->
                return moment(@created_at).unix()