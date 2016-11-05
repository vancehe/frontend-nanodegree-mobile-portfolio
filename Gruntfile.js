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
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true
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
    'uglify',
    'cssmin',
    'htmlmin',
    'imagemin',
    ]);
}
