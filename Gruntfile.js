module.exports = function(grunt) {
  grunt.initConfig ({
    uglify: {
      js: {
        files: {
          'build/scripts.min.js': ['src/js/scripts.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    cssmin: {
      css: {
        files: {
          'build/styles.min.css' : ['src/css/main.css']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'src/css/main.css': 'src/css/sass/main.sass'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['jshint', 'uglify'],
      },
      css: {
        files: ['src/css/sass/*.sass'],
        tasks: ['sass', 'cssmin'],
      },
    },

    express: {
      all: {
        options: {
          port: 3000,
          hostname: 'localhost',
          bases: ['src'],
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'express', 'watch']);
};
