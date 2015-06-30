define [
    "jquery"
    "underscore"
    "marionette"
    "meld"
    "utils/ajax/ajaxRequest"
    "utils/storage/index"
], ($, _, Marionette, meld, AjaxRequest, storage) ->

    AccordionBehavior = Marionette.Behavior.extend

        initialize: ->
            @.removers = []
            @.removers.push meld.afterReturning @, "onLikeClick", @.afterPreferenceClick
            @.removers.push meld.afterReturning @, "onDislikeClick", @.afterPreferenceClick

        ui:
            "title"     : ".accordion-section-title"
            "like"      : ".like-wrapper"
            "dislike"   : ".dislike-wrapper"

        events:
            "click @ui.title"   : "onSectionTitleClick"
            "click @ui.like"    : "onLikeClick"
            "click @ui.dislike" : "onDislikeClick"

        onSectionTitleClick: (event) ->
            openSection = (selector) ->
                $(selector).slideDown(300).addClass('open')

            closeSection = ->
                $('.accordion .accordion-section-title').removeClass('active')
                $('.accordion .accordion-section-content')
                    .slideUp(300)
                    .removeClass('open')

            aTagElement = $(event.target).closest("a")
            currentAttrValue = aTagElement.attr('href')
            sectionId = _.last currentAttrValue.split("/")

            if aTagElement.is('.active')
                closeSection()
            else 
                closeSection()

                aTagElement.addClass('active')
                openSection("##{sectionId}")

            event.preventDefault()

        onLikeClick: ->
            data = 
                clientIP    : storage.clientIp
                entityTYPE  : @.view.getEntityType()
                entityID    : @.view.getEntityId()
                like        : true
            return JSON.stringify data

        onDislikeClick: ->
            data = 
                clientIp    : storage.clientIp
                entityTYPE  : @.view.getEntityType()
                entityID    : @.view.getEntityId()
                like        : false
            return JSON.stringify data

        afterPreferenceClick: (data) ->
            new AjaxRequest("/api/likes", data, "POST", "application/json")
