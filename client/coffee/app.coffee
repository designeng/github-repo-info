define [
    "backbone"
    "marionette"
    "components/list/index"
], (Backbone, Marionette, ListComponent) ->
    
    app = new Marionette.Application()

    app.addRegions
        listRegion: "#list"

    app.listRegion.show ListComponent

    app.on "start", () ->
        Backbone.history.start()

    app.start()
