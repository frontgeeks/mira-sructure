define(
  [
    'marionette'
    'app/controllers/base'
  ]
  (Marionette, BaseController) ->

    class PagesController extends BaseController
      initialize : ->
        controllerName = 'PagesController'
        super controllerName
    PagesController
)
