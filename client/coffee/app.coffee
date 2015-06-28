define [
    "backbone"
    "marionette"
    "handlebars"
    "behaviors/index"
    "components/list/index"
], (Backbone, Marionette, Handlebars, Behaviors, ListComponent) ->

    Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
        Handlebars.compile(rawTemplate)

    Marionette.Behaviors.behaviorsLookup = () ->
        return Behaviors
    
    app = new Marionette.Application()

    app.addRegions
        listRegion: "#list"

    app.listRegion.show ListComponent

    app.on "start", () ->
        Backbone.history.start()

    app.start()
