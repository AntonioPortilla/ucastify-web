module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	    my_target: {
	      files: {
	        'js/main.min.js': [
	        	'bower_components/jquery/dist/jquery.min.js',
	        	'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
	        	'scripts/main.js'
	        ]
	      }
	    }
	  },
	sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         
	        'css/prod/main.css': 'styles/main.scss'
	      }
	    }
	  },
    cssmin: {
      options: {
	      shorthandCompacting: false,
	      roundingPrecision: -1
      },
      target: {
	      files: {
	      	'css/main.min.css': [
	      		'bower_components/bootstrap/dist/css/bootstrap.css',
	            'css/prod/main.css', 
	            'css/prod/!*.min.css'
            ]
	      }
      }
    }
    /*cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['css/prod/*.css', 'css/prod/!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }*/
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('build', ['uglify', 'sass', 'cssmin']);

};