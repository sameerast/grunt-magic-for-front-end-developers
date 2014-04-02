/*! Copyright (c) 2014 Sameera Thilakasiri (http://www.sameerast.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1
 *
 */
 
 module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          // "target.css file": "source.less file"
        }
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['./*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
	jshint: {
      src: ['path/to/javascripts.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true
        }
      }
    },
	csslint: {
      strict: {
        src: ['*.css']
      },
      lax: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['*.css']
      }
	},
	
	concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['path/to/javascript.js'],
      dest: 'dist/built.js',
    },
  },
  concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["*.css"],
      dest: "styles.css"
    },
  },
  cssmin: {
	  combine: {
		files: {
		  'output.css': ['styles.css']
		}
	  }
  },
  uglify: {
  options: {
      mangle: false
    },
    my_target: {
      files: {
        'dest/output.min.js': ['dist/built.js']
      }
    }
  },
  imagemin: {
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'assets/',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'dist/'                  // Destination path prefix
      }]
    }
  }
  });
  
  // Load less task
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  // Load CSSLint task
  grunt.loadNpmTasks('grunt-contrib-csslint');
  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load JS concat task
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Load CSS concat task
  grunt.loadNpmTasks('grunt-concat-css');
  // Load CSS minify task
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load JS minify task
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load image optimize task
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  grunt.registerTask('default', ['csslint:lax']);
  grunt.registerTask('default', 'jshint');
  grunt.registerTask('default', 'concat');  
  grunt.registerTask('default', 'concat_css');
  grunt.registerTask('default', 'cssmin');
  grunt.registerTask('default', 'uglify');
  grunt.registerTask('default', 'imagemin');
  grunt.registerTask('default', ['watch']);
};
