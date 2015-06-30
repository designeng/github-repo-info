define(["jquery", "underscore", "marionette", "meld", "utils/ajax/ajaxRequest", "utils/storage/index"], function($, _, Marionette, meld, AjaxRequest, storage) {
  var AccordionBehavior;
  return AccordionBehavior = Marionette.Behavior.extend({
    initialize: function() {
      this.removers = [];
      this.removers.push(meld.afterReturning(this, "onLikeClick", this.afterPreferenceClick));
      return this.removers.push(meld.afterReturning(this, "onDislikeClick", this.afterPreferenceClick));
    },
    ui: {
      "title": ".accordion-section-title",
      "like": ".like-wrapper",
      "dislike": ".dislike-wrapper"
    },
    events: {
      "click @ui.title": "onSectionTitleClick",
      "click @ui.like": "onLikeClick",
      "click @ui.dislike": "onDislikeClick"
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
    },
    onLikeClick: function() {
      var data;
      data = {
        clientIP: storage.clientIp,
        entityTYPE: this.view.getEntityType(),
        entityID: this.view.getEntityId(),
        like: true
      };
      return JSON.stringify(data);
    },
    onDislikeClick: function() {
      var data;
      data = {
        clientIP: storage.clientIp,
        entityTYPE: this.view.getEntityType(),
        entityID: this.view.getEntityId(),
        like: false
      };
      return JSON.stringify(data);
    },
    afterPreferenceClick: function(data) {
      return new AjaxRequest("/api/likes", data, "POST", "application/json");
    }
  });
});
