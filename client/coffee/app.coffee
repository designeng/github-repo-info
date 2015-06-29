define [
    "backbone"
    "marionette"
    "handlebars"
    "meld"
    "behaviors/index"
    "components/switch/index"
    "components/list/list"
], (Backbone, Marionette, Handlebars, meld, Behaviors, switchComponent, ListCollectionView) ->

    Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
        Handlebars.compile(rawTemplate)

    Marionette.Behaviors.behaviorsLookup = () ->
        return Behaviors
    
    app = new Marionette.Application()

    app.addRegions
        switchRegion: "#switch"
        listRegion: "#list"

    app.switchRegion.show switchComponent

    AppRouterController = Marionette.Object.extend
        initialize: ->
            meld.before @, "_populateList", () =>
                app.listRegion.empty()
                @.listComponent = new ListCollectionView()

            meld.after @, "_populateList", () =>
                app.listRegion.show @.listComponent

        _populateList: (collectionMode) ->
            @.listComponent.setCollection collectionMode

        showContributorsList: ->
            @._populateList "contributors"

        showForksList: ->
            @._populateList "forks"

    appRouter = new Marionette.AppRouter
        controller: new AppRouterController
        appRoutes:
            "contributors"  : "showContributorsList"
            "forks"         : "showForksList"

    app.on "start", () ->
        Backbone.history.start()

    app.start()
