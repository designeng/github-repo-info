require.config

    baseUrl: "/js"

    paths: {

    }

    packages: [
        {
            name: "backbone"
            main: "backbone"
            location: "vendors/backbone"
        },
        {
            name: "marionette"
            main: "backbone.marionette"
            location: "vendors/marionette/lib"
        },
        {
            name: "underscore"
            main: "underscore"
            location: "vendors/underscore"
        },
        {
            name: "jquery"
            main: "jquery"
            location: "vendors/jquery/dist"
        }
    ]

    shim: {

    }

    hbs:
        templateExtension: ".html"