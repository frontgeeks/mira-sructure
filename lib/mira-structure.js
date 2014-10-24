/*!
 * mira-structure - lib/mira-structure.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var path = require('path'),
    fs = require('fs'),
    fgen = require("fgen"),
    ncp = require('ncp').ncp;

module.exports = miraStructure;


function miraStructure() {
  console.log('Mira structure connect');
}

function getMira (projectName) {
  console.log('Get mira');
  ncp('templates/miraStyle', projectName+'/app/assets/sass/miraStyle', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('done!');
  });
}

miraStructure.getTemplate = function getTemplate(template, projectName) {
  template = template.toLowerCase();
  projectName = projectName.toLowerCase();
  var templatePath = path.join(path.dirname(__dirname), 'templates/'+template);
  var generator = fgen.createGenerator(templatePath, function() {
    generator.context = {
      name: "myProj"
    };
    generator.generateAll(projectName, function(err) {
      if (!err) console.log("Successful generation.");
    });
  });

  generator.on("error", function(err) {
    console.error(err);
  });
};
