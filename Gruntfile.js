module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/script.js'],
            options: {
                'esversion': 6
            }
        },
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            jshint: {
                files: ['Gruntfile.js', 'js/script.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'js/*.js',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: true,
                    browser: ['chrome']
                }
            }
        }
    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task(s)
    grunt.registerTask('default', ['sass', 'jshint', 'browserSync', 'watch']);
};
