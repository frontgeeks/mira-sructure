'use strict';
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          open:true,
          base: 'public',
          keepalive: true
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/css/core.css': 'app/assets/sass/core.sass'
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/assets/coffee',
          src: '{,**/}*.coffee',
          dest: 'public/javascripts',
          ext: '.js'
        }]
      }
    },
    watch: {
      coffee: {
        files: 'app/assets/coffee/{,**/}*.coffee',
        tasks: ['coffee'],
        options: {
          reload: true
        }
      },
      css: {
        files: 'app/assets/sass/{,**/}*.sass',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['sass', 'coffee']);
  grunt.registerTask('server',['sass', 'coffee','connect']);
  grunt.registerTask('work', ['coffee','sass', 'watch']);
};
