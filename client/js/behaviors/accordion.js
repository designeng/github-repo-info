define(["jquery", "underscore", "marionette"], function($, _, Marionette) {
  var AccordionBehavior;
  return AccordionBehavior = Marionette.Behavior.extend({
    ui: {
      "title": ".accordion-section-title"
    },
    events: {
      "click @ui.title": "onSectionTitleClick"
    },
    onSectionTitleClick: function(event) {
      var aTagElement, closeSection, currentAttrValue, openSection, sectionId;
      openSection = function(selector) {
        return $(selector).slideDown(300).addClass('open');
      };
      closeSection = function() {
        $('.accordion .accordion-section-title').removeClass('active');
        return $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
      };
      aTagElement = $(event.target).closest("a");
      currentAttrValue = aTagElement.attr('href');
      sectionId = _.last(currentAttrValue.split("/"));
      if (aTagElement.is('.active')) {
        closeSection();
      } else {
        closeSection();
        aTagElement.addClass('active');
        openSection("#" + sectionId);
      }
      return event.preventDefault();
    }
  });
});
