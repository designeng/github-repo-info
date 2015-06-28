define [
    "marionette"
    "hbs!components/list/fork"
], (Marionette, forkTemplate) ->

    ForkItemView = Marionette.ItemView.extend
        tagName: "div"
        className: "accordion-section"
        template: forkTemplate