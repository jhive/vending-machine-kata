module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    files: ['src/**/*.js'],

    jade: {
      all: {
        options:{
          pretty: true,
        },
        files: {
          'index.html':['index.jade']
        }
      }
    },

    jshint: {
      files: ['<%= files %>', '!src/**/*.spec.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },

    mochaTest: {
      test: {
        src: ['src/**/*.spec.js'],
        options: {
          reporter: 'spec'
        }
      }
    },

    watch: {
      options:{
        livereload: true
      },
      all: {
        files: ['<%= files %>'],
        tasks: ['clear', 'jshint', 'mochaTest']
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('test', ['jshint', 'mochaTest']);
  grunt.registerTask('build', ['jade']);
  grunt.registerTask('default', ['clear', 'test', 'watch']);
};
