define(["jquery", "underscore", "marionette", "hbs!components/list/contributor"], function($, _, Marionette, contributorTemplate) {
  var ContributorItemView;
  return ContributorItemView = Marionette.ItemView.extend({
    tagName: "div",
    className: "accordion-section",
    template: contributorTemplate,
    ui: {
      "title": ".accordion-section-title"
    },
    events: {
      "click @ui.title": "onSectionTitleClick"
    },
    onSectionTitleClick: function(event) {
      var author, closeSection, currentAttrValue, openSection;
      openSection = function(selector) {
        return $(selector).slideDown(300).addClass('open');
      };
      closeSection = function() {
        $('.accordion .accordion-section-title').removeClass('active');
        return $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
      };
      currentAttrValue = $(event.target).attr('href');
      author = _.last(currentAttrValue.split("/"));
      if ($(event.target).is('.active')) {
        closeSection();
      } else {
        closeSection();
        $(event.target).addClass('active');
        openSection("#" + author);
      }
      return event.preventDefault();
    }
  });
});
