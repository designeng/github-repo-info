require.config({
  baseUrl: "/js",
  paths: {},
  packages: [
    {
      name: "backbone",
      main: "backbone",
      location: "vendors/backbone"
    }, {
      name: "marionette",
      main: "backbone.marionette",
      location: "vendors/marionette/lib"
    }, {
      name: "underscore",
      main: "underscore",
      location: "vendors/underscore"
    }, {
      name: "jquery",
      main: "jquery",
      location: "vendors/jquery/dist"
    }, {
      name: "handlebars",
      main: "handlebars",
      location: "vendors/handlebars"
    }, {
      name: "text",
      main: "text",
      location: "vendors/text"
    }, {
      name: "hbs",
      main: "hbs",
      location: "vendors/requirejs-hbs"
    }, {
      name: "moment",
      main: "moment",
      location: "vendors/moment"
    }
  ],
  shim: {},
  hbs: {
    templateExtension: ".html"
  }
});

require(["app"], function() {});
