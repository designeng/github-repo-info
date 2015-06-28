define [
    "backbone"
], (Backbone) ->

    Contributor = Backbone.Model.extend({})

    ContributorsCollection = Backbone.Collection.extend
        url: "https://api.github.com/repos/marionettejs/backbone.marionette/stats/contributors"
        model: Contributor

        comparator: (a, b) ->
            return a.attributes.total < b.attributes.total

        modelId: (attrs) ->
            return attrs.author.login