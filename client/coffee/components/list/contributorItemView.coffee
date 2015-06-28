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

        behaviors:
            accordion: {}