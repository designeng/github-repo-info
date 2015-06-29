define [
    "jquery"
    "underscore"
    "marionette"
], ($, _, Marionette) ->

    AccordionBehavior = Marionette.Behavior.extend
        ui:
            "title": ".accordion-section-title"

        events:
            "click @ui.title" : "onSectionTitleClick"

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