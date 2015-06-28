define [
    "backbone"
    "moment"
], (Backbone, moment) ->

    Fork = Backbone.Model.extend({})

    ForksCollection = Backbone.Collection.extend
        url: "https://api.github.com/repos/marionettejs/backbone.marionette/forks"
        model: Fork

        comparator: (a, b) ->
            return moment(a.attributes.created_at).unix() < moment(b.attributes.created_at).unix()