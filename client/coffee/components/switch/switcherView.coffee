define [
    "marionette"
    "hbs!components/switch/switcherView"
], (Marionette, switcherViewTemplate) ->

    SwitcherView = Marionette.ItemView.extend
        template: switcherViewTemplate