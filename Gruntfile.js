'use strict'

module.exports = function(grunt) {

// Load grunt tasks
  require('load-grunt-tasks')(grunt);

// Grunt configuration
  grunt.initConfig({
    clean:{
      src:"dist/"
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            'js/*.js',
            'views/js/*.js'
          ],
          dest: 'dist/',
        }]
        // files: {
        //   'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
        //   'dist/views/js/main.min.js': ['src/views/js/main.js']
        // }
      }
    },
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            'css/*.css',
            'views/css/*.css'
          ],
          dest: 'dist/',
          // ext: '.min.css'
        }]
        // files: {
        //   'dist/css/app.min.css': ['src/css/*.css',],
        //   'dist/views/css/pizza.min.css': ['src/views/css/*.css',]
        // }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            '*.html',
            'views/*.html'
          ],
          dest: 'dist/'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            'img/*.{png,jpg,gif}',
            'views/images/*.{png,jpg,gif}'
          ],
          dest: 'dist/'
        }]
      }
    }
  });

  // Register default tasks
  grunt.registerTask('build', [
    'clean',
    // 'useminPrepare',
    'uglify',
    'cssmin',
    'htmlmin',
    'imagemin',
    // 'usemin'
  ]);
}
