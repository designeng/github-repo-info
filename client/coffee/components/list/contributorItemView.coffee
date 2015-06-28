define [
    "jquery"
    "underscore"
    "marionette"
    "hbs!components/list/contributor"
], ($, _, Marionette, contributorTemplate) ->

    ContributorItemView = Marionette.ItemView.extend
        tagName: "div"
        className: "accordion-section"
        template: contributorTemplate

        templateHelpers:
            avatarSmall: ->
                @.author.avatar_url + "&s=50"

            avatarBig: ->
                @.author.avatar_url + "&s=150"

        behaviors:
            accordion: {}