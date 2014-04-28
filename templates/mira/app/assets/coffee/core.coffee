"use strict"
require.config
  paths:
    backbone : '../components/backbone-amd/backbone'
    underscore : '../components/underscore-amd/underscore'
    jquery : '../components/jquery/dist/jquery'
    marionette : '../components/marionette/lib/core/amd/backbone.marionette'
    'backbone.wreqr' : '../components/backbone.wreqr/lib/backbone.wreqr'
    'backbone.eventbinder' : '../components/backbone.eventbinder/lib/amd/backbone.eventbinder'
    'backbone.babysitter' : '../components/backbone.babysitter/lib/amd/backbone.babysitter'
    text : '../components/text/text'

require ['app', 'app/helpers/templates', 'marionette'], (App, template, Marionette) ->

  App.start 'develop'

  Backbone.history.start
    pushState : true
    changeHash :false
