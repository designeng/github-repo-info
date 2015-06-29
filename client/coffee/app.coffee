define [
    "backbone"
    "marionette"
    "handlebars"
    "meld"
    "behaviors/index"
    "components/switch/index"
    "components/list/list"
    "components/preloader/index"
], (Backbone, Marionette, Handlebars, meld, Behaviors, switchComponent, ListCollectionView, preloaderComponent) ->

    Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
        Handlebars.compile(rawTemplate)

    Marionette.Behaviors.behaviorsLookup = () ->
        return Behaviors

    hidePreloader = ->
        preloaderComponent.hide()

    showPreloader = ->
        preloaderComponent.show()

    loadInstance = (ViewClass, beforeRenderCallback, afterRenderCallback) ->
        beforeRenderCallback()
        return new ViewClass({
            onRenderCallback: afterRenderCallback
        })
    
    app = new Marionette.Application()

    app.addRegions
        preloaderRegion     : "#preloader"
        switchRegion        : "#switch"
        listRegion          : "#list"

    app.preloaderRegion.show preloaderComponent
    app.switchRegion.show switchComponent

    AppRouterController = Marionette.Object.extend
        _populateList: (collectionMode) ->
            @.listComponent.setCollection collectionMode

        initialize: ->
            meld.before @, "_populateList", () =>
                app.listRegion.empty()
                @.listComponent = loadInstance(ListCollectionView, showPreloader, hidePreloader)

            meld.after @, "_populateList", () =>
                setTimeout () =>
                    app.listRegion.show @.listComponent, {forceShow: true}
                , 100

        showContributorsList: ->
            @._populateList "contributors"
            switchComponent.setSwitcherState "contributors"

        showForksList: ->
            @._populateList "forks"
            switchComponent.setSwitcherState "forks"

    appRouter = new Marionette.AppRouter
        controller: new AppRouterController
        appRoutes:
            "contributors"  : "showContributorsList"
            "forks"         : "showForksList"

    app.on "start", () ->
        Backbone.history.start()

    app.start()
