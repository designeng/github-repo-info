define [
    "marionette"
    "hbs!components/list/fork"
], (Marionette, forkTemplate) ->

    ForkItemView = Marionette.ItemView.extend
        tagName: "div"
        className: "accordion-section"
        template: forkTemplate

        templateHelpers:
            forkedBy: ->
                @.full_name.split("/")[0]

            originalForkName: ->
                @.full_name.split("/")[1]

        behaviors:
            accordion: {}

        getEntityType: ->
            return "fork"