define [
    "marionette"
    "backbone"
    "hbs!components/switch/switcherView"
], (Marionette, Backbone, switcherViewTemplate) ->

    SwitcherView = Marionette.ItemView.extend
        template: switcherViewTemplate

        ui:
            "selector": ".switch-select"

        events:
            "change @ui.selector": "onChange"

        onChange: (event) ->
            window.location.href = "#/" + event.target.value.toLowerCase()