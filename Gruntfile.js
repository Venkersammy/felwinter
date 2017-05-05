module.exports = function(grunt) {
  grunt.initConfig ({
    uglify: {
      js: {
        files: {
          'build/js/scripts.min.js': ['src/js/scripts.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    cssmin: {
      css: {
        files: [{
          expand: true,
          src: ['src/css/main.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
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
      js: {
        files: ['src/js/*.js'],
        tasks: ['jshint', 'uglify'],
      },
      css: {
        files: ['src/css/sass/*.sass'],
        tasks: ['sass', 'cssmin'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin', 'watch']);
};
