define [
    "jquery"
    "underscore"
    "marionette"
    "hbs!components/list/contributor"
], ($, _, Marionette, contributorTemplate) ->

    ContributorItemView = Marionette.ItemView.extend
        tagName: "div"
        className: "accordion-section"
        template: contributorTemplate

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

            currentAttrValue = $(event.target).attr('href')

            author = _.last currentAttrValue.split("/")

            if $(event.target).is('.active')
                closeSection()
            else 
                closeSection()

                $(event.target).addClass('active')
                openSection("##{author}")

            event.preventDefault()