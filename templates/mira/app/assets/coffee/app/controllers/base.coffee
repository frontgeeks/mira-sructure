define(
  [
    'marionette'
  ]
  (Marionette) ->

    class BaseController extends Marionette.Controller

      initialize : (controllerName) ->
        console.log "init:: Controller -> #{controllerName}"
      index : ->
        console.log 'Index Page Load'

    BaseController

)
