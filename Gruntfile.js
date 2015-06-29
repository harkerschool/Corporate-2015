module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            src: {
                files: ['src/scss/{,*/}*.{scss,sass}'],
                tasks: ['compile:css']
            }
        },

        sass: {
            src: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded',
                    compass: true,
                    loadPath: [
                        'src/bower_components/foundation/scss',
                        'src/bower_components/font-awesome/scss',
                        'src/bower_components/jQuery.mmenu/src/scss',
                        'src/bower_components/slick-carousel/slick'
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.{scss,sass}'],
                    dest: 'src/css',
                    ext: '.css'
                }]
            }
        },

        bless: {
            css: {
                options: {
                    banner: '/* this is a banner */',
                    imports: false,
                    force: true // allows script to overwrite file
                },
                files: {
                    'src/css/styles.css': 'src/css/styles.css'
                }
            }
        },

        file_append: {
            bless: {
                files: [{
                    prepend: '@charset "UTF-8";',
                    input: 'src/css/styles.css',
                    output: 'src/css/styles.css'
                }]
            }
        },

        clean: {
            dist: {
                dot: true,
                src: [
                    'dist/*',
                    '!dist/.git*'
                ]
            },
            bower: ['src/js/vendor/bower.js'],
            css: ['src/css/*']
        },

        // Concat Bower JS files. CSS styles are imported via SASS.
        bower_concat: {
            js: {
                dest: 'src/js/vendor/bower.js',
                exclude: [
                    'modernizr'
                ],
                mainFiles: {
                    'waypoints': [
                        'lib/jquery.waypoints.js',
                        'lib/shortcuts/sticky.js'
                    ]
                }
            }
            // css: {
            //     cssDest: 'src/css/vendor/bower.css',
            //     exclude: [
            //         'foundation',
            //         'font-awesome'
            //     ]
            // }
        },

        concat: {
            js: {
                src: ['src/js/vendor/*.js', 'src/js/*.js'],
                dest: 'dist/js/scripts.js'
            }
        },

        cssmin: {
            options: {
                banner: '/*! <%= pkg.title %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                expand: true,
                cwd: 'dist/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.title %> | <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            js: {
                src: ['dist/js/scripts.js'],
                dest: 'dist/js/scripts.min.js'
            },
            modernizr: {
                src: 'dist/js/vendor/modernizr.js',
                dest: 'dist/js/vendor/modernizr.min.js'
            }
        },

        copy: {
            modernizr: {
                src: 'src/bower_components/modernizr/modernizr.js',
                dest: 'dist/js/vendor/modernizr.js'
            },
            bower: {
                files: [{
                    expand: true,
                    cwd: 'src/bower_components/font-awesome/fonts/',
                    dest: 'src/fonts/vendor',
                    src: '*.*'
                }]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    dest: 'dist',
                    src: ['css/*.css']
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'src',
                    dest: 'dist',
                    src: [
                        'fonts/*.*',
                        'fonts/vendor/*.*',
                        'img/{,*/}*.*'
                    ]
                }]
            }
        }

    });

    // 1. Clean bower concat files
    // 2. Concat bower files (CSS & JS)
    // 3. Copy bower files that aren't CSS or JS (e.g. font files)
    grunt.registerTask('bower', [
        'clean:bower',
        'bower_concat',
        'copy:bower'
    ]);

    grunt.registerTask('compile:css', [
        'clean:css',
        'sass',
        'bless',
        'file_append:bless'
    ]);

    // 1. Clean dist files
    // 2. Concat bower files (CSS & JS) and save in dist folder
    // 3. Concat JS & CSS files and save in dist folder
    // 4. Copy modernizr.js to dist folder
    // 5. Minify CSS
    // 6. Minify JS
    // 7. Copy bower files that aren't CSS or JS (e.g. images, fonts) and save in dist folder
    // 8. Copy src files that arent's CSS or JS (e.g. images, fonts) and save in dist folder
    grunt.registerTask('build', [
        'clean',
        'sass',
        'bless',
        'file_append',
        'bower_concat',
        'concat',
        'copy:modernizr',
        'copy:css',
        'cssmin',
        'uglify',
        'copy:bower',
        'copy:dist'
    ]);

    grunt.registerTask('default' [
        'build'
    ]);

};