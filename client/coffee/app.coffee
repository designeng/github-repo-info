define [
    "backbone"
    "marionette"
    "handlebars"
    "components/list/index"
], (Backbone, Marionette, Handlebars, ListComponent) ->

    Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
        Handlebars.compile(rawTemplate)
    
    app = new Marionette.Application()

    app.addRegions
        listRegion: "#list"

    app.listRegion.show ListComponent

    app.on "start", () ->
        Backbone.history.start()

    app.start()
