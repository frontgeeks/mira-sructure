define(
  [
    'marionette'
    'router'
    'app/helpers/api'
  ]
  (Marionette, Router, API) ->
    "use strict"

    App = new Marionette.Application

    App.addRegions
      nav : '#module-nav'
      content: '#region-content'
      sideLeft: '#region-left'
      sideRight: '#region-right'
    ui:
      content: '#region-content'

    App.on "initialize:before", ->
      console.log 'Before satart applications'
      new Router
        controller: API.init()
    App.addInitializer (options) ->
      console.log 'Satart applications'
    App.on "initialize:after", ->
      console.log 'After satart applications'
    App.content.on 'show', ->
      console.log 'show'
    App
)
