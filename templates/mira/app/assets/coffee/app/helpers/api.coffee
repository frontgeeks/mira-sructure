define(
  [
    'app/controllers/pages'
  ]
  (PageControllers) ->
    "use strict"

    API =
      init: ->
        index: ->
          @.go(PageControllers, 'index')
        go: (Controller, Method) ->
          controller = new Controller()
          controller[Method]()
          controller.close()
    API
)
