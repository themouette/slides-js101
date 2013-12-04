/* global module:false */
module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            themes: {
                css: 'css/theme',
                scss: 'reveal.js/css/theme/source',
                local: {
                    scss: 'css/theme/source'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    hostname: '0.0.0.0'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    '<%= config.themes.css %>/reveal.min.css': [ '<%= config.themes.css %>/reveal.css' ]
                }
            }
        },

        sass: {
            main: {
                files: {
                    '<%= config.themes.css %>/openstudio.css': '<%= config.themes.local.scss %>/openstudio.scss',
                    '<%= config.themes.css %>/default.css': '<%= config.themes.scss %>/default.scss',
                    '<%= config.themes.css %>/beige.css': '<%= config.themes.scss %>/beige.scss',
                    '<%= config.themes.css %>/night.css': '<%= config.themes.scss %>/night.scss',
                    '<%= config.themes.css %>/serif.css': '<%= config.themes.scss %>/serif.scss',
                    '<%= config.themes.css %>/simple.css': '<%= config.themes.scss %>/simple.scss',
                    '<%= config.themes.css %>/sky.css': '<%= config.themes.scss %>/sky.scss',
                    '<%= config.themes.css %>/moon.css': '<%= config.themes.scss %>/moon.scss',
                    '<%= config.themes.css %>/solarized.css': '<%= config.themes.scss %>/solarized.scss'
                }
            }
        },

        watch: {
            theme: {
                files: [ '<%= config.themes.local.scss %>/*.scss', '<%= config.themes.scss %>/**/*.scss' ],
                tasks: 'themes'
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-sass' );

    grunt.registerTask( 'build', [ 'sass', 'cssmin' ] );
    grunt.registerTask( 'serve', [ 'connect:server:keepalive' ] );
    grunt.registerTask( 'themes', [ 'sass' ] );
    grunt.registerTask( 'default', [ 'serve' ] );
};
