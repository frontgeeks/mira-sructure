/*!
 * mira-structure - lib/mira-structure.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

module.exports = miraStructure;


function miraStructure() {
}

miraStructure.getTemplate = function getTemplate(template, projectName) {
  template = template.toLowerCase();
  projectName = projectName.toLowerCase() || template;
  var templatePath = path.join(path.dirname(__dirname), 'templates/'+template);
  structureGenerator(templatePath, projectName)
}

function structureGenerator (templatePath, projectName) {
  fs.readdir(projectName, function  (err, files) {
    if(typeof files == 'undefined') {
      fs.mkdirSync(projectName);
      var currentPath = process.env.PWD+'/'+projectName;
      ncp(templatePath, currentPath, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('done!');
      });
    } else {
      console.log('Folder exist')
    }
  })

}
