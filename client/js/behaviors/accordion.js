define(["jquery", "underscore", "marionette", "meld", "utils/ajax/ajaxRequest", "utils/storage/index"], function($, _, Marionette, meld, AjaxRequest, storage) {
  var AccordionBehavior;
  return AccordionBehavior = Marionette.Behavior.extend({
    initialize: function() {
      this.data = {
        clientIP: storage.clientIp
      };
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
      var aTagElement, closeSection, currentAttrValue, openSection, sectionId,
        _this = this;
      openSection = function(selector) {
        _this.sendPublicRateRequest().then(function(result) {
          return console.debug("RES:", result);
        });
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
      _.extend(this.data, {
        entityTYPE: this.view.getEntityType(),
        entityID: this.view.getEntityId(),
        like: true
      });
      return JSON.stringify(this.data);
    },
    onDislikeClick: function() {
      _.extend(this.data, {
        entityTYPE: this.view.getEntityType(),
        entityID: this.view.getEntityId(),
        like: false
      });
      return JSON.stringify(this.data);
    },
    afterPreferenceClick: function(data) {
      return new AjaxRequest("/api/likes", data, "POST", "application/json");
    },
    sendPublicRateRequest: function() {
      return new AjaxRequest("/api/likes/" + this.view.getEntityType(), null, "GET", "application/json");
    },
    onDestroy: function() {
      return _.each(this.removers, function(remover) {
        return remover.remove();
      });
    }
  });
});
