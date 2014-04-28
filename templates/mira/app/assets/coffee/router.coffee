define ['marionette'],  (Marionette) ->


  Marionette.AppRouter.extend

    initialize: ->
      console.log 'init:: Router -> AppRouter'

    appRoutes:
      ""                   : 'index'
