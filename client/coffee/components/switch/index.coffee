define [
    "marionette"
    "./switcherView"
    "hbs!components/switch/switchLayout"
], (Marionette, SwitcherView, switchLayoutTemplate) ->

    switcherView = new SwitcherView()

    SwitchLayout = Marionette.LayoutView.extend
        template: switchLayoutTemplate

        regions:
            selectControlRegion: "#selectControl"

        onRender: ->
            @.selectControlRegion.show switcherView

    switchComponent = new SwitchLayout({
    })

    return switchComponent