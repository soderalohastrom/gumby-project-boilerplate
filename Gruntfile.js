// Generated on 2013-11-18 using generator-bootstrap-less 3.2.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    src: require('./bower.json').srcPath || 'src',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ['<%= yeoman.src %>/js/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      less: {
        files: ['<%= yeoman.src %>/less/{,*/}*.less'],
        tasks: ['less']
      },
      sass: {
        files: ['<%= yeoman.src %>/scss/{,*/}*.scss'],
        tasks: ['sass']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.src %>/*.html',
          '<%= yeoman.src %>/partials/{,*/}*.hbs',
          '{.tmp,<%= yeoman.src %>}/css/{,*/}*.css',
          '{.tmp,<%= yeoman.src %>}/less/{,*/}*.less',
          '{.tmp,<%= yeoman.src %>}/js/{,*/}*.js',
          '<%= yeoman.src %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.src %>/ico/{,*/}*.{png,ico}',
          '<%= yeoman.src %>/fonts/{,*/}*.{eot,svg,ttf,woff}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.src %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.src %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/js/{,*/}*.js',
        '!<%= yeoman.src %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://localhost:<%= connect.options.port %>/index.html']
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/js',
          src: '{,*/}*.coffee',
          dest: '<%= yeoman.src %>/js',
          ext: '.js'
        }]
      }
    },
    less: {
      dist: {
        files: {
          '<%= yeoman.src %>/css/main.css': ['<%= yeoman.src %>/less/main.less']
        }/*,
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.src %>/css/main.css.map',
          sourceMapBasepath: '<%= yeoman.src %>/',
          sourceMapRootpath: '/'
        }*/
      }
    },
    sass: {
      dist: {
        files: {
          '<%= yeoman.src %>/css/main.css': ['<%= yeoman.src %>/scss/main.scss']
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js',
            '<%= yeoman.dist %>/css/{,*/}*.css',
            '<%= yeoman.dist %>/less/{,*/}*.less',
            '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/ico/{,*/}*.{png,ico}',
            '<%= yeoman.dist %>/fonts/{,*/}*.*',
            '<%= yeoman.dist %>/partials/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.src %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/img',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/img'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/css/main.css': [
            '.tmp/css/{,*/}*.css',
            '<%= yeoman.src %>/css/{,*/}*.css'
          ]
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.dist %>',
          src: [
            'CNAME',
            '*.{ico,png,txt,xml,md}',
            '.htaccess',
            'img/{,*/}*.{webp,gif}',
            'ico/{,*/}*.{png,ico}',
            'fonts/{,*/}*.*',
            'tpl/{,*/}*.*'
          ]
        }]
      },
      server: {
        files: [{
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>/bower_components/bootstrap/fonts/',
          dest: '<%= yeoman.src %>/fonts/glyphicons',
          src: ['*']
        }]
      }
    },
    concurrent: {
      dist: [
        'coffee',
        'less',
        'sass',
        'imagemin',
        'svgmin',
        'cssmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'coffee',
      'less',
      'sass',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'less',
    'sass',
    'copy:server',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'copy:server',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
